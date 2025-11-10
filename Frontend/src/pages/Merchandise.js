import React, { useState, useEffect } from 'react';
import { getMerchandise } from '../services/api';
import './Merchandise.css';

const Merchandise = () => {
  const [merchandise, setMerchandise] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchMerchandise();
  }, [category]);

  const fetchMerchandise = async () => {
    try {
      setLoading(true);
      const response = await getMerchandise(category !== 'all' ? category : null);
      setMerchandise(response.data);
    } catch (error) {
      console.error('Error fetching merchandise:', error);
      // Sample data
      setMerchandise([
        {
          _id: '1',
          name: 'Official T-Shirt',
          description: 'Premium quality official Arijit Singh t-shirt',
          price: 1299,
          category: 'Apparel',
          image: 'https://via.placeholder.com/300',
          inStock: true
        },
        {
          _id: '2',
          name: 'Signed Poster',
          description: 'Limited edition signed poster',
          price: 1999,
          category: 'Posters',
          image: 'https://via.placeholder.com/300',
          inStock: true
        },
        {
          _id: '3',
          name: 'CD Collection',
          description: 'Complete album collection on CD',
          price: 2499,
          category: 'Music',
          image: 'https://via.placeholder.com/300',
          inStock: true
        },
        {
          _id: '4',
          name: 'Cap',
          description: 'Official branded cap',
          price: 799,
          category: 'Accessories',
          image: 'https://via.placeholder.com/300',
          inStock: true
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  if (loading) {
    return <div className="loading">Loading merchandise...</div>;
  }

  return (
    <div className="merchandise">
      <section className="section">
        <h1 className="section-title">Merchandise Store</h1>
        <div className="merchandise-filters">
          <button
            className={`filter-btn ${category === 'all' ? 'active' : ''}`}
            onClick={() => setCategory('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${category === 'Apparel' ? 'active' : ''}`}
            onClick={() => setCategory('Apparel')}
          >
            Apparel
          </button>
          <button
            className={`filter-btn ${category === 'Accessories' ? 'active' : ''}`}
            onClick={() => setCategory('Accessories')}
          >
            Accessories
          </button>
          <button
            className={`filter-btn ${category === 'Music' ? 'active' : ''}`}
            onClick={() => setCategory('Music')}
          >
            Music
          </button>
          <button
            className={`filter-btn ${category === 'Posters' ? 'active' : ''}`}
            onClick={() => setCategory('Posters')}
          >
            Posters
          </button>
        </div>
        <div className="merchandise-grid">
          {merchandise.map((item) => (
            <div key={item._id} className="merchandise-card">
              <div className="merchandise-image" style={{ background: `linear-gradient(135deg, #8b0000, #a52a2a)` }}>
                {item.name}
              </div>
              <div className="merchandise-content">
                <span className="merchandise-category">{item.category}</span>
                <h3 className="merchandise-name">{item.name}</h3>
                <p className="merchandise-description">{item.description}</p>
                <div className="merchandise-footer">
                  <p className="merchandise-price">₹{item.price.toLocaleString()}</p>
                  <button
                    className="btn-primary"
                    onClick={() => addToCart(item)}
                    disabled={!item.inStock}
                  >
                    {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Merchandise;

