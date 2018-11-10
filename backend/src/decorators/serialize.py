import json

from flask import Response

from src.model.serializable import Serializable


def json_response(f):
    """
        Decorator for any method of any REST API endpoint (returning a JSON).
        Automatically serializes any model object returned.
    :param f: Function to be decorated
    :return:
    """
    def wrapper(*args, **kwargs):
        ret = f(*args, **kwargs)

        if isinstance(ret, Serializable):
            return Response(json.dumps(ret.serialize()), content_type='application/json')
        elif isinstance(ret, list) and (len(ret) == 0 or isinstance(ret[0], Serializable)):
            # hack, if first element in serializable, assume all are
            return Response(json.dumps(Serializable.serialize_list(ret)), content_type='application/json')

        return ret

    # hack because Flask maps URLs to function names, and we need them to be unique
    wrapper.__name__ = 'wrapper_{}'.format(f.__name__)

    return wrapper
