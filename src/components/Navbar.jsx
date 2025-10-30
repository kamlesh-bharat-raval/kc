import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../components/images/vistora logo1.jpg" ;
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImage} alt="Vistora Logo" className="logo-img"/>
        <h2>Vistora</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
