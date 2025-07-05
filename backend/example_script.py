#!/usr/bin/env python3
"""
Simple MongoDB script example
Add and retrieve data from MongoDB
"""

from db.userdata import userData

user_data = userData()

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

if __name__ == "__main__":
    test_add_user()
    user = "mangoKush123"
    retrieve_user(user)




