# HackABetterWorld

by Alex Chan and Junseo Park

## Overview
The goal of the project was to create useful tools for improving refugee outcomes. We approached this
with the intention of finding a useful way of representing how refugees are talked about in social media
and in the news, as well as how to determine ways of identifying the demographics of these people and how
to engage with them in social media.

## Data
We worked with Twitter and news article data from UNHCR. The Twitter data was gathered based on keywords
related to refugees and immigration. More information on the data can be found [here](https://github.com/USA4UNHCR/social_listening).

## How To Run
To run any of the scripts, use the following command with its specified input parameters. Make sure to place any data within this repository.

```
python <SCRIPT_NAME>.py
```

If you need help on what the input parameters are, type this command:
```
python <SCRIPT_NAME>.py -h
```

## TensorFlow Embedding Visualization
The embeddings are generated using the Universal Sentence Encoder. You can feed the output of this into the
TensorFlow projector for PCA or t-SNE visualization. This can be accomplished with this command:

```
python generate_embeddings.py -f <DATA_PATH> -e <OUTPUT_EMBEDDING_FILE> -t <OUTPUT_TEXT_FILE>
```

The `OUTPUT_EMBEDDING_FILE` and `OUTPUT_TEXT_FILE` are `.tsv` files.

To visualize the embeddings created by the generate_embeddings.py script, you can head to the [TensorFlow Projector](https://projector.tensorflow.org/) and load the specified .tsv data directly into the interface.
