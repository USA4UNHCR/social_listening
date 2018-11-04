# Tokenizes article text to make ready for modeling; also flags refugee-related texts
from nltk.tokenize import RegexpTokenizer
from nltk.corpus import stopwords

# Stopwords
stops = set(stopwords.words('english'))
stops.update(['xa','said','i','n','would','a','and','it','a','people','one','new','many','the'])

# Refugee article flags
article_keywords = ['refugee', 'refugees', 'migrant', 'migrants', 'asylum', 'rohingya',
            'immigrant', 'immigrants', 'immigration','UNHCR', 'UN Refugees',
            'deportation', 'border wall', 'illegal border crossing', 'syria',
           'rohingya']

# Function defs
def is_refugee_article(article_text):
    match_count = 0
    for i in article_keywords:
        if i in article_text.lower():
            return True
    return False

def tokenize_article(text):
    tokenizer = RegexpTokenizer(r'[^\d\W]+')
    tokens = tokenizer.tokenize(text)
    tokens = [i.lower() for i in tokens if not i.lower() in stops]
    return tokens

def generate_tokens(text_series, include_only_refugee_articles):
	tokens = []
	for i in text_series:
		if include_only_refugee_articles == True:
			if not is_refugee_article(str(i)):
				continue

		tokens.append(tokenize_article(str(i)))
	return tokens