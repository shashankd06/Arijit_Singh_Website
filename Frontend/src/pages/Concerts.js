import React, { useState, useEffect } from 'react';
import { getConcerts } from '../services/api';
import './Concerts.css';

const Concerts = () => {
  const [concerts, setConcerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showUpcoming, setShowUpcoming] = useState(true);

  useEffect(() => {
    fetchConcerts();
  }, [showUpcoming]);

  const fetchConcerts = async () => {
    try {
      setLoading(true);
      const response = await getConcerts(showUpcoming);
      setConcerts(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load concerts. Please try again later.');
      console.error(err);
      // Sample data
      setConcerts([
        {
          _id: '1',
          title: 'Arijit Singh Live in Mumbai',
          venue: 'Wankhede Stadium',
          city: 'Mumbai',
          country: 'India',
          date: '2024-12-15',
          time: '7:00 PM',
          ticketUrl: '#',
          price: '₹2,000 - ₹10,000',
          description: 'Experience the magic of Arijit Singh live in concert'
        },
        {
          _id: '2',
          title: 'Arijit Singh Live in Delhi',
          venue: 'Jawaharlal Nehru Stadium',
          city: 'Delhi',
          country: 'India',
          date: '2025-01-20',
          time: '7:00 PM',
          ticketUrl: '#',
          price: '₹2,000 - ₹10,000',
          description: 'An unforgettable evening with Arijit Singh'
        },
        {
          _id: '3',
          title: 'Arijit Singh Live in Bangalore',
          venue: 'Palace Grounds',
          city: 'Bangalore',
          country: 'India',
          date: '2025-02-10',
          time: '7:00 PM',
          ticketUrl: '#',
          price: '₹2,000 - ₹10,000',
          description: 'Join us for a soulful musical journey'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading concerts...</div>;
  }

  return (
    <div className="concerts">
      <section className="section">
        <h1 className="section-title">Concerts & Tours</h1>
        <div className="concerts-filter">
          <button
            className={`filter-btn ${showUpcoming ? 'active' : ''}`}
            onClick={() => setShowUpcoming(true)}
          >
            Upcoming Shows
          </button>
          <button
            className={`filter-btn ${!showUpcoming ? 'active' : ''}`}
            onClick={() => setShowUpcoming(false)}
          >
            Past Shows
          </button>
        </div>

        {error && <div className="error">{error}</div>}

        <div className="concerts-grid">
          {concerts.map((concert) => (
            <div key={concert._id} className="concert-card">
              <div className="concert-image">
                <div className="image-placeholder">Concert</div>
              </div>
              <div className="concert-content">
                <h3 className="concert-title">{concert.title}</h3>
                <div className="concert-details">
                  <p className="concert-venue">📍 {concert.venue}</p>
                  <p className="concert-city">{concert.city}, {concert.country}</p>
                  <p className="concert-date">📅 {new Date(concert.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                  <p className="concert-time">🕐 {concert.time}</p>
                  <p className="concert-price">💰 {concert.price}</p>
                </div>
                <p className="concert-description">{concert.description}</p>
                <a href={concert.ticketUrl || '#'} className="btn-primary">Get Tickets</a>
              </div>
            </div>
          ))}
        </div>

        {concerts.length === 0 && (
          <div className="no-concerts">
            <p>No {showUpcoming ? 'upcoming' : 'past'} concerts scheduled at the moment.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Concerts;

