# News Article Clustering Scripts

A script that can cluster documents (such as news articles) based on similar terms and topics. 
It also (optionally) performs keyword filtering to train on and cluster only texts with refugee-related keywords.

In combination with an article scraping pipeline, this could be used to track the incidence of refugee-related articles over time that share different features or sub-topics.

## Main Components

### train_model.py

A script that takes as its first argument a .CSV file of text documents to use to train a Doc2Vec model and project the documents into a vector space (which is then saved to a file named by the second argument, defaulting to 'news.model'). The only format expected of the .CSV is that it contains a column called 'body' with text.

This is an important precursor to the actual document clustering, as the clusters will be determined by distance between document vectors. Arguments: input .CSV filename, output model filenme (optional)

### cluster.py

A script that takes an input file of documents to cluster, using a saved Doc2Vec model generated from train_model.py (defaults to looking for 'news.model'). Currently uses K-Means clustering, with a number of clusters specified in the configuration portion of the script. The a column called "cluster" is appended to the output .CSV file with the cluster assignment for a given document.

Arguments: input .CSV filename (which has a column called 'body'), output .CSV filename (optional), Doc2Vec model name (optional)

## Supporting Components

### unpack_json_articles.py

This extracts article body text from .JSON files of the form that were presented at the hackathon, and attempts to weed out parse failures and duplicates, storing them into a .CSV where each component is a column (header, sub-header, body, timestamp).

Files are loaded from the json/ directory and the final product in the output/ directory. It leverages some (very slightly tweaked) functions from the provided json_utils.py in order to do this.

### text_tokenizer.py

Supporting functions to tokenize text documents, strip out noise + stopwords, etc. Also contains the refugee keyword filtering function.

## Miscellaneous

### environment.yml

Contains a dump of the packages in the Python (Anaconda) environment used for this project (may contain a few extra unused general data sci packages -- sorry!)

### 'notebooks' directory

Contains a V1 attempt at document cluster of Fox News articles, using cluster word frequency to understand the topics.

## Ideas for further development

A few of the many ways this could be improved:

1. Data pipeline development
..* Currently the script assumes input data in a .JSON format from the hackathon or HTML body text stored neatly into a 'body' column of a .CSV. Extending this to cover other input formats and improve performance would be useful.

2. Leverage metadata
..* Assuming reliable extraction of timestamp and header/sub-header can be built into the data pipeline for this script, scripts to leverage said data -- e.g. plotting document frequency by cluster by article date -- would make it easier to get to useful insights.

3. Algorithm tuning
..* Currently the parameters in the Doc2Vec model and especially the k-means cluster model haven't been extensively tuned -- these could use further optimization for better results

4. Universal configuration
..* Currently configuration options are stored in the "Config" section of the python scripts, and some options are duplicated across scripts. :/

