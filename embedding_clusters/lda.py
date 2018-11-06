import csv
import pandas as pd
import numpy as np
from argparse import ArgumentParser
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from sklearn.decomposition import LatentDirichletAllocation, NMF
from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize, word_tokenize
from utils import preprocess, display_topics

if __name__ == '__main__':
    parser = ArgumentParser()
    parser.add_argument('-f', dest='path')
    parser.add_argument('-o', dest='out_file')
    parser.add_argument('-n', dest='num_features')
    parser.add_argument('-t', dest='num_topics')
    parser.add_argument('-w', dest='num_words')
    args = parser.parse_args()

    num_features = int(args.num_features)
    num_topics = int(args.num_topics)
    num_words = int(args.num_words)

    db = pd.read_csv(args.path, lineterminator='\n')
    documents = db['full_text']

    tf_vectorizer = CountVectorizer(max_df=0.95, min_df=2, max_features=num_features, stop_words='english', preprocessor=preprocess)
    tf = tf_vectorizer.fit_transform(documents)
    tf_feature_names = tf_vectorizer.get_feature_names()
    lda = LatentDirichletAllocation(n_topics=num_topics, max_iter=5, learning_method='online', learning_offset=50.,random_state=0).fit(tf)

    topics = display_topics(nmf, tfidf_feature_names, num_words)

    with open(args.out_file, 'w') as f:
        for index, words in enumerate(topics):
            f.write("Topic " + str(index) + '\n')
            f.write(' '.join(words) + '\n')
