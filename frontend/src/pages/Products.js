import React, { useState } from 'react';

const products = [
  {
    name: 'IITG Hoodie',
    price: 999,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Campus Mug',
    price: 299,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Tote Bag',
    price: 399,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Notebook',
    price: 199,
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Water Bottle',
    price: 249,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'IITG T-shirt',
    price: 499,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Classic Tee',
    price: 349,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Sports Cap',
    price: 299,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Eco Bottle',
    price: 349,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Canvas Bag',
    price: 299,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
];

const pageBgStyle = {
  minHeight: '100vh',
  width: '100%',
  background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
  animation: 'bgMove 12s ease-in-out infinite',
};

const gridWrapperStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2rem 1rem',
  height: 'calc(100vh - 160px)',
  overflowY: 'auto',
  borderRadius: '18px',
  background: 'rgba(255,255,255,0.95)',
  boxShadow: '0 4px 32px rgba(0,0,0,0.07)',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '2rem',
  padding: '1rem',
};

const cardStyle = {
  background: '#fff',
  borderRadius: '14px',
  boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
  padding: '1.5rem',
  textAlign: 'center',
  border: '1px solid #f0f0f0',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

const cardHover = {
  transform: 'scale(1.04)',
  boxShadow: '0 6px 24px rgba(79,140,255,0.18)',
};

const imgStyle = {
  width: '100%',
  height: '160px',
  objectFit: 'cover',
  borderRadius: '10px',
  marginBottom: '1rem',
  boxShadow: '0 2px 8px rgba(79,140,255,0.10)',
};

function Products() {
  const [hovered, setHovered] = useState(-1);
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <style>{`
        @keyframes bgMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div style={pageBgStyle} />
      <h2 style={{ textAlign: 'center', margin: '2rem 0 1rem', color: '#4f8cff', fontWeight: 700, letterSpacing: '1px' }}>
        Products Catalog
      </h2>
      <div style={gridWrapperStyle}>
        <div style={gridStyle}>
          {products.map((product, idx) => (
            <div
              key={idx}
              style={hovered === idx ? { ...cardStyle, ...cardHover } : cardStyle}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(-1)}
            >
              <img src={product.image} alt={product.name} style={imgStyle} />
              <h3 style={{ margin: '0.5rem 0', color: '#222', fontWeight: 600 }}>{product.name}</h3>
              <p style={{ fontSize: '1.1rem', color: '#357ae8', fontWeight: 500 }}>
                ₹ {product.price.toLocaleString('en-IN')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
