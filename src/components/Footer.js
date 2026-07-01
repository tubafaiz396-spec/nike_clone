import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer"> 
      <div className="footer-section">
        <h3>Nike</h3>
        <p>Empowering every athlete. Quality, comfort, and performance — Nike brings you the best in every step.</p>
      </div>

      <div className="footer-section">
        <h4>Pages</h4>
        <ul>
          <li><Link to="/" target="_blank">Home</Link></li>
          <li><Link to="/About" target="_blank">About</Link></li>
          <li><Link to="/Contact" target="_blank">Contact</Link></li>
          <li><Link to="/Services" target="_blank">Services</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Menu</h4>
        <ul>
        <li><Link to="/Men" target="_blank">Men</Link></li>
        <li><Link to="/Women" target="_blank">Women</Link></li>
        <li><Link to="/Kids" target="_blank">Kids</Link></li>
        <li><Link to="/NewArrivals" target="_blank">New Arrivals</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
