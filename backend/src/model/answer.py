from enum import Enum

from sqlalchemy import ForeignKey

from src.server import db


class Answer(db.Model):
    __tablename__ = 'answer'

    id             = db.Column(db.Integer, primary_key=True)
    question_id    = db.Column(db.Integer, ForeignKey('question.id'), nullable=False)
    user_id        = db.Column(db.Integer, ForeignKey('user.id'), nullable=False)
    value          = db.Column(db.String(256), nullable=False)
    answer_date    = db.Column(db.DateTime, nullable=False)
    time_to_answer = db.Column(db.Float, nullable=True)
    attention_span = db.Column(db.Float, nullable=True)

    def __repr__(self):
        return '<Answer {}>'.format(self.id)

