import React, { useState } from 'react';
import { submitContact } from '../services/api';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'General'
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContact(formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        type: 'General'
      });
    } catch (error) {
      console.error('Error submitting contact:', error);
      alert('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="contact">
        <section className="section">
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>Your message has been received. We will get back to you soon.</p>
            <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="contact">
      <section className="section">
        <h1 className="section-title">Contact & Booking</h1>
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>For bookings, collaborations, or general inquiries, please fill out the form or contact us directly.</p>
            <div className="contact-details">
              <div className="contact-item">
                <h3>Email</h3>
                <p>contact@arijitsingh.com</p>
              </div>
              <div className="contact-item">
                <h3>Booking</h3>
                <p>booking@arijitsingh.com</p>
              </div>
              <div className="contact-item">
                <h3>Media Inquiries</h3>
                <p>media@arijitsingh.com</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Inquiry Type *</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="General">General</option>
                <option value="Booking">Booking</option>
                <option value="Media">Media</option>
                <option value="Collaboration">Collaboration</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

