from pymongo import MongoClient
from backend.userModel import user  
import os
from dotenv import load_dotenv
from datetime import datetime


# load environment variables from .env file\
load_dotenv()
# This file is responsible for connecting to the MongoDB database and performing CRUD operations on user data.

class userData:
    def __init__(self, db_name='artplace', collection_name='users'):
        self.connection_string = os.getenv('MONGODB_URI')
        self.client = MongoClient(self.connection_string)
        self.db = self.client['artplacedb']
        self.collection = self.db['users']

    def get_databse(self):
        return self.db
    
    def get_collection(self):
        return self.collection
    
    # Method to add a new user to the database
    def add_user(self, username, password, country):

        new_user = user(username, password, country)
   
        # Convert user to dictionary format for MongoDB
        user_data = {
            'username': new_user.username,
            'password': new_user.password,
            'country': new_user.country,
            'created_at': datetime.now()
        }
        
        result = self.collection.insert_one(user_data)
        new_user._id = result.inserted_id  # Store the inserted ID in the user object if needed
        return new_user
    

    