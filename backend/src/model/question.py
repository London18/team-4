import json
from enum import Enum, auto

from sqlalchemy import ForeignKey

from src.config.setup import db
from src.model.form import Form
from src.model.serializable import SerializableEnum, Serializable


class QuestionType(SerializableEnum):
    SLIDER = auto()
    TEXT   = auto()
    YES_NO = auto()


class Question(db.Model, Serializable):
    __tablename__ = 'question'

    id      = db.Column(db.Integer, primary_key=True)
    form_id = db.Column(db.Integer, ForeignKey('form.id'))
    text    = db.Column(db.String(256), nullable=False)
    type    = db.Column(db.Enum(QuestionType), nullable=False)

    def serialize(self):
        dto = Serializable.serialize(self)
        if self.type == QuestionType.SLIDER:
            choices_model_json = Form.query.get(self.form_id).choices
            dto['choices'] = json.loads(choices_model_json)
        return dto

    def __repr__(self):
        return '<Question {}>'.format(self.id)

