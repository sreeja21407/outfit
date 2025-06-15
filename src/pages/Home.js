
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [outfit, setOutfit] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success => {
      const { latitude, longitude } = success.coords;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
        .then(res => res.json())
        .then(data => {
          setWeather(data);
          const temp = data.main.temp;
          let suggestion = '';

          if (temp > 30) suggestion = 'Wear light clothes like T-shirts and shorts';
          else if (temp > 20) suggestion = 'Wear a light jacket or long sleeves';
          else if (temp > 10) suggestion = 'Wear a jacket or sweater';
          else suggestion = 'Bundle up! Wear a heavy coat, gloves, and scarf';

          setOutfit(suggestion);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching weather:', error);
          setLoading(false);
        });
    });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to the Outfit Suggester 👕🧥</h1>
      {loading ? (
        <p>Detecting your location and weather...</p>
      ) : weather ? (
        <div>
          <h2>Current Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <h3>Suggested Outfit:</h3>
          <p>{outfit}</p>
        </div>
      ) : (
        <p>Unable to fetch weather data.</p>
      )}
    </div>
  );
};

export default Home;
