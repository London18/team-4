from enum import Enum
from sqlalchemy.inspection import inspect


class Serializable(object):
    """
        Mixin for every db.Model (domain object), for proper json serialization.
        The `serialize` method basically transforms the object into a JSON DTO.
        Can be overridden to append / remove fields.
    """
    def serialize(self):
        return {
            c: getattr(self, c) if not isinstance(getattr(self, c), Serializable) else getattr(self, c).serialize() for c in inspect(self).attrs.keys()
        }

    @staticmethod
    def serialize_list(l):
        return [m.serialize() for m in l]


class SerializableEnum(Serializable, Enum):
    """
        Mixin for every Enum to be stored in the database (within a domain object).
        The `serialize` method basically transforms the object into a JSON DTO.
    """

    def serialize(self):
        return self.name

