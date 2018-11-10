from src.config.setup import *
from src.config.url_bindings import do_url_bindings

do_url_bindings()


@app.route('/')
def index():
    return "Hello, World!"


if __name__ == '__main__':
    app.run(debug=True)


