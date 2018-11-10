import json
from enum import Enum, auto

from sqlalchemy import JSON

from src.config.setup import db
from src.model.serializable import SerializableEnum, Serializable


class FormType(SerializableEnum):
    DASS = auto()
    TEXT = auto()


class Form(db.Model, Serializable):
    __tablename__ = 'form'

    id           = db.Column(db.Integer, primary_key=True)
    type         = db.Column(db.Enum(FormType))
    choices_json = db.Column(JSON)

    def serialize(self):
        return {
            'id'     : self.id,
            'type'   : self.type,
            'choices': json.load(self.choices_json)
        }

    def __repr__(self):
        return '<Form {}>'.format(self.id)

