import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to Our E-commerce Store</h1>
      <p>Discover amazing products at great prices!</p>
      <Link to="/products" className="cta-button">Shop Now</Link>
    </div>
  );
}

export default Home;