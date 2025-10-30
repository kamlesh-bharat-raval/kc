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

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  const featuredProducts = productData.slice(0, 4);
  const trendingProducts = productData.slice(4, 8);

  const handleWishlistClick = (e, product) => {
    e.stopPropagation();
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }   
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" data-aos="fade-up">
        <div className="hero-text" data-aos="fade-right">
          <h1>Best Deals on Fashion</h1>
          <p>Shop the latest trends with unbeatable prices. Upgrade your style today!</p>
          <button className="shop-btn" onClick={() => navigate("/products")}>
            Shop Now
          </button>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <img src={heroImg} alt="Ecommerce Hero" />
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner">
        <div className="banner-box" data-aos="zoom-in">
          <FaShippingFast className="banner-icon" />
          <div>
            <h2>Free Shipping</h2>
            <p>On all orders above ₹999</p>
          </div>
        </div>
        <div className="banner-box" data-aos="zoom-in" data-aos-delay="100">
          <FaHeadset className="banner-icon" />
          <div>
            <h2>24/7 Support</h2>
            <p>We are here to help anytime</p>
          </div>
        </div>
        <div className="banner-box" data-aos="zoom-in" data-aos-delay="200">
          <FaUndoAlt className="banner-icon" />
          <div>
            <h2>Money Back</h2>
            <p>30 Days Money Back Guarantee</p>
          </div>
        </div>
        <div className="banner-box" data-aos="zoom-in" data-aos-delay="300">
          <FaTags className="banner-icon" />
          <div>
            <h2>Order Discount</h2>
            <p>Save more with special offers</p>
          </div>
        </div>
      </section>

      {/* Shop by Categories */}
      <section className="categories" data-aos="fade-up">
        <h2 className="section-title">Shop by Categories</h2>
        <div className="category-grid">
          <div className="category-card" onClick={() => handleCategoryClick("men")} data-aos="flip-left">
            <img src={menImg} alt="Men" className="category-img" />
            <h3>Men</h3>
          </div>
          <div className="category-card" onClick={() => handleCategoryClick("women")} data-aos="flip-left" data-aos-delay="100">
            <img src={womenImg} alt="Women" className="category-img" />
            <h3>Women</h3>
          </div>
          <div className="category-card" onClick={() => handleCategoryClick("kids")} data-aos="flip-left" data-aos-delay="200">
            <img src={kidsImg} alt="Kids" className="category-img" />
            <h3>Kids</h3>
          </div>
          <div className="category-card" onClick={() => handleCategoryClick("accessories")} data-aos="flip-left" data-aos-delay="300">
            <img src={accImg} alt="Accessories" className="category-img" />
            <h3>Accessories</h3>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured" data-aos="fade-up">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product, i) => (
            <div className="product-card" key={product.id} data-aos="zoom-in" data-aos-delay={i * 100}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <div className="product-actions">
                <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                <button
                  className={`wishlist-btn ${wishlist.some(item => item.id === product.id) ? "active" : ""}`}
                  onClick={(e) => handleWishlistClick(e, product)}
                >
                  {wishlist.some(item => item.id === product.id) ? " ❤️ Remove" : "Add to Wishlist"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="trending" data-aos="fade-up">
        <h2 className="section-title">Trending Products</h2>
        <div className="trending-grid">
          {trendingProducts.map((product, i) => (
            <div className="trending-card" key={product.id} data-aos="fade-up" data-aos-delay={i * 100}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <div className="product-actions">
                <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                <button
                  className={`wishlist-btn ${wishlist.some(item => item.id === product.id) ? "active" : ""}`}
                  onClick={(e) => handleWishlistClick(e, product)}
                >
                  {wishlist.some(item => item.id === product.id) ? " ❤️ Remove" : "Add to Wishlist"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter" data-aos="fade-up">
        <div className="newsletter-content">
          <h2>Subscribe to our Newsletter</h2>
          <p>Get the latest updates on new products and upcoming sales</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" data-aos="fade-up">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-card" data-aos="fade-right">
            <img src="https://i.pravatar.cc/100?img=1" alt="customer1" />
            <p>"Great quality products! I loved the fast delivery."</p>
            <h4>- Sarah J.</h4>
          </div>
          <div className="testimonial-card" data-aos="fade-up">
            <img src="https://i.pravatar.cc/100?img=2" alt="customer2" />
            <p>"Customer service is amazing. Highly recommend this store."</p>
            <h4>- John D.</h4>
          </div>
          <div className="testimonial-card" data-aos="fade-left">
            <img src="https://i.pravatar.cc/100?img=3" alt="customer3" />
            <p>"Best prices and super trendy collections!"</p>
            <h4>- Emily R.</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
