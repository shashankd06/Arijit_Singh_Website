import React, { useState, useEffect } from 'react';
import { getSongs, getLyricsBySong } from '../services/api';
import './Lyrics.css';

const Lyrics = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [lyrics, setLyrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const response = await getSongs();
      setSongs(response.data);
      if (response.data.length > 0) {
        setSelectedSong(response.data[0]);
        fetchLyrics(response.data[0]._id);
      }
    } catch (error) {
      console.error('Error fetching songs:', error);
      // Sample data
      const sampleSongs = [
        { _id: '1', title: 'Tum Hi Ho', movie: 'Aashiqui 2' },
        { _id: '2', title: 'Channa Mereya', movie: 'Ae Dil Hai Mushkil' },
        { _id: '3', title: 'Raabta', movie: 'Agent Vinod' }
      ];
      setSongs(sampleSongs);
      setSelectedSong(sampleSongs[0]);
      setLyrics({
        lyrics: 'Tum hi ho, tum hi ho\nAas paas khuda\nTum hi ho, tum hi ho\nAas paas khuda...',
        language: 'Hindi'
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchLyrics = async (songId) => {
    try {
      const response = await getLyricsBySong(songId);
      setLyrics(response.data);
    } catch (error) {
      console.error('Error fetching lyrics:', error);
      setLyrics({
        lyrics: 'Lyrics not available at the moment. Please check back later.',
        language: 'Hindi'
      });
    }
  };

  const handleSongSelect = (song) => {
    setSelectedSong(song);
    fetchLyrics(song._id);
  };

  if (loading) {
    return <div className="loading">Loading lyrics...</div>;
  }

  return (
    <div className="lyrics">
      <section className="section">
        <h1 className="section-title">Lyrics Library</h1>
        <div className="lyrics-container">
          <div className="songs-sidebar">
            <h3>Select a Song</h3>
            <div className="songs-list">
              {songs.map((song) => (
                <div
                  key={song._id}
                  className={`song-item ${selectedSong?._id === song._id ? 'active' : ''}`}
                  onClick={() => handleSongSelect(song)}
                >
                  <h4>{song.title}</h4>
                  <p>{song.movie || 'Single'}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lyrics-content">
            {selectedSong && (
              <>
                <h2 className="lyrics-song-title">{selectedSong.title}</h2>
                <p className="lyrics-movie">{selectedSong.movie || 'Single'}</p>
                {lyrics && (
                  <div className="lyrics-text">
                    <pre>{lyrics.lyrics}</pre>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lyrics;

