import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import CityInput from './pages/CityInput';
import OutfitPage from './pages/OutfitPage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/location" element={<ProtectedRoute><CityInput /></ProtectedRoute>} />
        <Route path="/outfit" element={<ProtectedRoute><OutfitPage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
