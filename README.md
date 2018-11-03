# Social Listening Project

The goal is to give the USA for UNHCR's Communications Team and the USA for
UNHCR's Fundraising Teams a better understanding of current conversation about
refugees and refugee issues in social and popular media to allow them to engage
effectively with supporters and to craft effective fundraising campains. 

The typical USA for UNHCR donor is middle aged, white, and female. How can we
expand the reach of USA for UNHCR to help them raise the means for UN Refugee
field missions and resettlement in the US and globally? 

Not all conversation in the public, on social media or in the press, is
welcoming to refugees. Based on current themes, and tone, how can we guide
conversations in a more fruitful direction?

## Twitter data:
We have more than 5 million tweets are in a MongoDB (we will provide access)
and there are smaller files in .csv format for targeted analysis. The
Twitter data was collected over a period of about 6 weeks in September and
October 2018. We got all tweets from the Twitter API with the following
keywords:

 - immigrants
 - refugees
 - migrants
 - asylum
 - refugee
 - rohingya
 - @Refugee
 - unhcr
 - RefugeesWelcome
 - withrefugees
 - asylumseekers
 - asylumseeker
 - @UNRefugeeAgency
 - syrianrefugees
 - TEDxKakumaCamp
 - rohinyarefugees
 - syrianrefugee
 - USA for UNHCR

Due to our collection method, there are some duplicates tweets (so, make sure to deduplicate). For information about tweet JSON, check the (really good) documentation provided by Twitter: https://developer.twitter.com/en/docs/tweets/data-dictionary/overview/intro-to-tweet-json 

## News data:
We have news article data from several publications. We have parsed the html of
news articles from The Washington Post and Breitbart, data for both
publications is in a MongoDB (half refugee related articles and a random sample
of non-refugee related articles). An article is refugee related if it contains
any of the following keywords:

 - refugee
 - refugees
 - migrant
 - migrants
 - asylum
 - rohingya
 - immigrant
 - immigrants
 - UNHCR
 - UN Refugees
 - ICE
 - deportation
 - border wall
 - illegal border crossing
 - syrians
 - rohingya
 - fleeing
 - illegal alien

This casts a wide net, of course (too wide?). We have data from more news
publications which we will share using USB drives (to not overload the wifi). 

Before diving into the data, we encourage you to think what may help USA for
UNHCR? Sometimes, the simplest ideas are the most impactful. 
