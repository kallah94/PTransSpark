from flask import Flask
from flask import request
import json, requests, textwrap
from flask_restful import Api, Resource, abort, reqparse
import service


LIVY_URL = "http://localhost:8989"

app = Flask(__name__)
api = Api(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/loginSession', methods=['GET', 'POST'])
def create_sssion():
    if request.method == 'POST' :
        data = request.get_json()
        return service.createSession(data)

@app.route('/sessions')
def all_session():
    return service.getAllsessions()

@app.route('/sessions/<int:session_id>', methods=['GET'])
def infosession(session_id):
    if request.method == 'GET':
        return service.getSession(session_id)

@app.route('/deleteSession/<int:id>', methods=['POST'])
def delete_session(id):
    return service.deleteSession(id)

@app.route('/sessions/<int:id>/statements', methods=['POST'])
def createStatement(id):
    data = request.get_json()
    return service.createStatement(id, data)

@app.route('/sessions/'+str(0)+'/statements/'+str(0))
def getStatement():
    return service.getStatement(0)

@app.route('/batches')
def Allbatches():
    return service.getAllBatches()

@app.route('/createBatche')
def create_batche():
    return service.submitBatchJob()

@app.route('/batches/'+str(0))
def getbatche():
    return service.getBatche(0)

@app.route('/deleteBatche/'+str(0))
def delete_batche():
    return service.deleteBatche(4)

