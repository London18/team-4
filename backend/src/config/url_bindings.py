from src.config.setup import api
from src.controller.form_controller import FormController

def do_url_bindings():
    # todo
    api.add_resource(FormController.get, "/form/id/<id>")
    api.add_resource(FormController.post, "/form")
