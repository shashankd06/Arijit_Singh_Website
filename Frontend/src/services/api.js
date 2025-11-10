import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Albums
export const getAlbums = () => api.get('/albums');
export const getAlbum = (id) => api.get(`/albums/${id}`);

// Songs
export const getSongs = () => api.get('/songs');
export const getSong = (id) => api.get(`/songs/${id}`);

// Lyrics
export const getLyrics = () => api.get('/lyrics');
export const getLyricsBySong = (songId) => api.get(`/lyrics/song/${songId}`);

// Concerts
export const getConcerts = (upcoming) => api.get('/concerts', { params: { upcoming } });
export const getConcert = (id) => api.get(`/concerts/${id}`);

// Merchandise
export const getMerchandise = (category, featured) => api.get('/merchandise', { params: { category, featured } });
export const getMerchandiseItem = (id) => api.get(`/merchandise/${id}`);

// News
export const getNews = (category, featured) => api.get('/news', { params: { category, featured } });
export const getNewsItem = (id) => api.get(`/news/${id}`);

// Gallery
export const getGallery = (category, featured) => api.get('/gallery', { params: { category, featured } });
export const getGalleryItem = (id) => api.get(`/gallery/${id}`);

// Contact
export const submitContact = (data) => api.post('/contact', data);

export default api;

