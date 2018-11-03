"""

Script for testing database access to the the twitter data


"""

from pymongo import MongoClient
import getpass

def connect_mongoDB(username,password):
    '''Connect to MondoDB'''
    connection_string = 'mongodb+srv://{}:{}@bananamania-aojj2.mongodb.net/test?retryWrites=true'.format(username,password)
    client = MongoClient(connection_string, maxPoolSize=50)
    db = client.tweets
    return client



if __name__ == "__main__":
    
    username = input("Username: ")
    password = getpass.getpass()

    client = connect_mongoDB(username,password)
    database = client.tweets
    collection = database.tweets

    test_tweet = collection.find_one()
    print("SUCCCESS")
    print("Sample tweet:\n%s" % test_tweet['full_text'])
