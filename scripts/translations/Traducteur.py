#!/usr/bin/env python
# coding: utf-8

import i18n
from googletrans import Translator
def translate(list_words, dest='fr'):
    translator = Translator()
    i18n.load_path.append('translations')
    trans_words = []
    for word in list_words:
        if(i18n.t('En.{}'.format(word)).startswith('En')):
            word_trans = (translator.translate(word, dest='{}'.format(dest))).text
            try:
                fichier = open('translations/En.en.yml', 'a')
                fichier.writelines('\n  {}: {}'.format(word, word_trans))
                fichier.close()
            except:
                print("Some Error occur")
        else:
            word_trans = i18n.t("En.{}".format(word))
        trans_words.append(word_trans)
    return trans_words

