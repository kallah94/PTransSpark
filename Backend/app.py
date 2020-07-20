from flask import Flask
from flask import request
import json, requests, textwrap
from flask_restful import Api, Resource, abort, reqparse
from flask_mysqldb import MySQL
from flask import jsonify
from flask_cors import CORS
from Backend import model, UserService, service
from werkzeug.security import generate_password_hash, check_password_hash
LIVY_URL = "http://localhost:8989"

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)

#configuration de la DB
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'kallah'
app.config['MYSQL_PASSWORD'] = 'kallah'
app.config['MYSQL_DB'] = 'bdtrans'
mysql = MySQL(app)

@app.route('/')
def hello_world():
    return 'Succes Hello, World!'

@app.route('/loginSession', methods=['GET', 'POST'])
def create_session():
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

@app.route('/createBatche', methods=['GET', 'POST'])
def create_batche():
  if request.method == 'POST':
    data = request.get_json()
    return service.createBatche(data['file'])

@app.route('/batches/'+str(0))
def getbatche():
    return service.getBatche(0)

@app.route('/deleteBatche/<int:id>')
def delete_batche(id):
    return service.deleteBatche(id)

@app.route('/register', methods=['POST'])
def register():
    user = model.User()
    userForm = request.get_json()
    user.__dict__.update(userForm)
    user.password = generate_password_hash(user.password)
    try:
        UserService.save(mysql, user)
    except:
        return jsonify({'error': 'An Error Occurred saving the user '}), 500
    return jsonify({'message': 'User registred successfully'}), 201

@app.route('/login', methods = ['POST'])
def login():
    print(request.get_json())
    return 'ok'