import nltk
import pandas as pd
import string
from argparse import ArgumentParser
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from utils import open_csvs, read_csvs, get_text

parser = ArgumentParser()
parser.add_argument('-f', dest='data_path')
parser.add_argument('-o', dest='out_file')
args = parser.parse_args()

if __name__ == '__main__':
    print("Reading data")
    data = read_csvs(args.data_path)
    documents = get_text(data)

    sid = SentimentIntensityAnalyzer()

    with open(args.out_file, 'w') as f:
        for x in messages:
            ss = sid.polarity_scores(x)
            out_line = x + ',' + str(ss['compound']) + '\n'
