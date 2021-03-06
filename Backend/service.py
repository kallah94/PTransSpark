import requests, json
from Backend import model
from IPython.utils import text

LivyUrl = 'http://localhost:8998'
SessionsUrl = LivyUrl+'/sessions'
SessionUrl = SessionsUrl+'/'
batchesUrl = LivyUrl+'/batches'
batcheUrl = batchesUrl+'/'
headers = {'Content-Type': 'application/json'}

def getAllsessions():
    r = requests.get(SessionsUrl)
    return r.json()

def createSession(posted_data):
    r = requests.post(SessionsUrl, data=json.dumps(posted_data), headers=headers)
    return r.json()

def getSession(id):
    r = requests.get(SessionUrl+str(id))
    return r.json()

def deleteSession(id):
    r = requests.delete(LivyUrl+'/sessions/'+str(id))
    return r.json()

def createStatement(id, data):
    r = requests.post(LivyUrl+'/sessions/'+str(id)+'/statements', data=json.dumps(data), headers=headers)
    return r.json()

def getStatement(id):
    r = requests.get(LivyUrl+'/sessions/'+str(id)+'/statements/'+str(id))
    return r.json()

def deleteStatement(id):
    r = requests.post(LivyUrl+'/sessions/'+str(id)+'/statements/'+str(id)+'/cancel')
    return r.json()


def getAllBatches():
    r = requests.get(batchesUrl)
    return r.json()

def createBatche(posted_data):
    #pybatch = {
    #   'file': '/home/devtool/Lab/Web/PTransSpark/scripts/somme.py',
     #  'args': [1, 29, '--sum']
    #}

    r = requests.post(batchesUrl, data=json.dumps(posted_data), headers=headers)
    print(r.json())
    return r.json()

def getBatche(id):
    r = requests.get(batcheUrl+str(id))
    return r.json()

def deleteBatche(id):
    r = requests.delete(batcheUrl+str(id))
    return r.json()

def submitBatchJob(data):
    data = model.BatchEncoder().encode(data)
    r = requests.post(batchesUrl, data=json.dumps(data), headers=headers)
    return r.json()


 #batch = model.Batch('LivyServer',
    #'/opt/spark/examples/jars/spark-examples_2.11-2.4.4.jar',
    #'org.apache.spark.examples.SparkPi',
    #'hadoop',
    #'20g',
    #None,
    #None,
    #[200])

    #pybatch = {
    #   'file': '/home/devtool/Lab/Web/PTransSpark/scripts/somme.py',
     #  'args': [1, 29, '--sum']
    #}