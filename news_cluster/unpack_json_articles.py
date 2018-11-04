# Unpacks JSON files for training
import json_utils as ju
import pandas as pd
import os

# Config
foldername = os.path.join('json/')
output_file = 'output/unpacked_articles.csv'

# Unpack JSON
jsonfiles = [jsonfile for jsonfile in os.listdir(foldername) if jsonfile.endswith('.json')]
jsonfiles = jsonfiles[0:20]
jsons = ju.get_jsons(jsonfiles)
article = next(jsons)

print("Unpacking files...")
articles = pd.DataFrame()
for article in jsons:
    article_temp = ju.get_article_text(article['html'])

    # Parse failures always have length 1; 2+ otherwise
    if (len(article_temp) > 1):
    	header = article_temp[1][0] if len(article_temp[1][0]) > 0 else ''
    	sub_header = article_temp[1][1] if len(article_temp[1][1]) > 0 else ''
    	body = article_temp[1][2] if len(article_temp[1][2]) > 0 else ''
    	article_timestamp = article_temp[1][3] if len(article_temp[1][3]) > 0 else ''
    	article_to_join = pd.DataFrame({'header': header, 'sub_header': sub_header, 'body': body, 'timestamp': article_timestamp})
    	articles = pd.concat([articles, article_to_join], axis = 0)

print("Writing article text to file...")
articles.iloc[:,0:3].drop_duplicates(inplace = True)
articles.to_csv(output_file,index = False)


