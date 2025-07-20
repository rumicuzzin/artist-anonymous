# ArtPlace

A full-stack web application for artist portfolio management and community features.

## Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Running on port 3000

**Backend:**
- Python Flask
- REST API architecture
- Blueprint-based organization
- Running on port 8000

**Database:**
- MongoDB (Atlas Cloud / Docker Container)
- User authentication and data storage

**Infrastructure:**
- Docker & Docker Compose
- Containerized development environment

## Project Structure

```

artplace/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── images/          # Image assets
│   │   └── pages/           # Page components
│   ├── public/              # Public assets
│   ├── package.json         # Frontend dependencies
│   └── Dockerfile           # Frontend container config
├── backend/                  # Flask API server
│   ├── app.py               # Main Flask application
│   ├── api/                 # API endpoints
│   │   ├── __init__.py
│   │   └── users.py         # User-related endpoints
│   ├── db/                  # Database layer
│   │   ├── __init__.py
│   │   └── userdata.py      # User database operations
│   ├── models/              # Data models
│   ├── requirements.txt     # Python dependencies
│   └── Dockerfile           # Backend container config
├── .env                     # Environment variables
├── .gitignore               # Git ignore rules
├── docker-compose.yml       # Container orchestration
└── README.md                # Project documentation
```

## Getting Started

### Prerequisites
- Docker & Docker Compose
- Git

### Running the Application

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd artplace
   ```

2. **Set up environment variables:**
   ```bash
   # Create .env file in project root
   MONGODB_URI=your_mongodb_connection_string
   ```

3. **Start the application:**
   ```bash
   docker-compose up
   ```

4. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Health Check: http://localhost:8000/

## Current Features

### Implemented
- User registration system
- React frontend with form handling
- Flask REST API with Blueprint architecture
- MongoDB integration for user data
- Docker containerization
- CORS configuration for cross-origin requests

### API Endpoints
- `POST /api/register` - User registration
- `GET /` - Health check

## Database Schema

**Users Collection:**
```javascript
{
  "_id": ObjectId,
  "username": String,
  "password": String,
  "country": String,
  "created_at": DateTime
}
```

## Docker Services

- **frontend**: React development server
- **backend**: Flask API server
- **mongodb**: MongoDB database (optional, can use Atlas)

## Development

### Backend Development
```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Frontend Development
```bash
cd frontend
npm install
npm start
```

## Environment Variables

Create a `.env` file in the project root:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/artplacedb
```

## Project Status

**Current Phase:** User Authentication & Registration
**Next Steps:** User login, profile management, artwork upload features

---

*Built for the artist community*