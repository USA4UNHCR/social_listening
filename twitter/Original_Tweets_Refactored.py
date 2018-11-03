import getpass
import pandas as pd
import numpy as np

from pymongo import MongoClient

def get_login():
    ''' prompts user to enter username and password for logging in '''
    username = getpass.getpass("Username:")
    password = getpass.getpass("Password:")
    return([username,password])

def connect_mongoDB(username,password):
    ''' pass username and password in to connect to mongodb cluster '''
    connection_string = 'mongodb+srv://{}:{}@boysenberry-hl61l.mongodb.net/'
    'test?retryWrites=true'.format(username,password)
    client = MongoClient(connection_string)
    return client

def pull_data(username,password):
    ''' use open mongodb connection to pull data as docs '''
    connection = connect_mongoDB(username,password)
    db = connection.tweets
    # docs = db['tweets'].find_one() #for testing purposes
    docs = list(db['tweets'].find({"retweeted_status":{"$exists":False}},   \
        {'created_at':1,'full_text':1,'favorite_count':1,'retweet_count':1, \
        'u4u_dataset':1,'user.description':1, 'user.created_at':1,  \
        'user.followers_count':1,'user.friends_count':1,'user.lang':1,      \
        'user.listed_count':1,'user.location':1, 'user.name':1,             \
        'user.screen_name':1}))
    return docs

def flattenDict(d, result=None):
    ''' create pandas dataframe from nested dictionary '''
    if result is None:
        result = {}
    for key in d:
        value = d[key]
        if isinstance(value, dict):
            value1 = {}
            for keyIn in value:
                value1[".".join([key,keyIn])]=value[keyIn]
            flattenDict(value1, result)
        elif isinstance(value, (list, tuple)):   
            for indexB, element in enumerate(value):
                if isinstance(element, dict):
                    value1 = {}
                    for keyIn in element:
                        newkey = ".".join([key,keyIn])        
                        value1[".".join([key,keyIn])]=value[indexB][keyIn]
                    for keyA in value1:
                        flattenDict(value1, result)   
        else:
            result[key]=value
    return result

def main():
    # prompt for username and password
    login = get_login()
    username, password = login
    # pull data
    docs = pull_data(username, password)
    # flatten data into pandas dataframe
    tweetdf = pd.DataFrame([flattenDict(tweet) for tweet in docs])
    # export as csv with UTF encoding
    tweetdf.to_csv('original_tweets.csv',index=False,encoding='utf-8-sig')

if  __name__ =='__main__':
    main()    