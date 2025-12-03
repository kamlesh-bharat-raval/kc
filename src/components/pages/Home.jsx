import React, { useContext, useEffect } from "react";
import { FaShippingFast, FaHeadset, FaUndoAlt, FaTags } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import "./Home.css";

import AOS from "aos";
import "aos/dist/aos.css";

import heroImg from "../images/ecom5.jpg";
import p1 from "../images/p11.jpg";
import p2 from "../images/p12.jpg";
import p3 from "../images/watch1.jpg";
import p4 from "../images/p14.jpg";
import menImg from "../images/cat7.jpg";
import womenImg from "../images/cat2.jpg";
import kidsImg from "../images/cat4.jpg";
import accImg from "../images/cat5.jpg";
import p5 from "../images/hoodie.jpg";
import p6 from "../images/sneaker.jpg";
import p7 from "../images/smartwatch.jpg";
import p8 from "../images/backpage.jpg";

const productData = [
  { id: 1, img: p1, name: "Stylish Jacket", price: 1499 },
  { id: 2, img: p2, name: "Casual Sneakers", price: 2199 },
  { id: 3, img: p3, name: "Modern Watch", price: 3499 },
  { id: 4, img: p4, name: "Trendy Bag", price: 999 },
  { id: 5, img: p5, name: "Classic Hoodie", price: 1299 },
  { id: 6, img: p6, name: "Running Shoes", price: 2499 },
  { id: 7, img: p7, name: "Smart Watch", price: 3999 },
  { id: 8, img: p8, name: "Leather Backpack", price: 1799 },
];

function Home() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  // 🔥 FIX: AOS Reinitialize for GitHub Pages
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: "ease-in-out",
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
    window.scrollTo(0, 0);
  };

  const featuredProducts = productData.slice(0, 4);
  const trendingProducts = productData.slice(4, 8);

  const handleWishlistClick = (e, product) => {
    e.stopPropagation();
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    if (isInWishlist) removeFromWishlist(product.id);
    else addToWishlist(product);
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero" data-aos="fade-up">
        <div className="hero-text" data-aos="fade-right">
          <h1>Best Deals on Fashion</h1>
          <p>Shop the latest trends with unbeatable prices. Upgrade your style today!</p>
          <button className="shop-btn" onClick={() => navigate("/products")}>
            Shop Now
          </button>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <img src={heroImg} alt="hero" />
        </div>
      </section>

      {/* Banner */}
      <section className="banner">
        {[FaShippingFast, FaHeadset, FaUndoAlt, FaTags].map((Icon, i) => (
          <div key={i} className="banner-box" data-aos="zoom-in" data-aos-delay={i * 100}>
            <Icon className="banner-icon" />
            <div>
              <h2>{["Free Shipping", "24/7 Support", "Money Back", "Order Discount"][i]}</h2>
              <p>{["On orders above ₹999", "We're here anytime", "30 Days Return", "Save with offers"][i]}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section className="categories" data-aos="fade-up">
        <h2 className="section-title">Shop by Categories</h2>
        <div className="category-grid">
          {[
            { img: menImg, label: "Men", key: "men" },
            { img: womenImg, label: "Women", key: "women" },
            { img: kidsImg, label: "Kids", key: "kids" },
            { img: accImg, label: "Accessories", key: "accessories" },
          ].map((cat, i) => (
            <div key={i} data-aos="flip-left" data-aos-delay={i * 100} className="category-card"
              onClick={() => handleCategoryClick(cat.key)}>
              <img src={cat.img} alt={cat.label} className="category-img" />
              <h3>{cat.label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <ProductSection title="Featured Products" items={featuredProducts} wishlist={wishlist} onAdd={addToCart} onWish={handleWishlistClick} />

      {/* Trending */}
      <ProductSection title="Trending Products" items={trendingProducts} wishlist={wishlist} onAdd={addToCart} onWish={handleWishlistClick} />
    </div>
  );
}

function ProductSection({ title, items, wishlist, onAdd, onWish }) {
  return (
    <section className="featured" data-aos="fade-up">
      <h2 className="section-title">{title}</h2>
      <div className="product-grid">
        {items.map((product, i) => (
          <div className="product-card" key={product.id} data-aos="zoom-in" data-aos-delay={i * 100}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <div className="product-actions">
              <button className="add-btn" onClick={() => onAdd(product)}>
                Add to Cart
              </button>
              <button
                className={`wishlist-btn ${wishlist.some(item => item.id === product.id) ? "active" : ""}`}
                onClick={(e) => onWish(e, product)}
              >
                {wishlist.some(item => item.id === product.id) ? "❤️ Added" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
