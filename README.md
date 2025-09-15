# 🎽 MerchandiseHub - Smart Merchandise Management Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16.x-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.x-green)](https://www.mongodb.com/)

## 🚀 Overview

MerchandiseHub is a comprehensive platform designed to streamline merchandise ordering, review, and distribution for organizations. Perfect for universities, corporate events, and large-scale merchandise management.

## ✨ Key Features

### 🛍️ Product Management
- Dynamic product catalog with advanced filtering
- Bulk and individual order capabilities
- Real-time inventory tracking
- Custom product customization options

### 💳 Payment & Security
- Secure payment integration with Razorpay
- Role-based access control
- JWT authentication
- Privacy-focused design

### 📦 Order Management
- Individual and group order processing
- Distribution tracking system
- Order status notifications
- Bulk order optimization

### 🔔 Smart Notifications
- Email notifications via SMTP
- SMS alerts through Twilio
- Order status updates
- Review system notifications

### 👥 User Management
- Role-based authentication
- User profiles and preferences
- Order history tracking
- Group management features

## 🛠️ Technology Stack

### Frontend
- **React.js** - Modern UI components and state management
- **Material-UI** - Responsive design components
- **Redux** - State management
- **Axios** - API integration

### Backend
- **Node.js** - Server runtime
- **Express** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Razorpay** - Payment processing
- **Twilio** - SMS notifications
- **Nodemailer** - Email notifications

## 📁 Project Structure

```
├── frontend/          # React application
│   ├── src/
│   │   ├── pages/    # Page components
│   │   ├── components/# Reusable components
│   │   └── App.js    # Main application
│   └── package.json
│
├── backend/           # Express API
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/   # Database models
│   │   ├── routes/   # API routes
│   │   └── server.js # Server configuration
│   └── package.json
│
└── .github/          # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Razorpay account
- Twilio account (for SMS)
- SMTP server (for emails)

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/merchandisehub.git
   cd merchandisehub
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Configure your environment variables
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   # Configure your environment variables
   npm start
   ```

See detailed setup instructions in `frontend/README.md` and `backend/README.md`.

## 📝 Environment Variables

### Backend
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
SMTP_HOST=your_smtp_host
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

### Frontend
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Project Lead: [Your Name](https://github.com/yourusername)
- Frontend Developer: [Name](https://github.com/username)
- Backend Developer: [Name](https://github.com/username)

## 🙏 Acknowledgments

- Special thanks to all contributors
- Inspired by modern merchandise management needs
- Built with ❤️ for organizations worldwide

---
*For support, please open an issue in the GitHub repository.*