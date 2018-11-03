import os
import json
import argparse
import getpass
import random

from pymongo import MongoClient
from bs4 import BeautifulSoup


DATALOC = '../../data/news/'
KEYWORDS = ['refugee', 'refugees', 'migrant', 'migrants', 'asylum', 'rohingya',
            'immigrant', 'immigrants', 'UNHCR', 'UN Refugees', 'ICE',
            'deportation', 'border wall', 'illegal border crossing', 'syrians',
           'rohingya', 'fleeing']


def get_jsonfiles(foldername):
    '''Get all files from folder'''
    foldername = os.path.join(DATALOC, foldername)
    return [jsonfile for jsonfile in os.listdir(foldername) if jsonfile.endswith('.json')]


def get_jsons(jsonfiles, foldername):
    for jsonfile in jsonfiles:
        with open(os.path.join(DATALOC, foldername, jsonfile), 'r') as f:
            for line in f:
                yield json.loads(line)


def get_article_text(html):
    '''Get full text: h1, h2, body.'''
    soup = BeautifulSoup(html)
    try:
        article = soup.find('article')
    except AttributeError:
        return (False, )
    try:
        segments = article.findAll('p')
        fulltext = []
        for segment in segments:
            fulltext.append(segment.text)
    except AttributeError:
        return (False, )
    try: 
        h1 = article.find('h1').text 
    except AttributeError: 
        h1 = ''
    try: 
        h2 = article.find('h2').text 
    except AttributeError: 
        h2 = ''
    try:
        timetag = soup.find('time')
        timetag = (timetag.text, timetag.attrs['datetime'])
    except AttributeError:
        timetag = ('', '')
    return (True, (h1, h2, ' '.join(fulltext[:-1]), timetag))


def parse_success(jsons):
    with open('not_parsed.csv', 'w') as f:
        f.write('Not parsed URLs\n')
    success, total = 0, 0
    for article in jsons:
        total += 1
        parsed = get_article_text(article['html'])
        if parsed[0]:
            success += 1
        else:
            print('Skipped {}.'.format(article['url']))
            with open('not_parsed.csv', 'a') as f:
                savestring = '{}\n'.format(article['url'])
                f.write(savestring)
    return success, total


def refugee_related(text):
    for keyword in KEYWORDS:
        if keyword in text:
            return True
    return False


def get_MongoDB_client(connection_string):
    '''Connect to MondoDB.'''
    print('Connecting to: {}.'.format(connection_string))
    client = MongoClient(connection_string, maxPoolSize=50)
    return client


def connect_newsarticlesdb(client):
    '''Connect to, or create, database.'''
    db = client.newsarticles
    return db


def insert_many_newsarticles(jsons, db):
    narticles, skipped, nrelated, = 0, 0, 0
    rarticles, urarticles = [], []
    for article in jsons:
        narticles += 1
        parsed = get_article_text(article['html'])
        if parsed[0]:
            article['h1'] = parsed[1][0]
            article['h2'] = parsed[1][1]
            article['body_text'] = parsed[1][2]
            article['datetime'] = parsed[1][3][1]
            article['publication_day'] = parsed[1][3][0]
            related = refugee_related(parsed[1][2])
            article['refugee_related'] = related
            if related:
                nrelated += 1
                rarticles.append(article)
            else:
                urarticles.append(article)
        else:
            skipped += 1
        if len(rarticles) == 100:
            collection = db.breitbart
            print('Inserting data into MongoDB. Inserted: {}'.format(2*len(rarticles)))
            collection.insert_many(rarticles)
            collection.insert_many(random.sample(urarticles, len(rarticles)))
            rarticles, urarticles = [], []
    if len(rarticles) > 0:
        collection = db.breitbart
        collection.insert_many(rarticles)
        collection.insert_many(random.sample(urarticles, len(rarticles)))
    print('Finished insert of articles. Total: {}. Skipped {}.  Relevant {}.'.format(narticles, skipped, nrelated))


def main():

    cluster = 'bubblegum-odoit.mongodb.net'

    parser = argparse.ArgumentParser()
    parser.add_argument(
        'publication',
        type=str,
        nargs=1,
        help='Provide name of folder / publication',
    )
    args = parser.parse_args()

    username = input("Username: ")
    pw = getpass.getpass()

    connection_string = 'mongodb+srv://{}:{}@{}/test?retryWrites=true'.format(
        username,
        pw,
        cluster
    )

    client = get_MongoDB_client(connection_string) 
    db = connect_newsarticlesdb(client)

    jsonfiles = get_jsonfiles(args.publication[0])
    jsons = get_jsons(jsonfiles, args.publication[0])

    insert_many_newsarticles(jsons, db)


if __name__=='__main__':
    main()
