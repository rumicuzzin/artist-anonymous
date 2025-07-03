from bson import ObjectId

# This file is the objects that will hold user information
# Can potantially hash the password for security using hashlib or somethin 

class user:
    def __init__(self, username, password, country, _id=None):
        self.username = username
        self.password = password
        self.country = country
        self._id = _id if _id is not None else ObjectId()


