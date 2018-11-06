import tensorflow as tf
import tensorflow_hub as hub
import matplotlib.pyplot as plt
import numpy as np
import os
import pandas as pd
import re
import seaborn as sns
from argparse import ArgumentParser
from utils import open_csvs, read_csvs, get_text

module_url = "https://tfhub.dev/google/universal-sentence-encoder/2"
tf.logging.set_verbosity(tf.logging.ERROR)
np.random.seed(6)

def get_embeddings(data):
    embed = hub.Module(module_url)
    with tf.Session() as session:
        session.run([tf.global_variables_initializer(), tf.tables_initializer()])
        embeddings = session.run(embed(data))
    return embeddings

if __name__ == '__main__':
    parser = ArgumentParser()
    parser.add_argument('-f', dest='data_path')
    parser.add_argument('-e', dest='out_file_embeds', help='tsv file for embeddings')
    parser.add_argument('-t', dest='out_file_text', help='tsv file for text')
    args = parser.parse_args()

    print("Reading data")
    data = read_csvs(args.data_path)
    documents = get_text(data)

    print("Generating embeddings")
    embeddings = get_embeddings(documents)

    print("Saving embeddings")
    np.savetxt(args.out_file_text, documents, fmt="%s")
    np.savetxt(args.out_file_embeds, embeddings, delimiter="\t")
