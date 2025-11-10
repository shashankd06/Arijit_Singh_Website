# Backend Setup Guide

## ✅ Step 1: Install Dependencies (Completed)
Dependencies have been installed successfully.

## ✅ Step 2: Create .env File (Completed)
The `.env` file has been created with the following configuration:
```
MONGO_URI=mongodb://localhost:27017/arijit-singh
PORT=5000
JWT_SECRET=arijit-singh-secret-key-2024
```

## 📋 Step 3: Setup MongoDB

You have two options:

### Option A: Local MongoDB Installation

1. **Download MongoDB:**
   - Visit: https://www.mongodb.com/try/download/community
   - Download and install MongoDB Community Server
   - Follow the installation wizard

2. **Start MongoDB:**
   - MongoDB usually starts automatically as a service on Windows
   - Or start manually:
     ```bash
     mongod
     ```

3. **Verify MongoDB is running:**
   - Open a new terminal
   - Run: `mongosh` or `mongo`
   - You should see MongoDB shell

### Option B: MongoDB Atlas (Cloud - Recommended)

1. **Create free account:**
   - Visit: https://www.mongodb.com/cloud/atlas
   - Sign up for free

2. **Create a cluster:**
   - Click "Build a Database"
   - Choose FREE tier (M0)
   - Select your region
   - Create cluster

3. **Get connection string:**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Replace `<dbname>` with `arijit-singh`

4. **Update .env file:**
   - Open `backend/.env`
   - Replace `MONGO_URI` with your Atlas connection string
   - Example: `MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/arijit-singh?retryWrites=true&w=majority`

## 🚀 Step 4: Start the Backend Server

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Start the server:**
   ```bash
   npm run dev
   ```

   Or for production:
   ```bash
   npm start
   ```

3. **You should see:**
   ```
   MongoDB Connected
   Server running on port 5000
   ```

## 🌱 Step 5: Seed Sample Data (Optional)

To populate the database with sample data:

```bash
cd backend
npm run seed
```

This will create:
- 2 Albums
- 3 Songs
- 3 Concerts
- 4 Merchandise items
- 3 News articles
- 4 Gallery items

## ✅ Step 6: Test the API

1. **Check if server is running:**
   - Open browser: http://localhost:5000
   - You should see: `{"message":"Arijit Singh API Server"}`

2. **Test API endpoints:**
   - Albums: http://localhost:5000/api/albums
   - Songs: http://localhost:5000/api/songs
   - Concerts: http://localhost:5000/api/concerts
   - Merchandise: http://localhost:5000/api/merchandise

## 🔧 Troubleshooting

### MongoDB Connection Error
- **Error:** `MongoDB connection error: ...`
- **Solution:**
  - Make sure MongoDB is installed and running
  - Check if `MONGO_URI` in `.env` is correct
  - For local MongoDB, ensure `mongod` is running
  - For Atlas, check your connection string and network access

### Port Already in Use
- **Error:** `Port 5000 is already in use`
- **Solution:**
  - Change `PORT` in `.env` to another port (e.g., `5001`)
  - Or stop the process using port 5000

### Dependencies Error
- **Error:** `Cannot find module...`
- **Solution:**
  ```bash
  cd backend
  npm install
  ```

## 📝 Next Steps

1. ✅ Dependencies installed
2. ✅ .env file created
3. ⏳ Setup MongoDB (choose Option A or B above)
4. ⏳ Start the backend server
5. ⏳ (Optional) Seed sample data
6. ⏳ Test the API endpoints

## 🎯 Quick Start Commands

```bash
# Navigate to backend
cd backend

# Install dependencies (already done)
npm install

# Start server
npm run dev

# Seed data (optional)
npm run seed
```

## 📞 Need Help?

- Check MongoDB is running: `mongosh` or `mongo`
- Check server logs for errors
- Verify `.env` file has correct MongoDB URI
- Make sure port 5000 is available

