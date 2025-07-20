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