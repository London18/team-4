from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from src.config.load import load_config

config = load_config()

db_user   = config['db_user']
db_pass   = config['db_pass']
db_host   = config['db_host']
db_schema = config['db_schema']

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://{}:{}@{}/{}'.format(db_user, db_pass, db_host, db_schema)
db = SQLAlchemy(app)


@app.route('/')
def index():
    return "Hello, World!"


if __name__ == '__main__':
    app.run(debug=True)


