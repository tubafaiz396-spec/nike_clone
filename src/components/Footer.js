import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img src="/images/brand_logo.png" alt="Nike" />
        <p>Move with purpose. Find the pair that keeps up.</p>
        <a className="footer__mail" href="mailto:support@nike.com">support@nike.com <span>↗</span></a>
      </div>
      <div><h3>Explore</h3><ul><li><Link to="/Men">Men</Link></li><li><Link to="/Women">Women</Link></li><li><Link to="/Kids">Kids</Link></li><li><Link to="/NewArrivals">New arrivals</Link></li></ul></div>
      <div><h3>Need help?</h3><ul><li><Link to="/#services">Services</Link></li><li><Link to="/#contact">Contact</Link></li><li><Link to="/Cart">Cart</Link></li><li><Link to="/Checkout">Checkout</Link></li></ul></div>
      <div className="footer__note"><span>Demo store · Cash on delivery</span><span>Orders are saved in this browser only.</span></div>
      <div className="footer__bottom"><span>© 2026 Nike-inspired demo store</span><span>Built for motion.</span></div>
    </footer>
  );
}
