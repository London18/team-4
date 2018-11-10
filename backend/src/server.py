from src.config.setup import *
from src.model.form import Form, FormType


@app.route('/')
def index():
    # user = User(username="admin", password="passwd", email="email")
    form = Form(type=FormType.DASS)

    db.session.add(form)
    db.session.commit()

    forms = db.session.query(Form).all()
    print(forms)

    return "Hello, World!"


if __name__ == '__main__':
    app.run(debug=True)


