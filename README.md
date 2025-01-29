# README

## Application Overview
Basic registration and login system built with Node.js (Express) and MongoDB.
---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <https://github.com/meruyert4/LoginSystem>
cd <LoginSystem>
```

### 2. Install Dependencies
Run the following command to install Node.js dependencies:
```bash
npm install 
```

### 3. Set Up Environment Variables
Create a `.env` file in the project root and define the following:
```
MONGO_URI=<your link>
DB_NAME=<db name>
```

Replace `<your link>` with your MongoDB connection URI and `<db name>` with your database name.

### 4. Start the Backend Server
Run the following command to start the backend server:
```bash
node app.js
```
The server will start on `http://localhost:3000`.

---

## Key Features
- **Registration**: Users can register with a unique username and password.
- **Login**: Users can log in using their credentials.