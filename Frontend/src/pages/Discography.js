import React, { useState, useEffect } from 'react';
import { getAlbums, getSongs } from '../services/api';
import './Discography.css';

const Discography = () => {
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('albums');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [albumsRes, songsRes] = await Promise.all([
        getAlbums(),
        getSongs()
      ]);
      setAlbums(albumsRes.data);
      setSongs(songsRes.data);
      setError(null);
    } catch (err) {
      setError('Failed to load data. Please try again later.');
      console.error(err);
      // Set sample data if API fails
      setAlbums([
        {
          _id: '1',
          title: 'Best of Arijit',
          releaseDate: '2023-01-01',
          coverImage: 'https://via.placeholder.com/300',
          description: 'Greatest hits collection',
          songs: []
        },
        {
          _id: '2',
          title: 'Romantic Hits',
          releaseDate: '2023-06-01',
          coverImage: 'https://via.placeholder.com/300',
          description: 'Love songs collection',
          songs: []
        }
      ]);
      setSongs([
        {
          _id: '1',
          title: 'Tum Hi Ho',
          movie: 'Aashiqui 2',
          duration: '4:22',
          popularity: 100
        },
        {
          _id: '2',
          title: 'Channa Mereya',
          movie: 'Ae Dil Hai Mushkil',
          duration: '4:49',
          popularity: 95
        },
        {
          _id: '3',
          title: 'Raabta',
          movie: 'Agent Vinod',
          duration: '4:02',
          popularity: 90
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading discography...</div>;
  }

  return (
    <div className="discography">
      <section className="section">
        <h1 className="section-title">Discography</h1>
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'albums' ? 'active' : ''}`}
            onClick={() => setActiveTab('albums')}
          >
            Albums
          </button>
          <button 
            className={`tab ${activeTab === 'songs' ? 'active' : ''}`}
            onClick={() => setActiveTab('songs')}
          >
            Songs
          </button>
        </div>

        {error && <div className="error">{error}</div>}

        {activeTab === 'albums' && (
          <div className="grid">
            {albums.map((album) => (
              <div key={album._id} className="card" onClick={() => album.spotifyUrl && window.open(album.spotifyUrl, '_blank')}>
                <div className="card-image-container" style={{position: 'relative'}}>
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="card-image"
                    onError={(e) => {
                      // try proxy as a fallback to avoid hotlink / referrer issues
                      e.target.onerror = null;
                      const orig = album.coverImage || '';
                      if (!orig) {
                        // no image, hide img and show gradient
                        e.target.style.display = 'none';
                        const p = e.target.parentNode;
                        p.style.background = 'linear-gradient(135deg, #8b0000, #a52a2a)';
                        p.style.display = 'flex';
                        p.style.alignItems = 'center';
                        p.style.justifyContent = 'center';
                        p.style.color = '#ffd700';
                        p.textContent = album.title;
                        return;
                      }
                      const proxy = 'https://images.weserv.nl/?url=' + encodeURIComponent(orig.replace(/^https?:\/\//, ''));
                      // if current src is not proxy, switch to proxy
                      if (e.target.src && !e.target.src.includes('images.weserv.nl')) {
                        e.target.src = proxy;
                      } else {
                        // proxy failed too -> hide image and show gradient fallback
                        e.target.style.display = 'none';
                        const p = e.target.parentNode;
                        p.style.background = 'linear-gradient(135deg, #8b0000, #a52a2a)';
                        p.style.display = 'flex';
                        p.style.alignItems = 'center';
                        p.style.justifyContent = 'center';
                        p.style.color = '#ffd700';
                        p.textContent = album.title;
                      }
                    }}
                  />
                </div>
                <h3 className="card-title">{album.title}</h3>
                <p className="card-text">{album.description || 'Album description'}</p>
                <p className="card-meta">Release: {new Date(album.releaseDate).getFullYear()}</p>
                {album.songs && album.songs.length > 0 && (
                  <p className="card-meta">{album.songs.length} Songs</p>
                )}
                {album.spotifyUrl && (
                  <button className="listen-button" onClick={(e) => {
                    e.stopPropagation();
                    window.open(album.spotifyUrl, '_blank');
                  }}>
                    Listen Now
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'songs' && (
          <div className="songs-list">
            {songs.map((song, index) => (
              <div key={song._id || index} className="song-item">
                <div className="song-number">{index + 1}</div>
                <div className="song-info">
                  <h3 className="song-title">{song.title}</h3>
                  <p className="song-movie">{song.movie || 'Single'}</p>
                </div>
                <div className="song-duration">{song.duration}</div>
                <div className="song-popularity">⭐ {song.popularity || 0}</div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Discography;

