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
        test_username = "testuser123"
        test_password = "securepassword456" 
        test_country = "Canada"
        
        print(f"Creating user: {test_username}")
        
        # Call whatever function you have in userdata.py to add a user
        # (Replace this with the actual function name from your userdata.py)
        result = user_data.add_user(test_username, test_password, test_country)
        
        print("User added successfully!")
        print(f"Result: {result}")
        
    except Exception as e:
        print(f"Error adding user: {e}")

if __name__ == "__main__":
    test_add_user()

