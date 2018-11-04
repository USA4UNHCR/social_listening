# Actually cluster news articles
from gensim.models.doc2vec import Doc2Vec
from text_tokenizer import generate_tokens, is_refugee_article
import nltk.cluster
import pandas as pd
import sys
import yaml

# Read input and output files from command line
try:
	cluster_input_file = sys.argv[1]
except IndexError:
	print('ERROR: Requires an input filename of texts to cluster.')
	sys.exit(1)

if len(sys.argv) < 3: 
	cluster_output_file = 'output/cluster_assignments.csv' 
else:
	cluster_output_file = sys.argv[2]

if len(sys.argv) < 4:
	model_file = 'news.model'
else:
	model_file = sys.argv[3]

# Load config
with open("config.yml", 'r') as ymlfile:
    cfg = yaml.load(ymlfile)
    include_only_refugee_articles = cfg['articles']['include_only_refugee_articles']
    num_clusters = cfg['clustering']['clusters']
    num_cluster_repeats = cfg['clustering']['num_cluster_repeats']

# Generate tokens
print("Generating tokens...")
articles = pd.read_csv(cluster_input_file)
articles_to_use = []
article_texts = []
if include_only_refugee_articles == True:
	for i in articles['body']:
		if is_refugee_article(str(i)):
			articles_to_use.append(True)
		else:
			articles_to_use.append(False)
	article_texts = articles['body'][articles_to_use]
	articles = articles[articles_to_use]
else:
	article_texts = articles['body']

tokens = generate_tokens(article_texts, include_only_refugee_articles = include_only_refugee_articles)

texts = [' '.join(i) for i in tokens]

# Vectorize texts
print("Converting texts to vectors...")
model = Doc2Vec.load(model_file)
document_vectors = []
for i in range(0,len(texts)):
    vec = model.infer_vector(texts[i])
    document_vectors.append(vec)

# Generate clusters
print("Creating clusters...")
kmeans = nltk.cluster.KMeansClusterer(num_clusters, avoid_empty_clusters=True,\
                                          distance=nltk.cluster.util.cosine_distance,\
                                          repeats=num_cluster_repeats)
clusters = kmeans.cluster(document_vectors, assign_clusters=True)

print("Writing clusters to file...")
articles['cluster'] = clusters
articles.to_csv(cluster_output_file, index=False)
