from enum import Enum, auto

from sqlalchemy import ForeignKey

from src.config.setup import db


class QuestionType(Enum):
    OPTIONS = auto()
    TEXT    = auto()
    YES_NO  = auto()


class Question(db.Model):
    __tablename__ = 'question'

    id      = db.Column(db.Integer, primary_key=True)
    form_id = db.Column(db.Integer, ForeignKey('form.id'))
    text    = db.Column(db.String(256), nullable=False)
    type    = db.Column(db.Enum(QuestionType), nullable=False)

    def __repr__(self):
        return '<Question {}>'.format(self.id)

