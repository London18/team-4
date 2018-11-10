from enum import Enum, auto

from src.config.setup import db
from src.model.serializable import SerializableEnum, Serializable


class FormType(SerializableEnum):
    DASS = auto()
    TEXT = auto()


class Form(db.Model, Serializable):
    __tablename__ = 'form'

    id   = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.Enum(FormType))

    def __repr__(self):
        return '<Form {}>'.format(self.id)

