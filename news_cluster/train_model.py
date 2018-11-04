import nltk.cluster
import pandas as pd
import numpy as np
import sys

from nltk.tokenize import word_tokenize
from text_tokenizer import generate_tokens
from gensim.models.doc2vec import TaggedDocument, Doc2Vec

# Read training and output files from command line
train_file = sys.argv[1]
if len(sys.argv) <3:
	model_file = 'news.model'
else:
	model_file = sys.argv[2]

# Config
include_only_refugee_articles = True

# Load + tokenize articles
articles = pd.read_csv(train_file)

print('Tokenizing articles...')
tokens = generate_tokens(articles['body'].tolist(), include_only_refugee_articles = include_only_refugee_articles)
texts = [' '.join(i) for i in tokens]

# Model training
tagged_documents = [TaggedDocument(words=word_tokenize(_d), tags=[str(i)])\
                    for i, _d in enumerate(texts)]

max_epochs = 50
vector_size = 50
alpha = 0.025

model = Doc2Vec(dm=1,
                vector_size=vector_size,
                alpha=alpha, 
                min_alpha=0.0025,
                min_count=2)
  
model.build_vocab(tagged_documents)

for epoch in range(max_epochs):
    print('Training iteration ' + str(epoch+1) + ' of ' + str(max_epochs) + "...")
    model.train(tagged_documents,
                total_examples=model.corpus_count,
                epochs=model.epochs)
    # decrease the learning rate
    model.alpha -= 0.002
    # fix the learning rate, no decay
    model.min_alpha = model.alpha
    
print('\nSaving Model...')
model.save(model_file)


