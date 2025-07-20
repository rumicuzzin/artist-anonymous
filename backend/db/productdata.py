from pymongo import MongoClient
from models.productModel import artwork
import os
from dotenv import load_dotenv
from datetime import datetime

# This file is responsible for connecting to the MongoDB database and performing CRUD operations on artwork data.
# load environment variables from .env file
load_dotenv()

class productData:
    def __init__(self, db_name='artplace', collection_name='users'):
        self.connection_string = os.getenv('MONGODB_URI')
        self.client = MongoClient(self.connection_string)
        self.db = self.client['artplacedb']
        self.collection = self.db['artworks']

    # Method to add a new product to the database
    def add_product(self, title, model, description, price, image_url):
        new_product = artwork(title, model, description, price, image_url)

        # Convert product to dictionary format for MongoDB
        product_data = {
            'title': new_product.title,
            'model': new_product.model,
            'description': new_product.description,
            'price': new_product.price,
            'image_url': new_product.image_url,
            'units_sold': new_product.units_sold,
            'colours': new_product.colours,
            'created_at': datetime.now()
        }

        result = self.collection.insert_one(product_data)
        new_product.id = result.inserted_id
        return new_product

    # Method to retrieve a product by title
    def get_product_by_title(self, title):
        product_data = self.collection.find_one({'title': title})
        if product_data:
            # return an instance of artwork object instead of MONGO document
            return artwork(
                title=product_data['title'],
                model=product_data['model'],
                description=product_data['description'],
                price=product_data['price'],
                image_url=product_data['image_url'],
                units_sold=product_data['units_sold'],
                colours=product_data['colours'],
                id=product_data['_id']
            )
        return None
    

        


