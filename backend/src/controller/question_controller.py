from flask import Response, request

from src.config.setup import app
from src.decorators.serialize import json_response
from src.model.form import Form
from src.model.question import Question


@app.route('/question/list/<form_id>', methods=['GET'])
@json_response
def get_questions(form_id):
    form = Form.query.get(form_id)
    if form:
        return Question.query.filter_by(form_id=form_id).all()
    return Response(status=404)


# @app.route('/question', methods=['POST'])
# @json_response
# def post_form():
#     body      = request.get_json()
#     form_type = body['form-type']
#
#     try:
#         form = Form(type=form_type)
#         db.session.add(form)
#         db.session.commit()
#     except SQLAlchemyError:
#         db.session.rollback()
#         return Response(status=500)
#
#     return form


# @app.route('/form', methods=['DELETE'])
# @json_response
# def delete(id):
#     form = Form.query.get(id)
#     if form:
#         try:
#             db.session.delete(form)
#             return Response(status=200)
#         except SQLAlchemyError:
#             return Response(status=500)
#     return Response(status=404)
