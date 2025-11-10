const mongoose = require('mongoose');
require('dotenv').config();

const Album = require('./models/Album');
const Song = require('./models/Song');
const Concert = require('./models/Concert');
const Merchandise = require('./models/Merchandise');
const News = require('./models/News');
const Gallery = require('./models/Gallery');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/arijit-singh';

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Album.deleteMany({});
    await Song.deleteMany({});
    await Concert.deleteMany({});
    await Merchandise.deleteMany({});
    await News.deleteMany({});
    await Gallery.deleteMany({});

    // Create albums
    const album1 = await Album.create({
      title: 'Best of Arijit',
      releaseDate: new Date('2023-01-01'),
      coverImage: 'https://via.placeholder.com/300',
      description: 'Greatest hits collection featuring all-time favorites',
      genre: 'Bollywood'
    });

    const album2 = await Album.create({
      title: 'Romantic Hits',
      releaseDate: new Date('2023-06-01'),
      coverImage: 'https://via.placeholder.com/300',
      description: 'Collection of romantic ballads and love songs',
      genre: 'Bollywood'
    });

    // Create songs
    const song1 = await Song.create({
      title: 'Tum Hi Ho',
      album: album1._id,
      duration: '4:22',
      releaseDate: new Date('2013-01-01'),
      movie: 'Aashiqui 2',
      composers: ['Mithoon'],
      lyricists: ['Mithoon'],
      audioUrl: '',
      coverImage: 'https://via.placeholder.com/300',
      popularity: 100
    });

    const song2 = await Song.create({
      title: 'Channa Mereya',
      album: album1._id,
      duration: '4:49',
      releaseDate: new Date('2016-01-01'),
      movie: 'Ae Dil Hai Mushkil',
      composers: ['Pritam'],
      lyricists: ['Amitabh Bhattacharya'],
      audioUrl: '',
      coverImage: 'https://via.placeholder.com/300',
      popularity: 95
    });

    const song3 = await Song.create({
      title: 'Raabta',
      album: album2._id,
      duration: '4:02',
      releaseDate: new Date('2012-01-01'),
      movie: 'Agent Vinod',
      composers: ['Pritam'],
      lyricists: ['Neelesh Misra'],
      audioUrl: '',
      coverImage: 'https://via.placeholder.com/300',
      popularity: 90
    });

    // Update albums with songs
    album1.songs = [song1._id, song2._id];
    album2.songs = [song3._id];
    await album1.save();
    await album2.save();

    // Create concerts
    await Concert.create([
      {
        title: 'Arijit Singh Live in Mumbai',
        venue: 'Wankhede Stadium',
        city: 'Mumbai',
        country: 'India',
        date: new Date('2024-12-15'),
        time: '7:00 PM',
        ticketUrl: 'https://example.com/tickets',
        price: '₹2,000 - ₹10,000',
        description: 'Experience the magic of Arijit Singh live in concert',
        isUpcoming: true
      },
      {
        title: 'Arijit Singh Live in Delhi',
        venue: 'Jawaharlal Nehru Stadium',
        city: 'Delhi',
        country: 'India',
        date: new Date('2025-01-20'),
        time: '7:00 PM',
        ticketUrl: 'https://example.com/tickets',
        price: '₹2,000 - ₹10,000',
        description: 'An unforgettable evening with Arijit Singh',
        isUpcoming: true
      },
      {
        title: 'Arijit Singh Live in Bangalore',
        venue: 'Palace Grounds',
        city: 'Bangalore',
        country: 'India',
        date: new Date('2025-02-10'),
        time: '7:00 PM',
        ticketUrl: 'https://example.com/tickets',
        price: '₹2,000 - ₹10,000',
        description: 'Join us for a soulful musical journey',
        isUpcoming: true
      }
    ]);

    // Create merchandise
    await Merchandise.create([
      {
        name: 'Official T-Shirt',
        description: 'Premium quality official Arijit Singh t-shirt',
        price: 1299,
        category: 'Apparel',
        image: 'https://via.placeholder.com/300',
        stock: 100,
        inStock: true,
        featured: true
      },
      {
        name: 'Signed Poster',
        description: 'Limited edition signed poster',
        price: 1999,
        category: 'Posters',
        image: 'https://via.placeholder.com/300',
        stock: 50,
        inStock: true,
        featured: true
      },
      {
        name: 'CD Collection',
        description: 'Complete album collection on CD',
        price: 2499,
        category: 'Music',
        image: 'https://via.placeholder.com/300',
        stock: 75,
        inStock: true,
        featured: false
      },
      {
        name: 'Cap',
        description: 'Official branded cap',
        price: 799,
        category: 'Accessories',
        image: 'https://via.placeholder.com/300',
        stock: 120,
        inStock: true,
        featured: false
      }
    ]);

    // Create news
    await News.create([
      {
        title: 'Arijit Singh Wins Filmfare Award',
        content: 'Arijit Singh has won the Filmfare Award for Best Male Playback Singer for his outstanding performance in the latest releases. This marks another milestone in his illustrious career.',
        image: 'https://via.placeholder.com/400',
        category: 'Awards',
        author: 'Admin',
        featured: true,
        views: 0
      },
      {
        title: 'New Album Release',
        content: 'Arijit Singh announces the release of his new album featuring romantic ballads and soulful melodies that are sure to touch the hearts of millions.',
        image: 'https://via.placeholder.com/400',
        category: 'Releases',
        author: 'Admin',
        featured: true,
        views: 0
      },
      {
        title: 'Exclusive Interview',
        content: 'In an exclusive interview, Arijit Singh talks about his journey, inspiration, and future projects. Read the full interview to learn more about the voice behind Bollywood\'s most romantic songs.',
        image: 'https://via.placeholder.com/400',
        category: 'Interviews',
        author: 'Admin',
        featured: false,
        views: 0
      }
    ]);

    // Create gallery
    await Gallery.create([
      {
        title: 'Concert Performance',
        imageUrl: 'https://via.placeholder.com/400',
        category: 'Concert',
        description: 'Live performance at concert',
        featured: true
      },
      {
        title: 'Studio Session',
        imageUrl: 'https://via.placeholder.com/400',
        category: 'Studio',
        description: 'Recording in studio',
        featured: false
      },
      {
        title: 'Award Ceremony',
        imageUrl: 'https://via.placeholder.com/400',
        category: 'Awards',
        description: 'Receiving award',
        featured: true
      },
      {
        title: 'Behind the Scenes',
        imageUrl: 'https://via.placeholder.com/400',
        category: 'Behind Scenes',
        description: 'Behind the scenes moment',
        featured: false
      }
    ]);

    console.log('Sample data seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();

