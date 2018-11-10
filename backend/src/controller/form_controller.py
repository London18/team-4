from flask import Response, request, jsonify
from flask_restful import Resource, fields
from flask_restful.representations import json
from sqlalchemy.exc import SQLAlchemyError

from src.config.setup import db, api
from src.model.form import Form

form_model = {
    'id': fields.Integer,
    'type': fields.String,
}

class FormController(Resource):
    def get(self, id):
        form = Form.query.get(id)
        if form:
            return Response(form)
        return Response(status=404)

    # @api.representation('application/json')
    def post(self):
        body      = request.get_json()
        form_type = body['form-type']

        try:
            form = Form(type=form_type)
            db.session.add(form)
            db.session.commit()
        except SQLAlchemyError:
            db.session.rollback()
            return Response(status=500)

        return json.dumps(form)

    def delete(self, id):
        form = Form.query.get(id)
        if form:
            try:
                db.session.delete(form)
                return Response(status=200)
            except SQLAlchemyError:
                return Response(status=500)
        return Response(status=404)
