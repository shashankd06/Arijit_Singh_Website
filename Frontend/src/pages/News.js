import React, { useState, useEffect } from 'react';
import { getNews } from '../services/api';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    fetchNews();
  }, [category]);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await getNews(category !== 'all' ? category : null);
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
      // Sample data
      setNews([
        {
          _id: '1',
          title: 'Arijit Singh Wins Filmfare Award',
          content: 'Arijit Singh has won the Filmfare Award for Best Male Playback Singer for his outstanding performance in...',
          image: 'https://via.placeholder.com/400',
          category: 'Awards',
          createdAt: '2024-01-15'
        },
        {
          _id: '2',
          title: 'New Album Release',
          content: 'Arijit Singh announces the release of his new album featuring romantic ballads and soulful melodies...',
          image: 'https://via.placeholder.com/400',
          category: 'Releases',
          createdAt: '2024-02-01'
        },
        {
          _id: '3',
          title: 'Exclusive Interview',
          content: 'In an exclusive interview, Arijit Singh talks about his journey, inspiration, and future projects...',
          image: 'https://via.placeholder.com/400',
          category: 'Interviews',
          createdAt: '2024-02-15'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading news...</div>;
  }

  return (
    <div className="news">
      <section className="section">
        <h1 className="section-title">News & Updates</h1>
        <div className="news-filters">
          <button
            className={`filter-btn ${category === 'all' ? 'active' : ''}`}
            onClick={() => setCategory('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${category === 'News' ? 'active' : ''}`}
            onClick={() => setCategory('News')}
          >
            News
          </button>
          <button
            className={`filter-btn ${category === 'Awards' ? 'active' : ''}`}
            onClick={() => setCategory('Awards')}
          >
            Awards
          </button>
          <button
            className={`filter-btn ${category === 'Interviews' ? 'active' : ''}`}
            onClick={() => setCategory('Interviews')}
          >
            Interviews
          </button>
          <button
            className={`filter-btn ${category === 'Releases' ? 'active' : ''}`}
            onClick={() => setCategory('Releases')}
          >
            Releases
          </button>
        </div>
        <div className="news-grid">
          {news.map((item) => (
            <div key={item._id} className="news-card">
              <div className="news-image" style={{ background: `linear-gradient(135deg, #8b0000, #a52a2a)` }}>
                {item.title}
              </div>
              <div className="news-content">
                <span className="news-category">{item.category}</span>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.content}</p>
                <p className="news-date">
                  {new Date(item.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <button className="btn-secondary">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;

