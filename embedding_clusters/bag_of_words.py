import csv
import pandas as pd
import numpy as np
from argparse import ArgumentParser
from sklearn.feature_extraction.text import CountVectorizer
from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize, word_tokenize
from utils import preprocess

stop_words = set(stopwords.words('english'))

def bag_of_words(keyword, n):
    rows = db.loc[db['u4u_dataset'] == keyword]
    text = rows['full_text'].values
    count_vec = CountVectorizer(preprocessor=preprocess, stop_words=stop_words)
    vec = count_vec.fit(text)
    bag_of_words = vec.transform(text)

    sum_words = bag_of_words.sum(axis=0)
    words_freq = [(word, sum_words[0, idx]) for word, idx in     vec.vocabulary_.items()]
    words_freq =sorted(words_freq, key = lambda x: x[1], reverse=True)

    return words_freq[:n]

if __name__ == '__main__':
    parser = ArgumentParser()
    parser.add_argument('-f', dest='path')
    parser.add_argument('-o', dest='out_file')
    parser.add_argument('-n', dest='num_words')
    args = parser.parse_args()

    num_words = int(args.num_words)

    db = pd.read_csv(args.path, lineterminator='\n')
    keywords = db['u4u_dataset'].value_counts()
    with open(args.out_file, 'w') as f:
        for keyword in keywords.index:
            f.write(keyword + ',')
            common_words = bag_of_words(keyword, num_words)
            for i in range(num_words-1):
                f.write(common_words[i] + ',')
            f.write(common_words[num_words-1] + '\n')
