# Lyric Generator

## Overview

Created for CSI 4180 (Natural Language Processing) at Oakland University, the objective of this project was to accomplish a task related to NLP by creating and evaluating a few different types of language models that employ different methods using the tools provided by [HuggingFace](https://huggingface.co/docs).
The models we created were a simple bag-of-words model, a fine-tuned model, and a model that uses prompt engineering.
From there, we were to select the method that gave us the best results and create a user interface to easily interact with the app.
In my case, I went with a fine-tuned language model ([DistilGPT-2](https://huggingface.co/distilbert/distilgpt2), specifically), that would generate song lyrics, given a song title, optional artist name, and optional starting lyrics.
I fine-tuned the model using a [dataset of song lyrics](https://www.kaggle.com/datasets/carlosgdcj/genius-song-lyrics-with-language-information) and the free GPU access provided by [Google Colab](https://colab.research.google.com/).
Finally, I deployed the model to a HuggingFace Space with an easy-to-use Gradio interface.

## Accessing the project

The HuggingFace Space is available [here](https://huggingface.co/spaces/dmocnik/lyric-generator), and the source code used to train and interact with the various models is on this Google Colab notebook [here](https://colab.research.google.com/drive/1r78TWBXTDtele-k8_XHCxFVjouC4b4Ob?usp=sharing). \
***WARNING: Due to the nature of the lyrics the model was trained on, it may (and probably will) produce lyrics that are not the most appropriate.  Use with caution.***

## Screenshot

![](../assets/projects/lyrics_0.png)
<center><em>The Gradio interface with some generated lyrics</em></center>