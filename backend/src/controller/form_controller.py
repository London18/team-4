from flask import Response, request
from flask_restful import Resource
from sqlalchemy.exc import SQLAlchemyError

from src.config.setup import db, app
from src.decorators.serialize import json_response
from src.model.form import Form


@app.route('/form/id/<id>', methods=['GET'])
@json_response
def get_form(id):
    form = Form.query.get(id)
    if form:
        return form
    return Response(status=404)


@app.route('/form', methods=['POST'])
@json_response
def post_form():
    body      = request.get_json()
    form_type = body['form-type']

    try:
        form = Form(type=form_type)
        db.session.add(form)
        db.session.commit()
    except SQLAlchemyError:
        db.session.rollback()
        return Response(status=500)

    return form


@app.route('/form', methods=['DELETE'])
@json_response
def delete(id):
    form = Form.query.get(id)
    if form:
        try:
            db.session.delete(form)
            return Response(status=200)
        except SQLAlchemyError:
            return Response(status=500)
    return Response(status=404)
