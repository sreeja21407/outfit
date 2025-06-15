// src/pages/LandingPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState(null);

  const openModal = (type) => {
    setModalContent(type);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const renderModalContent = () => {
    switch (modalContent) {
      case 'location':
        return (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>📍 Use My Location</h2>
              <p>This feature detects your device’s location to personalize weather suggestions and clothing tips in real-time.</p>
            </div>
          </div>
        );
      case 'outfit':
        return (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>👕 Outfit Suggester</h2>
              <p>AI recommends styles based on temperature, humidity, and your comfort preferences.</p>
            </div>
          </div>
        );
      case 'weather':
        return (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>🌤 Weather Teller</h2>
              <p>Get real-time weather updates to help you dress for any forecast confidently.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="landing-container">
      <header className="top-nav">
        <div className="logo">OutfitAI</div>
        <nav className="nav-links">
          <a href="/login">Login</a>
          <a href="/signup">Register</a>
        </nav>
      </header>

      <main className="main-content">
        <div className="top">
          <h1>Dress Smart. Feel Confident. Every Day.</h1>
          <p>Guide your wardrobe choices — perfect for every mood and forecast.</p>
          <button onClick={() => navigate('/register')}>Get Started</button>
        </div>

        <div className="cards">
          <div className="card" onClick={() => openModal('location')}>
            <h3>📍 Use My Location</h3>
            <p>Automatically detect your location for accurate weather-based suggestions.</p>
          </div>
          <div className="card" onClick={() => openModal('outfit')}>
            <h3>👕 Outfit Suggester</h3>
            <p>AI recommends styles based on temperature, humidity, and comfort needs.</p>
          </div>
          <div className="card" onClick={() => openModal('weather')}>
            <h3>🌤 Weather Teller</h3>
            <p>Get live weather updates to help plan your day’s wardrobe smartly.</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        © 2025 OutfitAI. All Rights Reserved.
      </footer>

      {renderModalContent()}
    </div>
  );
};

export default LandingPage;
