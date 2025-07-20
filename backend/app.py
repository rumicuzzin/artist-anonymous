from flask import Flask
from flask_cors import CORS
from api.users import users_bp


app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return "Artist Anonymous Backend is running!"

# Register the blueprint
app.register_blueprint(users_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)

    