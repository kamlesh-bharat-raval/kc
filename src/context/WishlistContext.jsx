import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item) => {
    const alreadyInWishlist = wishlist.some(
      (wishItem) => wishItem.id === item.id
    );

    if (!alreadyInWishlist) {
      setWishlist([...wishlist, item]);
    } else {
      alert(`${item.name} is already in your wishlist.`);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
