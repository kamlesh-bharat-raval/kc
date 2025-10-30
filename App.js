import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import ProductDetails from "./components/pages/ProductDetails";
import Cart from "./components/pages/Cart";
import Wishlist from "./components/pages/Wishlist";
import Contact from "./components/pages/Contact";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import CategoryPage from "./components/pages/CategoryPage";

function Shop() {
  return <h1>Shop Page</h1>;
}
function Collection() {
  return <h1>Collection Page</h1>;
}
function Pages() {
  return <h1>Pages</h1>;
}
function Blog() {
  return <h1>Blog Page</h1>;
}

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Navbar />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Products List */}
          <Route path="/products" element={<Products />} />

          {/* Product Details (fix: /product not /products) */}
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* ✅ Category Page FIX: Added :categoryName for dynamic routing */}
          <Route path="/category/:categoryName" element={<CategoryPage />} />

          {/* Other Pages */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;