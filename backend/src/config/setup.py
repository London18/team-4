from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy

from src.config.load import load_config

config = load_config()

db_user   = config['db_user']
db_pass   = config['db_pass']
db_host   = config['db_host']
db_schema = config['db_schema']

# app = Flask(__name__)
app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://{}:{}@{}/{}'.format(db_user, db_pass, db_host, db_schema)
db = SQLAlchemy(app)

# add controllers here to load them
import src.controller.form_controller

