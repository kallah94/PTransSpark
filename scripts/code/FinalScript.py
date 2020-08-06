#!/usr/bin/env python
# coding: utf-8

#import findspark
import sys
#findspark.init()
from pyspark.sql import SparkSession
from pyspark.sql.types import FloatType, StringType, StructType, StructField, IntegerType
from pyspark.sql import Row
from pyspark.sql.functions import lit
#import gensim
#import i18n
#from googletrans import Translator
#from gensim import models
#from gensim.models import Word2Vec, KeyedVectors
from math import radians, cos, sin, asin, sqrt
import json

spark = SparkSession.builder.appName("TransBigData").config("spark.some.config.option", "some-value").getOrCreate()

sc = spark.sparkContext

schema2 = StructType([    StructField("geoname_id", IntegerType(), True),    StructField("POI_name", StringType(), True),    StructField("POI_asciiname", StringType(), True),    StructField("POI_alternatenames", StringType(), True),    StructField("POI_latitude", FloatType(), True),    StructField("POI_longitude", FloatType(), True),    StructField("feature_class", StringType(), True),    StructField("feature_code", StringType(), True),    StructField("country_code", StringType(), True),    StructField("cc2", StringType(), True),    StructField("admin1_code", StringType(), True),    StructField("admin2_code", StringType(), True),    StructField("admin3_code", StringType(), True),    StructField("admin4_code", StringType(), True),    StructField("population", IntegerType(), True),    StructField("elevation", IntegerType(), True),    StructField("dem", IntegerType(), True),    StructField("timezone", StringType(), True),    StructField("Modification_date", StringType(), True),    StructField("AdminCodes", StringType(), True)])

df_POI_SN = spark.read.csv("../oulimata/PTransSpark/scripts/SN.txt", sep="\t", header=True, schema=schema2)
df_POI_SN = df_POI_SN.drop(
    "feature_class",\
    "feature_code",\
    "country_code",\
    "cc2",\
    "admin1_code",\
    "admin2_code",\
    "admin3_code",\
    "admin4_code",\
    "population",\
    "elevation",\
    "dem",\
    "timezone",\
    "Modification_date",\
    "AdminCodes")

df_SN = spark.read.csv("../oulimata/PTransSpark/scripts/fichiertest.tsv", sep="\t", header=True)
df_filtre = df_SN.filter(~df_SN["longitude"].isin(""))
df_filtre = df_filtre.filter(~df_SN["latitude"].isin(""))
df_filtre = df_filtre.filter(~df_SN["description"].isin(""))

def IsIn(longitude,latitude,POI_longitude,POI_latitude):
    radius = 50
    R = 6371000 # Rayon de la Terre en mètres
    dY = 360 * radius / R # radius est le rayon de couverture de notre zone
    dX = dY * cos (radians (latitude))
    left = longitude - dX
    bottom = latitude - dY 
    right = longitude + dX
    top = latitude + dY
    if((left <= POI_longitude <= right) and (bottom <= POI_latitude <= top)):
        return True
    else :
        return False
    
def NeighboursItem(df):
    alttd = None
    item_lat = float(sys.argv[1])
    item_lon = float(sys.argv[2])
    lgd = None
    raduis = 50
    R = 6371000 # Raton de la terre
    neigh = []
    for i in range(0, df.count()):
        poi_lat = float(df.select('POI_latitude').collect()[i][0])
        poi_lon = float(df.select('POI_longitude').collect()[i][0])
        print(i)
        if(IsIn(item_lon, item_lat,poi_lon, poi_lat)) :
            neigh.append(df.collect()[i])
            print(df.collect()[i])
    return neigh

data = NeighboursItem(df_POI_SN)
try:
    with open('../oulimata/PTransSpark/src/assets/data/'+sys.argv[3]+'.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
except:
    print("une erreur est survenue !!!!")

