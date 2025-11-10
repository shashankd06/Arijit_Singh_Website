const mongoose = require('mongoose');
require('dotenv').config();

const Album = require('./models/Album');
const Song = require('./models/Song');
const Concert = require('./models/Concert');
const Merchandise = require('./models/Merchandise');
const News = require('./models/News');
const Gallery = require('./models/Gallery');
const Lyric = require('./models/Lyric');

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
    await Lyric.deleteMany({});

    // Create albums
    const album1 = await Album.create({
      title: 'Best of Arijit',
      releaseDate: new Date('2023-01-01'),
      coverImage: 'https://a10.gaanacdn.com/gn_pl_img/playlists/zLp36v3rGe/Lp36mQk0Kr/size_l_1761901613.webp',
      description: 'Greatest hits collection featuring all-time favorites',
      genre: 'Bollywood',
      spotifyUrl: 'https://youtu.be/kXHiIxx2atA?si=nrpdE04IhWZW7aCU'
    });

    const album2 = await Album.create({
      title: 'Romantic Hits',
      releaseDate: new Date('2023-06-01'),
      coverImage: 'https://c.saavncdn.com/804/Arijit-Romantic-Hits-Hindi-2018-20180424-500x500.jpg',
      description: 'Collection of romantic ballads and love songs',
      genre: 'Bollywood',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DXbVipT9CLpYG'
    });

    // Create songs (expanded list)
    const song1 = await Song.create({
      title: 'Tum Hi Ho',
      album: album1._id,
      duration: '4:22',
      releaseDate: new Date('2013-01-01'),
      movie: 'Aashiqui 2',
      composers: ['Mithoon'],
      lyricists: ['Mithoon'],
      audioUrl: '',
      coverImage: 'https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20240131131003-500x500.jpg',
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
      coverImage: 'https://c.saavncdn.com/774/Ae-Dil-Hai-Mushkil-Hindi-2016-500x500.jpg',
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
      coverImage: 'https://c.saavncdn.com/735/Agent-Vinod-2012-500x500.jpg',
      popularity: 90
    });

    const song4 = await Song.create({
      title: 'Kesariya',
      album: album2._id,
      duration: '4:28',
      releaseDate: new Date('2022-01-01'),
      movie: 'Brahmāstra',
      composers: ['Pritam'],
      lyricists: ['Amitabh Bhattacharya'],
      audioUrl: '',
      coverImage: 'https://c.saavncdn.com/191/Brahmastra-Hindi-2022-20220905171915-500x500.jpg',
      popularity: 98
    });

    const song5 = await Song.create({
      title: 'Ae Dil Hai Mushkil',
      album: album1._id,
      duration: '4:29',
      releaseDate: new Date('2016-01-01'),
      movie: 'Ae Dil Hai Mushkil',
      composers: ['Pritam'],
      lyricists: ['Amitabh Bhattacharya'],
      audioUrl: '',
      coverImage: 'https://c.saavncdn.com/774/Ae-Dil-Hai-Mushkil-Hindi-2016-500x500.jpg',
      popularity: 92
    });

    const song6 = await Song.create({
      title: 'Shayad',
      album: album2._id,
      duration: '4:07',
      releaseDate: new Date('2020-01-01'),
      movie: 'Love Aaj Kal',
      composers: ['Pritam'],
      lyricists: ['Irshad Kamil'],
      audioUrl: '',
      coverImage: 'https://c.saavncdn.com/862/Love-Aaj-Kal-Hindi-2020-20200214140423-500x500.jpg',
      popularity: 88
    });

    const song7 = await Song.create({
      title: 'Khairiyat',
      album: album1._id,
      duration: '4:30',
      releaseDate: new Date('2019-01-01'),
      movie: 'Chhichhore',
      composers: ['Pritam'],
      lyricists: ['Amitabh Bhattacharya'],
      audioUrl: '',
      coverImage: 'https://c.saavncdn.com/802/Chhichhore-Hindi-2019-20190828124523-500x500.jpg',
      popularity: 85
    });

    const song8 = await Song.create({
      title: 'Hawayein',
      album: album2._id,
      duration: '4:50',
      releaseDate: new Date('2017-01-01'),
      movie: 'Jab Harry Met Sejal',
      composers: ['Pritam'],
      lyricists: ['Irshad Kamil'],
      audioUrl: '',
      coverImage: 'https://c.saavncdn.com/823/Jab-Harry-Met-Sejal-Hindi-2017-20170803-500x500.jpg',
      popularity: 89
    });

    const song9 = await Song.create({
      title: 'Agar Tum Saath Ho',
      album: album1._id,
      duration: '5:41',
      releaseDate: new Date('2015-01-01'),
      movie: 'Tamasha',
      composers: ['A. R. Rahman'],
      lyricists: ['Irshad Kamil'],
      audioUrl: '',
      coverImage: 'https://c.saavncdn.com/593/Tamasha-Hindi-2015-500x500.jpg',
      popularity: 94
    });

    const song10 = await Song.create({
      title: 'Tera Yaar Hoon Main',
      album: album2._id,
      duration: '4:24',
      releaseDate: new Date('2018-01-01'),
      movie: 'Sonu Ke Titu Ki Sweety',
      composers: ['Rochak Kohli'],
      lyricists: ['Kumaar'],
      audioUrl: '',
      coverImage: 'https://c.saavncdn.com/665/Sonu-Ke-Titu-Ki-Sweety-Hindi-2018-20190329174006-500x500.jpg',
      popularity: 87
    });

    // Update albums with songs
    album1.songs = [song1._id, song2._id, song5._id, song7._id, song9._id];
    album2.songs = [song3._id, song4._id, song6._id, song8._id, song10._id];
    await album1.save();
    await album2.save();

    // Create lyrics for all songs
    await Lyric.create([
      {
        song: song1._id,
        lyrics: `Hum tere bin ab reh nahi sakte
Tere bina kya wajood mera
Tum dil ki dhadkan mein base ho
Tum hi ho... tum hi ho`,
        language: 'Hindi'
      },
      {
        song: song2._id,
        lyrics: `Channa mereya mereya
Beliya o beliya
Acha chalta hoon
Duaaon mein yaad rakhna`,
        language: 'Hindi'
      },
      {
        song: song3._id,
        lyrics: `Kuch toh hai tujh se raabta
Kuch toh hai tujh se raabta
Tera milna hai uss rab ka ishaara`,
        language: 'Hindi'
      },
      {
        song: song4._id,
        lyrics: `Kesariya tera ishq hai pyaara
Rang jaun jo main haara
Kesariya tera ishq hai pyaara`,
        language: 'Hindi'
      },
      {
        song: song5._id,
        lyrics: `Ae dil hai mushkil
Tu mera humsafar
Yeh safar hai mera aur tera`,
        language: 'Hindi'
      },
      {
        song: song6._id,
        lyrics: `Shayad kabhi na keh saku
Tum bin lagta nahi
Par dil mein hai ummeed`,
        language: 'Hindi'
      },
      {
        song: song7._id,
        lyrics: `Khairiyat pucho kabhi to
Kaifiyat pucho tumhare bin
Sab kuch adhoora hai`,
        language: 'Hindi'
      },
      {
        song: song8._id,
        lyrics: `Hawayein si chalti rahe
Tum tak mujhe le chale
Hawayein si chalti rahe`,
        language: 'Hindi'
      },
      {
        song: song9._id,
        lyrics: `Agar tum saath ho
Behti si khushiyon ke dariya
Agar tum saath ho`,
        language: 'Hindi'
      },
      {
        song: song10._id,
        lyrics: `Tera yaar hoon main
Tere saath hoon main
Tera yaar hoon main`,
        language: 'Hindi'
      }
    ]);

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

