import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Cart.css';

function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/cart-management/cart`);
        setCart(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch cart. Please try again later.');
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/cart-management/cart/items/${itemId}`, {
        quantity: newQuantity
      });
      // Refresh cart after update
      const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/cart-management/cart`);
      setCart(response.data);
    } catch (err) {
      alert('Failed to update item quantity. Please try again.');
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/cart-management/cart/items/${itemId}`);
      // Refresh cart after removal
      const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/cart-management/cart`);
      setCart(response.data);
    } catch (err) {
      alert('Failed to remove item from cart. Please try again.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!cart || cart.items.length === 0) return <div>Your cart is empty</div>;

  return (
    <div className="Cart">
      <h1>Your Cart</h1>
      {cart.items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.product.image} alt={item.product.name} />
          <div className="item-details">
            <h2>{item.product.name}</h2>
            <p>${item.product.price}</p>
            <div className="quantity-control">
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <button onClick={() => handleRemoveItem(item.id)} className="remove-item">Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <p>Total: ${cart.totalAmount}</p>
        <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;