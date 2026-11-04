import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "../components/Checkout.css";
import { useCart } from '../context/CartContext';
import { createOrder } from '../utils/orders';
import { formatPrice } from '../utils/price';
import { validateCheckout } from '../utils/validation';

export default function Checkout() {
  const { items, totalQuantity, subtotal, total, clearCart } = useCart();

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
  });
  const [errors, setErrors] = useState({});
  const [placeError, setPlaceError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [order, setOrder] = useState(null); // set after a successful order

  // The ref blocks a second click even before React re-renders the disabled button.
  const submitLock = useRef(false);
  const mounted = useRef(true);
  useEffect(() => {
    // Set to true again on every mount: React StrictMode (development) mounts,
    // unmounts and remounts components once, which would otherwise leave this false.
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setPlaceError('');
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (submitLock.current) return; // prevents duplicate submissions

    const foundErrors = validateCheckout(form);
    setErrors(foundErrors);
    setPlaceError('');
    if (Object.keys(foundErrors).length > 0) return;

    submitLock.current = true;
    setSubmitting(true);
    try {
      // Demo: a short pause to simulate processing. There is no server to wait for.
      await new Promise((resolve) => setTimeout(resolve, 700));
      if (!mounted.current) return; // the customer left the page: do not place the order

      const newOrder = createOrder({ customer: form, items }); // throws if it can't be saved
      setOrder(newOrder);
      clearCart(); // only after the order was saved successfully
    } catch (error) {
      setPlaceError(
        error && error.message
          ? `We could not place your order: ${error.message} Your cart has not been changed.`
          : 'We could not place your order. Your cart has not been changed. Please try again.'
      );
    } finally {
      submitLock.current = false;
      if (mounted.current) setSubmitting(false);
    }
  };

  // ---------- Confirmation screen ----------
  if (order) {
    return (
      <div className="checkout-page container">
        <p className="eyebrow">Order complete</p>
        <div className="order-confirmation">
          <h2>Order Confirmed ✓</h2>
          <p className="confirm-message">
            Your order has been confirmed successfully! Thank you for shopping with Nike Clone.
            Your order number is <strong>{order.orderNumber}</strong>. Payment method:{' '}
            <strong>Cash on Delivery</strong>.
          </p>
          <p className="demo-banner">
            Demo only: this order was saved in your browser. It was not sent to a real store and no payment was processed.
          </p>

          <div className="confirm-grid">
            <div className="confirm-box">
              <h3>Delivery details</h3>
              <p>{order.customer.fullName}</p>
              <p>{order.customer.address}</p>
              <p>{order.customer.city}</p>
              <p>📞 {order.customer.phone}</p>
              <p>📧 {order.customer.email}</p>
            </div>

            <div className="confirm-box">
              <h3>Order summary</h3>
              <ul className="confirm-items">
                {order.items.map((item) => (
                  <li key={item.id}>
                    <span>{item.name} × {item.quantity}</span>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </li>
                ))}
              </ul>
              <div className="summary-row"><span>Total quantity</span><span>{order.totalQuantity}</span></div>
              <div className="summary-row summary-total">
                <span>Total to pay on delivery</span><span>{formatPrice(order.total)}</span>
              </div>
            </div>
          </div>

          <Link to="/products">
            <button className="checkout-primary-btn confirm-continue">Continue Shopping</button>
          </Link>
        </div>
      </div>
    );
  }

  // ---------- Empty cart ----------
  if (items.length === 0) {
    return (
      <div className="checkout-page container">
        <p className="eyebrow">Your order</p>
        <h2>Checkout</h2>
        <div className="checkout-empty">
          <p>Your cart is empty, so there is nothing to check out.</p>
          <Link to="/products">
            <button className="checkout-primary-btn">Shop Now</button>
          </Link>
        </div>
      </div>
    );
  }

  // ---------- Checkout form ----------
  const field = (name, label, props = {}) => (
    <div className="checkout-field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} value={form[name]} onChange={handleChange} {...props} />
      {errors[name] && <span className="field-error">{errors[name]}</span>}
    </div>
  );

  return (
    <div className="checkout-page container">
      <p className="eyebrow">Your order</p>
      <h2>Checkout</h2>
      <p className="demo-banner">
        Demo checkout: no real order is placed and no payment is taken.
      </p>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handlePlaceOrder} noValidate>
          <h3>Delivery details</h3>
          {field('fullName', 'Full name', { type: 'text', autoComplete: 'name' })}
          {field('phone', 'Phone number', { type: 'tel', autoComplete: 'tel' })}
          {field('email', 'Email address', { type: 'email', autoComplete: 'email' })}
          <div className="checkout-field">
            <label htmlFor="address">Complete delivery address</label>
            <textarea
              id="address"
              name="address"
              rows="3"
              autoComplete="street-address"
              value={form.address}
              onChange={handleChange}
            />
            {errors.address && <span className="field-error">{errors.address}</span>}
          </div>
          {field('city', 'City', { type: 'text', autoComplete: 'address-level2' })}

          <h3>Payment method</h3>
          <label className="payment-option">
            <input type="radio" name="payment" checked readOnly />
            <span>
              <strong>Cash on Delivery (COD)</strong>
              <br />
              You will pay in cash when your order is delivered.
            </span>
          </label>

          {placeError && <p className="form-error" role="alert">{placeError}</p>}

          <button type="submit" className="checkout-primary-btn" disabled={submitting}>
            {submitting ? 'Placing order...' : `Place Order · ${formatPrice(total)}`}
          </button>
          <Link to="/cart" className="cart-continue">← Back to cart</Link>
        </form>

        <aside className="cart-summary">
          <h3>Order Summary</h3>
          <ul className="confirm-items">
            {items.map((item) => (
              <li key={item.id}>
                <span>{item.name} × {item.quantity}</span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="summary-row"><span>Total quantity</span><span>{totalQuantity}</span></div>
          <div className="summary-row"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <div className="summary-row"><span>Delivery</span><span>Free</span></div>
          <div className="summary-row summary-total">
            <span>Total payable</span><span>{formatPrice(total)}</span>
          </div>
          <p className="cart-limit-note">Pay in cash on delivery.</p>
        </aside>
      </div>
    </div>
  );
}
