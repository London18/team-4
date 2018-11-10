from enum import Enum, auto

from sqlalchemy import ForeignKey

from src.server import db


class FormType(Enum):
    DASS = auto()
    TEXT = auto()


class Form(db.Model):
    __tablename__ = 'form'

    id      = db.Column(db.Integer, primary_key=True)
    type    = db.Column(db.Enum(FormType))

    def __repr__(self):
        return '<Form {}>'.format(self.id)

