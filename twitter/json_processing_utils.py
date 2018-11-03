import os
import json
from bloom_filter import BloomFilter
from pymongo import MongoClient
from pprint import pprint
import dns
import boto3
from decimal import Decimal
from datetime import datetime
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import seaborn as sns

'''
- Get time coverage (DONE: Sept 13 2018 until Oct 21 2018)
- Get distributed of #retweets and #favorited (DONE: very skewed, fav count
more than retweet count, retween count RTs higher than original. 5 retweet good
cutoff for original)
- data set only original tweets (for local use)
- data set only with location data (for local use)
- data set most popular tweets (as defined by retweets, fav counts too skewed) and their retweets
- Batch insert data into MongoDB (use .insert_many())
'''


KEYWORDS = ['asylumseekers','asylumseeker','withrefugees','USA for UNHCR',
            '@UNRefugeeAgency','@Refugees','TEDxKakumaCamp','RefugeesWelcome',
            'unhcr','syrianrefugees','syrianrefugee','rohingyarefugees',
            'rohingya','asylum','migrants','immigrants','refugee','refugees'] 


filepath = '../../data/twitter'


'''
For some useful info on twitter jsons, see:
    https://developer.twitter.com/en/docs/tweets/data-dictionary/overview/intro-to-tweet-json#retweet
'''


def get_jsonfiles():
    '''Get all files from (data) folder'''
    return [jsonfile for jsonfile in os.listdir(filepath) if jsonfile.endswith('.ldjson')]


def get_json(filepath, jsonfiles):
    '''Step through all files (generator)'''
    for jsonfile in jsonfiles:
        with open(os.path.join(filepath, jsonfile)) as f:
            print('Processing file: {}'.format(jsonfile))
            name = jsonfile.split('_')[0]
            for line in f:
                yield json.loads(line), name


def process_json(jsongenerator):
    ''' Including deduplication. TODO: adjust max capacity bloom'''
    bloom = BloomFilter(max_elements=400000, error_rate=0.1)
    for data, name in jsongenerator:
        if data['id'] not in bloom:
            bloom.add(data['id'])
            get_text_data(data)
            # add more operations here, if desired
        else:
            print('Duplicate id: {}. Discard.'.format(data['id']))
    print('Done processing.')


def get_text_data(data):
    '''A filter to just get data for text analysis.
    Only original tweets, i.e., no quotes or retweets.'''
    filename = 'tweettext_data.csv'
    if 'retweeted_status' not in data.keys():
        full_text, entities = handle_truncation(data)
        if data['place'] is not None:
            place_type = data['place']['place_type']
            full_name = data['place']['full_name']
            country_code = data['place']['country_code']
        else:
            place_type, full_name, country_code = None, None, None
        savestring = '{}|{}|{}|{}|{}|{}|{}|{}|{}|{}|{}\n'.format(
            data['id'], 
            data['created_at'], 
            full_text, 
            data['user']['id'], 
            data['user']['name'], 
            data['user']['screen_name'],
            data['retweet_count'], 
            data['favorite_count'],
            place_type,
            full_name,
            country_code
        )
        if os.path.isfile(os.path.join(filepath, filename)) is True:
            with open(os.path.join(filepath, filename), 'a') as f:
                f.write(savestring)
        else:
            with open(os.path.join(filepath, filename), 'w') as f:
                f.write('id|created_at|full_text|user_id|user_name|user_screenname|retweet_count|favorite_count|place_type|full_name|country_code\n')
                f.write(savestring)


def handle_truncation(data):
    ''' Makes sure we get full text and entities in full text, removes line
    breaks and other multiple white spaces (which may cause trouble for .csv). '''
    if data['truncated'] is True:
        full_text = data['extended_tweet']['full_text']
        entities = data['extended_tweet']['entities']
    else:
        full_text = data['full_text']
        entities = data['entities']
    return ' '.join(full_text.split()), entities
 

def get_geo_data(d):
    '''Filter, get only data with location information (point or bounding
    box).'''
    pass


def tweet_stats(jsongenerator):
    '''Count total, count deduplicated, count original, count w. location '''
    tweet_counts = {}
    current_name = 'default'
    for data, name in jsongenerator:
        if name != current_name:
            current_name = name
            tweet_counts[name] = {}
            tweet_counts[name]['total'] = 0
            tweet_counts[name]['deduped'] = 0
            tweet_counts[name]['original'] = 0
            tweet_counts[name]['location'] = 0
            bloom = BloomFilter(max_elements=2000000, error_rate=0.1)
        tweet_counts[name]['total'] += 1
        if data['id'] not in bloom:
            bloom.add(data['id'])
            tweet_counts[name]['deduped'] += 1
            if 'retweeted_status' not in data.keys():
                tweet_counts[name]['original'] += 1
            if data['place'] is not None:
                tweet_counts[name]['location'] += 1
        else:
            print('Duplicate')
    return tweet_counts


def save_tweet_counts(tweet_counts):
    ''' Save the tweet_counts dict. '''
    with open(os.path.join(filepath, 'tweet_counts.csv'), 'w') as f:
        for dataset in tweet_counts:
            for countype in tweet_counts[dataset]:
                savestring = '{},{},{}\n'.format(
                    dataset, countype, tweet_counts[dataset][countype]
                )
                f.write(savestring)
    print('Saved.')


def get_date(tweetdate):
    '''Convert string to datetime.'''
    return datetime.strptime(tweetdate, '%a %b %d %X %z %Y')


def get_date_stats(jsons):
    dates = []
    for tweet, name in jsons:
        dates.append(get_date(tweet['created_at']))
    df = pd.DataFrame({'created_at': dates})
    date_counts = df.groupby(
        [df["created_at"].dt.year, df["created_at"].dt.month,
         df["created_at"].dt.day]
    ).count()
    return date_counts


def get_fav_counts(jsons):
    favecount, retweets = [], []
    for tweet, name in jsons:
        if 'retweeted_status' not in tweet.keys():
            favecount.append(tweet['favorite_count'])
            retweets.append(tweet['retweet_count'])
    return favecount, retweets


def get_MongoDB_client(connection_string):
    '''Connect to MondoDB.'''
    print('Connecting to: {}.'.format(connection_string))
    client = MongoClient(connection_string, maxPoolSize=50)
    return client


def connect_tweetsdb(client):
    '''Connect to, or create, database.'''
    db = client.tweets
    return db


def insert_tweet_mongodb(db, tweet, name):
    '''Insert single tweet into MongoDB'''
    collection = db.tweets
    post_id = collection.insert_one(tweet).inserted_id


def insert_many_tweets_mongodb(db, jsons):
    '''Instert many tweets into MongoDB.'''
    tweets, ntweets = [], 0
    collection = db.tweets
    for tweet, name in jsons:
        ntweets += 1
        tweet['u4u_dataset'] = name
        tweets.append(tweet)
        if len(tweets) == 1000:
            print('Inserting data into MongoDB. Inserted: {}'.format(ntweets))
            collection.insert_many(tweets)
            tweets = []
    if len(tweets) > 0:
        collection.insert_many(tweets)
    print('Finished insert of tweets. Inserted total: {}.'.format(ntweets))


def connect_dynamoDB():
    '''Connect to dynamoDB. Needs .aws config files in user directory.'''
    dynamoDB = boto3.resource('dynamodb')
    return dynamoDB


def insert_tweet_dynamodb(table, tweet, name):
    '''Insert a single tweet into dynamoDB'''
    tweet = clean_empty(tweet)
    tweet = convert_2_decimal(tweet)
    table.put_item(Item=tweet)


def clean_empty(jsondata):
    '''DynamoDB does not accept empty strings. This is a workaround.'''
    if not isinstance(jsondata, (dict, list)):
        return jsondata
    if isinstance(jsondata, list):
        return [v for v in (clean_empty(v) for v in jsondata) if v or v != '']
    return {k: v for k, v in ((k, clean_empty(v)) for k,v in jsondata.items()) if v or v != ''}


def convert_2_decimal(jsondata):
    '''DynamoDB does not accept float values. This is a workaround.'''
    if not isinstance(jsondata, (dict, list)):
        return jsondata
    if isinstance(jsondata, list):
        return [v if not isinstance(v, float) else Decimal(str(v)) for v in (convert_2_decimal(v) for v in jsondata)]
    return {k: v if not isinstance(v, float) else Decimal(str(v)) for k, v in ((k, convert_2_decimal(v)) for k, v in jsondata.items())}


def insert_many_tweets_dynamodb(db, jsons):
    '''Inserting using JSONS generator. Currently set for debugging.'''
    table = db.Table('tweets')
    n = 0
    for tweet, name in jsons:
        n += 1
        try:
            insert_tweet_dynamodb(table, tweet, name)
            print(n)
        except:
            print('Error.')
            return tweet, name
    print('Finished insert.')


