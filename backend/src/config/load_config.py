import json
import os

from src.constants import CONFIG_FILE


def load_config():
    if not os.path.isfile(CONFIG_FILE):
        raise FileNotFoundError('Config file not found at path {}, cwd is {}'.format(
            os.path.realpath(CONFIG_FILE),
            os.getcwd())
        )

    with open(CONFIG_FILE, 'r') as f:
        config = json.load(f)

    return config

