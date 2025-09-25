
# 🟩 MatrixMarket - Decentralized, Privacy-Focused, Crypto-Ready Merchandise Platform

MatrixMarket is a next-generation, Matrix-themed platform for buying and selling merchandise with a focus on privacy, decentralization, and crypto integration. Built for campus communities, privacy enthusiasts, and anyone who wants a futuristic, secure, and visually stunning marketplace experience.

---

## 🌟 Features

- 🟢 **Matrix/Hacker/Crypto Theme**: Neon green, digital rain, and immersive Matrix-inspired UI across all pages.
- 🛒 **Infinite Scrolling Product Page**: Browse products with seamless infinite scroll and currency toggle (INR, BTC, ETH).
- � **Buyer & Seller Roles**: Register/login as a buyer or seller. Each role gets a tailored dashboard and experience.
- �️ **Seller Dashboard**:
  - Welcome with your store name
  - Add products with image, description, price (in INR), and PGP public key
  - Change or remove products/images
  - Track product clicks/interest
- 👥 **Buyer Dashboard**:
  - Profile with privacy, wallet, and order history
  - Matrix-themed avatar and address management
- � **Privacy & Decentralization**:
  - No unnecessary data collection
  - PGP public key upload for sellers
  - Local storage for demo privacy
- 💸 **Crypto-Ready Cart**:
  - Cart supports INR, BTC, and ETH
  - Currency selection syncs between product and cart pages
  - Checkout flow with wallet connect (mock)
- 🌧️ **Global Matrix Rain Effect**: Digital rain on every page for a cohesive cyberpunk feel
- 📝 **About Page**: Explains privacy, decentralization, and Matrix philosophy

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Context API, Axios, custom CSS (Matrix theme)
- **Backend**: Node.js, Express, MongoDB (API, models, routes)
- **Crypto**: Live BTC/ETH rates for price conversion

---

## � Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── pages/        # Main pages (Products, Profile, Login, Register, SellerDashboard, About)
│   │   ├── components/   # Reusable UI components (ProductList, Cart, etc.)
│   │   └── App.js        # Main app entry
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
│
└── .github/              # Docs & instructions
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB

### Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/matrixmarket.git
   cd matrixmarket
   ```
2. **Backend**
   ```bash
   cd backend
   npm install
   npm run dev
   ```
3. **Frontend**
   ```bash
   cd frontend
   npm install
   npm start
   ```

---

## � Environment Variables

### Backend
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### Frontend
```env
REACT_APP_API_URL=http://localhost:5000
```

---

## 🤝 Contributing

Pull requests and suggestions are welcome! Please fork the repo and submit a PR.

---

## 👤 Credits

- Project Lead: [Your Name]
- Matrix theme, UI/UX, and privacy features: [Your Name]
- Inspired by the Matrix, privacy, and decentralized tech movements

---

*For support, open an issue on GitHub.*