import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CityInput.css';
const CityInput = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/outfit', { state: { city } });
  };

  return (
    <div className="form-container">
      <h2>Enter Your City</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" required />
        <button type="submit">Get Outfit Suggestion</button>
      </form>
    </div>
  );
};

export default CityInput;
