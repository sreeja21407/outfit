import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './OutfitPage.css';

const OutfitPage = () => {
  const location = useLocation();
  const city = location.state?.city;
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b20283dc30617e563b4c217e871d19a0&units=metric`);
        const data = await response.json();
        if (data.cod === 200) {
          setWeather(data);
        } else {
          setError('City not found');
        }
      } catch (err) {
        setError('Failed to fetch weather');
      }
    };
    if (city) fetchWeather();
  }, [city]);

  const getOutfit = (temp) => {
    if (temp > 30) return 'It\'s hot! Wear light cotton clothes and stay hydrated.';
    if (temp > 20) return 'Mild weather! A t-shirt and jeans will do.';
    if (temp > 10) return 'A bit chilly! Wear a hoodie or light jacket.';
    return 'It\'s cold! Bundle up with warm clothes, sweater, and coat.';
  };

  return (
    <div className="outfit-page">
      <h2>Weather and Outfit Suggestion</h2>
      {weather ? (
        <div>
          <p><strong>City:</strong> {weather.name}</p>
          <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
          <p><strong>Condition:</strong> {weather.weather[0].description}</p>
          <p><strong>Suggestion:</strong> {getOutfit(weather.main.temp)}</p>
        </div>
      ) : (
        <p>{error || 'Loading...'}</p>
      )}
    </div>
  );
};

export default OutfitPage;
