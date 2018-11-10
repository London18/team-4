import json
import os

from src.constants import CONFIG_FILE

if not os.path.isfile(CONFIG_FILE):
    raise FileNotFoundError('Config file not found')


def load_config():
    with open(CONFIG_FILE, 'r') as f:
        config = json.load(f)

    return config

