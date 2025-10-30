import React from "react";
import Home from "./pages/Home";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="fade-in">Welcome to Our Store</h1>
        <p className="slide-up">
          Find the best products at unbeatable prices. Shop now and experience
          the best deals!
        </p>
        <button className="hero-btn">Shop Now</button>
      </div>

      <div className="hero-image">
        <img
          src="/images/ecom5.jpg"
          alt="E-commerce"
        />
      </div>
    </section>
  );
}

export default HeroSection;
