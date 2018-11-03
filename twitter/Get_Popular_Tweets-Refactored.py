
# coding: utf-8

# In[1]:


import getpass
from pymongo import MongoClient
import pandas as pd
import numpy as np


# In[10]:


batchsize = 10000


# In[8]:


def get_login():
    ''' prompts user to enter username and password for logging in '''
    username = getpass.getpass("Username:")
    password = getpass.getpass("Password:")
    return([username,password])


# In[6]:


def get_threshold_retweet_ct():
    popular_retweetct =getpass.getpass("Get Tweets with at least this number of Retweet Count:")
    return popular_retweetct


# In[3]:


def connect_mongoDB(username,password):
    ''' pass username and password in to connect to mongodb cluster '''
    connection_string = 'mongodb+srv://{}:{}@bananamania-aojj2.mongodb.net/test?retryWrites=true'.format(username,password)
    client = MongoClient(connection_string)
    return client


# In[5]:


def flattenDict(d, result=None):
    '''
    Creates pandas dataframe from nested dictionary
    '''
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


# In[ ]:


def pull_data(username, password,popular_retweetct,numdocs,batchsize):
    client = connect_mongoDB(username,password)
    db = client.tweets
    popular_tweets=pd.DataFrame()
    for i in range(0, numdocs, batchsize):
        templist =  list(db['tweets'].find({'retweet_count':{'$gte':popular_retweetct},'retweeted_status':{'$exists':True}}, {'retweeted_status.created_at':1,'retweeted_status.id':1,'retweeted_status.full_text':1,'favorite_count':1,'retweeted_status.retweet_count':1,'u4u_dataset':1,'user.description':1,
                                                               'retweeted_status.user.created_at':1,'retweeted_status.user.followers_count':1,'retweeted_status.user.friends_count':1,'retweeted_status.user.lang':1,'retweeted_status.user.listed_count':1,'retweeted_status.user.location':1,
                                                              'retweeted_status.user.name':1,'retweeted_status.user.screen_name':1},skip=i,limit=batchsize))
        tweetdf = pd.DataFrame([flattenDict(tweet) for tweet in templist])
        filtered_df = tweetdf.groupby('retweeted_status.id', group_keys=False).apply(lambda x: x.loc[x["retweeted_status.retweet_count"].idxmax()])
        popular_tweets = popular_tweets.append(filtered_df)
        print('completed ', str(i), ' records')
    return popular_tweets


# In[7]:


def main():
    login = get_login()
    username, password = login
    popular_retweetct = get_threshold_retweet_ct()
    client = connect_mongoDB(username,password)
    db = client.tweets    
    numdocs = db['tweets'].find({'retweet_count':{'$gte':popular_retweetct},'retweeted_status':{'$exists':True}}).count()
    popular_tweets = pull_data(username, password, popular_retweetct, numdocs, batchsize)
    popular_tweets = popular_tweets.drop(['retweeted_status.id'], axis=1).reset_index()
    popular_tweets = popular_tweets.groupby('retweeted_status.id', group_keys=False).apply(lambda x: x.loc[x["retweeted_status.retweet_count"].idxmax()])
    popular_tweets.to_csv('popular_tweets.csv',index=False, encoding='utf-8-sig')


# In[ ]:


if  __name__ =='__main__':
    main()

