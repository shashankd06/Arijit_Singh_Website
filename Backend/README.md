# Backend API Server

Express.js backend server for Arijit Singh website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```
MONGO_URI=mongodb://localhost:27017/arijit-singh
PORT=5000
JWT_SECRET=your-secret-key-here
```

3. Start MongoDB:
```bash
mongod
```

4. Run the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Routes

All routes are prefixed with `/api`

- `/albums` - Album management
- `/songs` - Song management
- `/lyrics` - Lyrics management
- `/concerts` - Concert management
- `/merchandise` - Merchandise management
- `/news` - News management
- `/gallery` - Gallery management
- `/contact` - Contact form submissions

## Database Models

- Album
- Song
- Lyric
- Concert
- Merchandise
- News
- Gallery
- Contact

