import React, { useState, useEffect } from 'react';
import { getGallery } from '../services/api';
import './Gallery.css';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    fetchGallery();
  }, [category]);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const response = await getGallery(category !== 'all' ? category : null);
      setGallery(response.data);
    } catch (error) {
      console.error('Error fetching gallery:', error);
      // Sample data
      setGallery([
        { _id: '1', title: 'Concert Performance', imageUrl: 'https://via.placeholder.com/400', category: 'Concert' },
        { _id: '2', title: 'Studio Session', imageUrl: 'https://via.placeholder.com/400', category: 'Studio' },
        { _id: '3', title: 'Award Ceremony', imageUrl: 'https://via.placeholder.com/400', category: 'Awards' },
        { _id: '4', title: 'Behind the Scenes', imageUrl: 'https://via.placeholder.com/400', category: 'Behind Scenes' },
        { _id: '5', title: 'Personal Moment', imageUrl: 'https://via.placeholder.com/400', category: 'Personal' },
        { _id: '6', title: 'Live Performance', imageUrl: 'https://via.placeholder.com/400', category: 'Concert' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading gallery...</div>;
  }

  return (
    <div className="gallery">
      <section className="section">
        <h1 className="section-title">Gallery</h1>
        <div className="gallery-filters">
          <button
            className={`filter-btn ${category === 'all' ? 'active' : ''}`}
            onClick={() => setCategory('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${category === 'Concert' ? 'active' : ''}`}
            onClick={() => setCategory('Concert')}
          >
            Concerts
          </button>
          <button
            className={`filter-btn ${category === 'Studio' ? 'active' : ''}`}
            onClick={() => setCategory('Studio')}
          >
            Studio
          </button>
          <button
            className={`filter-btn ${category === 'Awards' ? 'active' : ''}`}
            onClick={() => setCategory('Awards')}
          >
            Awards
          </button>
          <button
            className={`filter-btn ${category === 'Behind Scenes' ? 'active' : ''}`}
            onClick={() => setCategory('Behind Scenes')}
          >
            Behind Scenes
          </button>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <div
              key={item._id}
              className="gallery-item"
              onClick={() => setSelectedImage(item)}
            >
              <div className="gallery-image" style={{ background: `linear-gradient(135deg, #8b0000, #a52a2a)` }}>
                {item.title}
              </div>
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedImage(null)}>&times;</span>
            <div className="modal-image" style={{ background: `linear-gradient(135deg, #8b0000, #a52a2a)` }}>
              {selectedImage.title}
            </div>
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.description || 'Gallery image'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

