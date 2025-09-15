import React from 'react';
import { Link } from 'react-router-dom';

const pageStyle = {
  minHeight: '100vh',
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const cardStyle = {
  maxWidth: '480px',
  width: '100%',
  background: '#fff',
  borderRadius: '18px',
  boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
  padding: '2.5rem 2rem',
  textAlign: 'center',
  color: '#222',
  border: '1px solid #f0f0f0',
};

const iconStyle = {
  fontSize: '2.8rem',
  marginBottom: '1rem',
  color: '#4f8cff',
};

const btnStyle = {
  display: 'inline-block',
  margin: '1rem 0.5rem',
  padding: '0.75rem 2rem',
  borderRadius: '8px',
  background: '#4f8cff',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  textDecoration: 'none',
  border: 'none',
  boxShadow: '0 2px 8px rgba(79,140,255,0.10)',
  transition: 'background 0.2s, transform 0.2s',
};

const btnHover = {
  background: '#357ae8',
  transform: 'scale(1.05)',
};

function Home() {
  const [hovered, setHovered] = React.useState('');
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={iconStyle}>🛍️</div>
        <h1 style={{ color: '#222', marginBottom: '1rem', fontWeight: 700, fontSize: '2rem' }}>
          Welcome to the Merchandise Portal
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#555', marginBottom: '2rem', fontWeight: 500 }}>
          Order, review, and track merchandise for your organization.<br />
          Enjoy a seamless, secure, and modern experience!
        </p>
        <div>
          <Link
            to="/products"
            style={hovered === 'products' ? { ...btnStyle, ...btnHover } : btnStyle}
            onMouseEnter={() => setHovered('products')}
            onMouseLeave={() => setHovered('')}
          >
            Browse Products
          </Link>
          <Link
            to="/profile"
            style={hovered === 'profile' ? { ...btnStyle, ...btnHover } : btnStyle}
            onMouseEnter={() => setHovered('profile')}
            onMouseLeave={() => setHovered('')}
          >
            Your Profile
          </Link>
          <Link
            to="/login"
            style={hovered === 'login' ? { ...btnStyle, ...btnHover } : btnStyle}
            onMouseEnter={() => setHovered('login')}
            onMouseLeave={() => setHovered('')}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
