import pandas as pd
import numpy as np
import json
from bs4 import BeautifulSoup
import ast
import os
from argparse import ArgumentParser

class NewsCleaner:
    """Class to clean news."""
    def __init__(self, raw_data_dir, output_path):
        """
        Parameters
        ----------
        raw_data_dir : string
            Parent directory of all raw data. Should contain subdirectories of each
            publication.

        clean_output_dir : string
            Output directory for cleaned news data.

        filename : string
            Output filename.
        """
        self.DATA_DIR = raw_data_dir
        self.OUTPUT_PATH = output_path

    def clean(self, publication):
        """
        Clean a set of news articles.

        Parameters
        ----------
        publication : string
            Name of publication. This must also match the name of the
            directory under DATA_DIR at which the json files are stored.
            Currently supported publications:
                - chicagotribune
                - foxnews
                - breitbart

            Verified unsupported publications:
                - wsj (paywall)
                - nydailynews (scraper does not appear to be correct)
        """
        if publication == 'chicagotribune':
            self._clean_chicago(publication)
        elif publication == 'foxnews':
            self._clean_fox(publication)
        elif publication == 'breitbart':
            self._clean_breitbart(publication)
        else:
            raise NotImplementedError(f"{publication} is not supported")

    def _read_jsons(self, news_dir):
        """
        From a news directory, read each article from each json.

        Parameters
        ----------
        news_dir: string
            Directory containing all json files.
        """
        news_jsons = []
        for filename in os.listdir(news_dir):
            with open(os.path.join(news_dir, filename)) as f:
                # Read articles one by one until there are none left
                while True:
                    article = f.readline()
                    if not article:
                        break
                    else:
                        news_jsons.append(article)

        return news_jsons

    def _json_to_df(self, news_jsons):
        """
        Convert list of jsons to a pandas DataFrame.
        """
        df = pd.DataFrame({'url': [ast.literal_eval(article)['url'] for article in news_jsons],
                        'html': [ast.literal_eval(article)['html'] for article in news_jsons]})

        return df



    def _clean_chicago(self, news_dir):
        CT_DIR = os.path.join(self.DATA_DIR, news_dir)

        ct_jsons = self._read_jsons(CT_DIR)
        df = self._json_to_df(ct_jsons)

        def extract_chicago(row):
            bs = BeautifulSoup(row['html'])

            title = bs.title.text if bs.title else ''
            text = ' '.join([p.text.strip() for p in bs.findAll('p')])

            row['title'] = title
            row['text'] = text

            return row

        df = df.apply(extract_chicago, axis=1)

        df.drop(columns=['html']).to_csv(self.OUTPUT_PATH, index=False)

    def _clean_fox(self, news_dir):
        FOX_DIR = os.path.join(self.DATA_DIR, news_dir)

        fox_jsons = self._read_jsons(FOX_DIR)
        df = self._json_to_df(fox_jsons)

        def extract_fox(row):
            bs = BeautifulSoup(row['html'])
            title = bs.title.text if bs.title else ''
            text = ' '.join([p.text.strip() for p in bs.findAll('p', class_=None)])
            row['title'] = title
            row['text'] = text

            return row

        df = df.apply(extract_fox, axis=1)

        df.drop(columns=['html']).to_csv(self.OUTPUT_PATH, index=False)

    def _clean_breitbart(self, news_dir):
        BREIT_DIR = os.path.join(self.DATA_DIR, news_dir)

        breit_jsons = self._read_jsons(BREIT_DIR)
        df = self._json_to_df(breit_jsons)

        def extract_breit(row):
            bs = BeautifulSoup(row['html'])
            title = bs.title.text if bs.title else ''
            text = ' '.join([p.text.strip() for p in bs.findAll('p', class_=None)])
            row['title'] = title
            row['text'] = text

            return row

        df = df.apply(extract_breit, axis=1)

        df.drop(columns=['html']).to_csv(self.OUTPUT_PATH, index=False)

if __name__ == '__main__':
    parser = ArgumentParser()
    parser.add_argument('-r', dest='raw_data_dir')
    parser.add_argument('-p', dest='publication')
    parser.add_argument('-f', dest='output_path')
    args = parser.parse_args()

    cleaner = NewsCleaner(args.raw_data_dir, args.output_path)
    cleaner.clean(args.publication)
