import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const heroStyle = {
    backgroundImage: `url('/images/image.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: isMobile ? 'scroll' : 'fixed'
  };

  return (
    <div className="home">
      <section className="hero" style={heroStyle}>
        <div className="hero-content">
          <h1 className="hero-title">Arijit Singh</h1>
          <p className="hero-subtitle">The Voice of Bollywood</p>
          <p className="hero-description">
            Experience the soulful melodies and romantic ballads that have touched millions of hearts across the globe.
          </p>
          <div className="hero-buttons">
            <Link to="/discography" className="btn-primary">Explore Music</Link>
            <Link to="/concerts" className="btn-secondary">Upcoming Shows</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Featured Albums</h2>
        <div className="featured-albums">
          <div className="album-card">
            <div className="album-image">
              <img src="https://wallpapercave.com/wp/wp7717914.jpg" alt="Best of Arijit" />
            </div>
            <h3>Best of Arijit</h3>
            <p>Greatest Hits Collection</p>
          </div>
          <div className="album-card">
            <div className="album-image">
              <img src="https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20240131131003-500x500.jpg" alt="Romantic Hits" />
              </div>
            <h3>Romantic Hits</h3>
            <p>Love Songs Collection</p>
          </div>  
          <div className="album-card">
            <div className="album-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0_a0jw0XHp6HzSz_Hh0u60yzcwpTou1Evw&s" alt="Romantic Hits" />
            </div>
            <h3>Latest Releases</h3>
            <p>Newest Tracks</p>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>500+</h3>
            <p>Songs</p>
          </div>
          <div className="stat-card">
            <h3>100+</h3>
            <p>Albums</p>
          </div>
          <div className="stat-card">
            <h3>50M+</h3>
            <p>Followers</p>
          </div>
          <div className="stat-card">
            <h3>100+</h3>
            <p>Awards</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

