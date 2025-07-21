from flask import Blueprint, Flask, request, jsonify
from flask_cors import CORS
from db.userdata import userData  # Import your existing class


users_bp = Blueprint('users', __name__)
user_db = userData()


@users_bp.route('/register', methods=['POST'])
def create_user():
    try:
        data = request.get_json()
        
        # Debug: print what we received
        print(f"Received data: {data}")
        
        new_user = user_db.add_user(
            data['username'], 
            data['password'], 
            data['country']
        )
        
        print(f"User created: {new_user}")
        
        # Make sure we return something!
        return jsonify({'message': 'User registered successfully'})
        
    except Exception as e:
        print(f"Error creating user: {e}")
        return jsonify({'error': str(e)}), 500
    

@users_bp.route('/login', methods=['POST'])
def login_user():
    try:
        data = request.get_json()
        
        # Debug: print what we received
        print(f"Login attempt with data: {data}")
        
        user = user_db.user_login(data['username'], data['password'])
        
        if user:
            print(f"User found: {user}")
            return jsonify({'message': 'Login successful'})
        else:
            print("User not found or incorrect password")
            return jsonify({'error': 'Invalid username or password'}), 401
            
    except Exception as e:
        print(f"Error logging in user: {e}")
        return jsonify({'error': str(e)}), 500