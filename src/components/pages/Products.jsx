import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import "./Products.css";

// ✅ AOS Import
import AOS from "aos";
import "aos/dist/aos.css";

// 🖼️ Images
import p1 from "../images/p11.jpg";
import p3 from "../images/watch1.jpg";
import p4 from "../images/p14.jpg";
import p5 from "../images/hoodie.jpg";
import p6 from "../images/sneaker.jpg";
import p7 from "../images/smartwatch.jpg";
import p8 from "../images/backpage.jpg";
import p9 from "../images/kids1.jpg";
import p10 from "../images/kids6.jpg";
import p11 from "../images/k-shoes.jpg";
import p12 from "../images/kshirt.jpg";
import p13 from "../images/man1.jpg";
import p14 from "../images/man2.jpg";
import p15 from "../images/man3.jpg";
import p16 from "../images/man 4.jpg";
import p17 from "../images/man5.jpg";
import p18 from "../images/man6.jpg";
import p19 from "../images/man7.jpg";
import p20 from "../images/woman1.jpg";
import p21 from "../images/woman2.jpg";
import p22 from "../images/woman3.jpg";
import p23 from "../images/woman4.jpg";
import p24 from "../images/kids7.jpg";
import p25 from "../images/kids8.jpg";
import p26 from "../images/kids9.jpg";
import p27 from "../images/acce1.jpg";
import p28 from "../images/acce2.jpg";
import p29 from "../images/acce3.jpg";
import p30 from "../images/acce4.jpg";

// ✅ Product List
export const allProducts = [
  { id: 1, name: "Beige Puffer Winter Jacket", price: 1499, img: p1, category: "men", rating: 4.5, reviews: 120 },
  { id: 5, name: "Cream Essential Pullover Hoodie", price: 1299, img: p5, category: "men", rating: 4.7, reviews: 140 },
  { id: 6, name: "Grey Stride Running Sneakers", price: 2499, img: p6, category: "men", rating: 4.3, reviews: 110 },
  { id: 13, name: "Black Jacquard Cuban Collar Shirt", price: 1299, img: p13, category: "men", rating: 4.2, reviews: 100 },
  { id: 14, name: "Brown Plaid Casual Shirt", price: 1099, img: p14, category: "men", rating: 3.9, reviews: 143 },
  { id: 15, name: "Golden Embroidered Georgette Sherwani", price: 12999, img: p15, category: "men", rating: 4.3, reviews: 173 },
  { id: 16, name: "Black Designer Jodhpuri Suit", price: 59999, img: p16, category: "men", rating: 4.3, reviews: 1373 },
  { id: 17, name: "Emerald Green Resham Kurta Set ", price: 8999, img: p17, category: "men", rating: 3.3, reviews: 373 },
  { id: 18, name: "Sage Green Slim Fit 3-Piece Suit", price: 32999, img: p18, category: "men", rating: 4.3, reviews: 1273 },
  { id: 19, name: "Grey Handmade Jodhpuri Bandhgala Suit ", price: 14999, img: p19, category: "men", rating: 4.3, reviews: 1043 },
  { id: 4, name: "Crystal Clear Handbag", price: 999, img: p4, category: "women", rating: 4.0, reviews: 85 },
  { id: 8, name: "Classic Tan Leather Backpack", price: 1799, img: p8, category: "women", rating: 4.6, reviews: 95 },
  { id: 9, name: "Blush Pink Cotton Top", price: 799, img: p9, category: "women", rating: 4.4, reviews: 65 },
  { id: 20, name: "Brown Faux Leather Moto Jacket", price: 899, img: p20, category: "women", rating: 4.2, reviews: 45 },
  { id: 21, name: "Mint Green Co-ord Set", price: 1099, img: p21, category: "women", rating: 4.2, reviews: 105 },
  { id: 22, name: "Rainbow Flare Navratri Chaniya Choli", price: 7999, img: p22, category: "women", rating: 4.3, reviews: 3405 },
  { id: 23, name: "Royal Rajasthani Poshak", price: 14999, img: p23, category: "women", rating: 4.3, reviews: 5405 },
  { id: 24, name: "Embellished Punjabi Patiala Suit", price: 9999, img: p24, category: "women", rating: 4.3, reviews: 525 },
  { id: 10, name: "Kids T-Shirt", price: 599, img: p10, category: "kids", rating: 4.2, reviews: 40 },
  { id: 11, name: "Kids Shoes", price: 999, img: p11, category: "kids", rating: 4.5, reviews: 55 },
  { id: 12, name: "Formal Shirt", price: 499, img: p12, category: "kids", rating: 4.1, reviews: 75 },
  { id: 25, name: "Formal Shirt", price: 499, img: p25, category: "kids", rating: 4.1, reviews: 75 },
  { id: 26, name: "Formal Shirt", price: 499, img: p26, category: "kids", rating: 4.1, reviews: 75 },
  { id: 3, name: "Modern Watch", price: 3499, img: p3, category: "accessories", rating: 4.6, reviews: 150 },
  { id: 7, name: "Smart Watch", price: 3999, img: p7, category: "accessories", rating: 4.4, reviews: 135 },
  { id: 27, name: "Butterfly Kangan Bracelet", price: 899, img: p27, category: "accessories", rating: 3.4, reviews: 15 },
  { id: 28, name: "Adjustable Leaf Ring", price: 199, img: p28, category: "accessories", rating: 4.4, reviews: 43 },
  { id: 29, name: "Casual Baseball Cap", price: 299, img: p29, category: "accessories", rating: 4.2, reviews: 133 },
  { id: 30, name: "Wayfarer Style Sunglasses", price: 499, img: p30, category: "accessories", rating: 4.2, reviews: 345 },
];

function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const { addToCart } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  // ✅ Initialize AOS (fade-up only)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  const filteredProducts = category
    ? allProducts.filter((p) => p.category === category)
    : allProducts;

  return (
    <div className="products-page" data-aos="fade-up">
      <h1 className="products-title" data-aos="fade-up">
        {category ? `${category.toUpperCase()} Collection` : "All Products"}
      </h1>

      <div className="products-grid">
        {filteredProducts.map((product, index) => {
          const isInWishlist = wishlist.some((item) => item.id === product.id);
          return (
            <div
              key={product.id}
              className="product-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={product.img}
                alt={product.name}
                onClick={() => navigate(`/product/${product.id}`)}
                style={{ cursor: "pointer" }}
              />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <p className="rating">⭐ {product.rating} ({product.reviews} reviews)</p>
                    
                 
              <button className="add-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>

             
                <div className="btn-group">
               <button className={`wishlist-btn ${isInWishlist ? "active" : ""}`}
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
          );
        })}
      </div>
    </div>
  );
}

export default Products;
