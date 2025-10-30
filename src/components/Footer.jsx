import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { 
  FaHome, FaShopify, FaInfoCircle, FaEnvelope, 
  FaFacebookF, FaTwitter, FaInstagram, 
  FaQuestionCircle, FaUndo, FaTruck, FaShieldAlt 
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo Box */}
        <div className="footer-box">
          <h2 className="logo">Vistora</h2>
          <p>Your one-stop shop for fashion and lifestyle products.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/"><FaHome className="icon" /> Home</Link></li>
            <li><Link to="/products"><FaShopify className="icon" /> Shop</Link></li>
            <li><Link to="/about"><FaInfoCircle className="icon" /> About</Link></li>
            <li><Link to="/contact"><FaEnvelope className="icon" /> Contact</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-box">
          <h3>Customer Support</h3>
          <ul>
            <li><Link to="/faq"><FaQuestionCircle className="icon" /> FAQ</Link></li>
            <li><Link to="/returns"><FaUndo className="icon" /> Returns</Link></li>
            <li><Link to="/shipping"><FaTruck className="icon" /> Shipping</Link></li>
            <li><Link to="/privacy"><FaShieldAlt className="icon" /> Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="footer-box">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

      </div>
      <p className="copyright">© 2025 E-Commerce. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
