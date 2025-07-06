#!/usr/bin/env python3
"""
Simple MongoDB script example
Add and retrieve data from MongoDB
"""

import os
from db.userdata import userData
from db.productdata import productData



def test_add_user():
    try:
        # Test user data
        test_username = "mangoKush123"
        test_password = "dogcat123" 
        test_country = "landofaus"
        
        print(f"Creating user: {test_username}")
        
        # Call whatever function you have in userdata.py to add a user
        # (Replace this with the actual function name from your userdata.py)
        result = user_data.add_user(test_username, test_password, test_country)
        
        print("User added successfully!")
        print(f"Result: {result}")
        
    except Exception as e:
        print(f"Error adding user: {e}")

def retrieve_user(username):
    try:
        print(f"Retrieving user: {username}")
        user = user_data.get_user_by_username(username)
        
        if user:
            print(f"User found: {user.username}, Country: {user.country}")
        else:
            print("User not found.")
            
    except Exception as e:
        print(f"Error retrieving user: {e}")



# TEST TO add an artwork into the database
def test_add_artwork():
    
    # Image path (assuming images folder is in the same directory as this script)
    image_path = os.path.join("images", "Lioness_does_best.jpeg")  # Replace with your actual image filename
    
    # Test product data
    test_product = artwork.add_product(
        title="Lioness Does Best",
        model="Leonardo - Flux Dev",
        description="A lioness gracefully tip toeing along a a tree trunk with its full body showing. An amazon jungle like backdrop with a very intricate spider on one of the plant leaves in the fore ground and other insects and smaller animals slightly hidden within the shrubbery of the image. Plants need to be luscious green but not to dense. There must be enough space for a balanced image. ",
        price=0.99,
        image_url=image_path  # For now, storing the local path
    )
    
    print("Product added successfully!")
    print(f"Product ID: {test_product.id}")
    print(f"Title: {test_product.title}")
    print(f"Image URL: {test_product.image_url}")
    print(f"Units Sold: {test_product.units_sold}")
    print(f"Colors: {test_product.colours}")

def retrieve_product(title):
    try:
        print(f"Retrieving product: {title}")
        product = artwork.get_product_by_title(title)
        
        if product:
            print(f"Product found: {product.title}, Price: {product.price}, Image URL: {product.image_url}")
        else:
            print("Product not found.")
            
    except Exception as e:
        print(f"Error retrieving product: {e}")


if __name__ == "__main__":
    # user_data = userData()
    # test_add_user()
    # user = "mangoKush123"
    # retrieve_user(user)
    artwork = productData()
    test_add_artwork()
    title = "Lioness Does Best"
    product = artwork.get_product_by_title(title)









