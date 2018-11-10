from datetime import datetime

from flask import request
from sqlalchemy.exc import SQLAlchemyError

from src.config.setup import app, db
from src.decorators.serialize import json_response
from src.model.answer import Answer


@app.route('/answer', methods=['POST'])
@json_response
def post_answer():
    body           = request.get_json()
    user_id        = body['user-id']
    question_id    = body['question-id']
    answer_text    = body['answer']
    time_to_answer = body['time-to-answer']
    attention_span = body['attention_span']
    answer_date    = datetime.now()

    answer = Answer(question_id    = question_id,
                    user_id        = user_id,
                    value          = answer_text,
                    answer_date    = answer_date,
                    time_to_answer = time_to_answer,
                    attention_span = attention_span
    )

    try:
        db.session.add(answer)
        db.session.commit()
        return answer
    except SQLAlchemyError:
        db.session.rollback()
        raise
