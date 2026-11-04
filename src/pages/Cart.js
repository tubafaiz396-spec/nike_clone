import React from 'react';
import { Link } from 'react-router-dom';
import "../components/Cart.css";
import { useCart } from '../context/CartContext';
import { MAX_QTY, MIN_QTY } from '../context/cartReducer';
import { formatPrice } from '../utils/price';

export default function Cart() {
  const { items, totalQuantity, subtotal, total, setQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-page container">
        <p className="eyebrow">Shopping bag</p>
        <h2>Your Cart</h2>
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link to="/products">
            <button className="cart-primary-btn">Shop Now</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <p className="eyebrow">Shopping bag</p>
      <h2>Your Cart</h2>

      <div className="cart-layout">
        <ul className="cart-list">
          {items.map((item) => (
            <li className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-img" />

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">{formatPrice(item.price)}</p>
              </div>

              <div className="cart-qty" aria-label={`Quantity for ${item.name}`}>
                <button
                  onClick={() => setQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= MIN_QTY}
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => setQuantity(item.id, item.quantity + 1)}
                  disabled={item.quantity >= MAX_QTY}
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  +
                </button>
              </div>

              <p className="cart-line-total">{formatPrice(item.price * item.quantity)}</p>

              <button
                className="cart-remove-btn"
                onClick={() => removeItem(item.id)}
                aria-label={`Remove ${item.name} from cart`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <aside className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row"><span>Total quantity</span><span>{totalQuantity}</span></div>
          <div className="summary-row"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <div className="summary-row"><span>Delivery</span><span>Free</span></div>
          <div className="summary-row summary-total"><span>Order total</span><span>{formatPrice(total)}</span></div>
          <p className="cart-limit-note">Maximum {MAX_QTY} per product.</p>

          <Link to="/checkout">
            <button className="cart-primary-btn">Proceed to Checkout</button>
          </Link>
          <Link to="/products" className="cart-continue">Continue Shopping</Link>
        </aside>
      </div>
    </div>
  );
}
