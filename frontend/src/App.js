

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Login from './pages/Login';
import './App.css';

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  background: 'linear-gradient(90deg, #4f8cff 0%, #6dd5ed 100%)',
  color: '#fff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
  marginRight: '2rem',
  fontSize: '1.1rem',
  transition: 'color 0.2s'
};

const logoStyle = {
  fontWeight: 'bold',
  fontSize: '1.5rem',
  letterSpacing: '2px',
  color: '#fff',
  textShadow: '1px 1px 4px #333'

};

function App() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <>
      <nav style={navStyle}>
        <span style={logoStyle}>🛍️ Merchandise Portal</span>
        <div>
          <Link to="/products" style={linkStyle}>Products</Link>
          <Link to="/profile" style={linkStyle}>Profile</Link>
          <Link to="/login" style={{ ...linkStyle, marginRight: 0 }}>Login</Link>
        </div>
      </nav>
      
      {/* Animated Background */}
      <div className="animated-bg">
        {/* Shirt SVG */}
        <svg className="floating-icon icon1" width="80" height="80" viewBox="0 0 80 80">
          <rect x="20" y="30" width="40" height="30" rx="10" fill="#4f8cff" />
          <rect x="10" y="10" width="20" height="30" rx="8" fill="#6dd5ed" />
          <rect x="50" y="10" width="20" height="30" rx="8" fill="#6dd5ed" />
        </svg>
        {/* T-shirt SVG */}
        <svg className="floating-icon icon2" width="70" height="70" viewBox="0 0 70 70">
          <rect x="20" y="25" width="30" height="25" rx="8" fill="#f6d365" />
          <rect x="10" y="10" width="15" height="25" rx="6" fill="#fda085" />
          <rect x="45" y="10" width="15" height="25" rx="6" fill="#fda085" />
        </svg>
        {/* Dress SVG */}
        <svg className="floating-icon icon3" width="60" height="60" viewBox="0 0 60 60">
          <ellipse cx="30" cy="40" rx="18" ry="12" fill="#6dd5ed" />
          <rect x="22" y="10" width="16" height="30" rx="6" fill="#4f8cff" />
        </svg>
        {/* Hoodie SVG */}
        <svg className="floating-icon icon4" width="70" height="70" viewBox="0 0 70 70">
          <rect x="20" y="30" width="30" height="25" rx="10" fill="#fda085" />
          <ellipse cx="35" cy="20" rx="15" ry="10" fill="#4f8cff" />
        </svg>
        {/* Tote Bag SVG */}
        <svg className="floating-icon icon5" width="60" height="60" viewBox="0 0 60 60">
          <rect x="15" y="25" width="30" height="25" rx="8" fill="#f6d365" />
          <rect x="25" y="15" width="10" height="15" rx="4" fill="#6dd5ed" />
        </svg>
      </div>

      {/* Welcome Popup */}
      {showPopup && (
        <div className="welcome-popup">
          <div className="welcome-popup-card">
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', filter: 'drop-shadow(0 2px 8px #fff)' }}>🛍️</div>
              <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '1.5rem', letterSpacing: '1px' }}>
                Welcome to the Merchandise Portal
              </h2>
              <p style={{ fontSize: '1.15rem', fontWeight: 400, marginBottom: '1.5rem', color: '#eaf6ff' }}>
                Shop, review, and track your favorite campus merchandise.
              </p>
              <div style={{ marginTop: '1.5rem', fontSize: '1.5rem', animation: 'pulse 1.2s infinite alternate' }}>✨</div>
            </div>
          </div>
        </div>
      )}
      {/* Main Content */}
      <div style={{ minHeight: 'calc(100vh - 80px)', background: 'rgba(255,255,255,0.9)', padding: '2rem 0', position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      </>
    </Router>
  );
}

export default App;
