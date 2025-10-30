import React, { useContext, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { allProducts } from "./Products";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((p) => p.id === Number(id));

  const { addToCart } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return <h2>Product not found</h2>;

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const suggestedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="flipkart-product-page">

      {/* Category navigation */}
      <div className="category-nav">
        <span>Explore Categories: </span>
        <Link to="/category/Men">Men</Link> |{" "}
        <Link to="/category/Women">Women</Link> |{" "}
        <Link to="/category/Kids">Kids</Link> |{" "}
        <Link to="/category/Accessories">Accessories</Link>
      </div>

      {/* Main section */}
      <div className="product-main">

        {/* Left Section */}
        <div className="left-section">
          <img src={product.img} alt={product.name} className="main-img" />

          <div className="action-buttons">
            <button className="add-cart" onClick={() => addToCart(product)}>
              🛒 Add to Cart
            </button>

            <button
              className={`wishlist-btn ${isInWishlist ? "active" : ""}`}
              onClick={() =>
                isInWishlist
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              }
            >
              {isInWishlist ? "❤️ Remove" : "🤍 Add to Wishlist"}
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h3 className="brand-name">RARE RABBIT</h3>
          <h2 className="product-title">{product.name}</h2>

          <div className="price-box">
            <span className="current-price">₹{product.price}</span>
            <span className="old-price">₹{product.price + 1000}</span>
            <span className="discount">57% off</span>
          </div>

          <div className="rating">
            ⭐ {product.rating} | {product.reviews} reviews
          </div>

          <div className="size-options">
            <span>Size:</span>
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="offers">
            <h4>Available Offers</h4>
            <ul>
              <li>💳 Bank Offer: 10% Off on UPI payments</li>
              <li>💳 Bank Offer: 5% Cashback on SBI Credit Cards</li>
              <li>💳 Bank Offer: 5% Cashback on Axis Bank Debit Cards</li>
              <li>🏷️ Special Price: Get extra 50% off</li>
            </ul>
          </div>

          {/* Suggestions Section */}
          <div className="suggestions-section">
            <h2>You May Also Like</h2>
            <div className="suggestions">
              {suggestedProducts.map((s) => (
                <div
                  key={s.id}
                  className="suggestion-item"
                  onClick={() => navigate(`/product/${s.id}`)}
                >
                  <img src={s.img} alt={s.name} />
                  <p>{s.name}</p>
                  <span>₹{s.price}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
