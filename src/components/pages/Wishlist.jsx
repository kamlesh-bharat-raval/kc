import React, { useContext } from "react";
import "./Wishlist.css";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";

function Wishlist() {
  const { addToCart } = useContext(CartContext);
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  const moveToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  return (
    <div className="wishlist-page">
      <h1 className="wishlist-title">My Wishlist ❤️</h1>

      <div className="wishlist-grid">
        {wishlist.length === 0 ? (
          <p className="empty-msg">Your wishlist is empty.</p>
        ) : (
          wishlist.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img src={item.img || item.image} alt={item.name} />
              <div className="wishlist-info">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <button className="add-btn" onClick={() => moveToCart(item)}>
                  Move to Cart
                </button>
                <button
                  className="remove-btn"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Wishlist;
