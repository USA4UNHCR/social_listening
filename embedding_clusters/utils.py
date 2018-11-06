from nltk.stem import PorterStemmer
import pandas as pd
import numpy as np
import re
import os

ps = PorterStemmer()

def preprocess(sent):
    string = ''
    for word in sent.split(' '):
        word = word.lower()
        #clean text outside of stop words
        if word.find('https') == -1 and word.find('amp') == -1:
            curr = ps.stem(word)
            string += curr + ' '
    return string

def display_topics(model, feature_names, no_top_words):
    topics = []
    for topic_idx, topic in enumerate(model.components_):
        topics.append([feature_names[i]
                        for i in topic.argsort()[:-no_top_words - 1:-1]])
    return topics

def open_csvs(paths):
    final = pd.read_csv(paths[0], lineterminator='\n')
    final['source'] = re.findall(r".*/(.*)\.csv", paths[0])[0]
    for i in range(1, len(paths)):
        tmp = pd.read_csv(paths[i], lineterminator='\n')
        tmp['source'] = re.findall(r".*/(.*)\.csv", paths[i])[0]
        final = pd.concat([final, tmp], axis=0, ignore_index=True)
    return final

def read_csvs(data_path):
    paths = [data_path + path for path in os.listdir(data_path) if path.find('csv') != -1]
    print(paths)
    data = open_csvs(paths)
    return data

def get_text(data):
    text = data['text']
    documents = text.values

    skip = []
    for i in range(len(documents)):
        try:
            documents[i] = documents[i].replace('\n', ' ')
            documents[i] = documents[i].replace('\r', ' ')
            if documents[i] == np.nan:
                skip.append(i)
        except:
            skip.append(i)
    docs = np.delete(documents, skip, axis=0)

    return docs
