from enum import Enum, auto

from sqlalchemy import ForeignKey

from src.config.setup import db
from src.model.serializable import SerializableEnum, Serializable


class QuestionType(SerializableEnum):
    OPTIONS = auto()
    TEXT    = auto()
    YES_NO  = auto()


class Question(db.Model, Serializable):
    __tablename__ = 'question'

    id      = db.Column(db.Integer, primary_key=True)
    form_id = db.Column(db.Integer, ForeignKey('form.id'))
    text    = db.Column(db.String(256), nullable=False)
    type    = db.Column(db.Enum(QuestionType), nullable=False)

    def serialize(self):
        d = Serializable.serialize(self)
        d['type'] = self.type.serialize()
        return d

    def __repr__(self):
        return '<Question {}>'.format(self.id)

