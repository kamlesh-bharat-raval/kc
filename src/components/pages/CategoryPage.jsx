import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allProducts } from "./Products";
import "./CategoryPage.css";

function CategoryPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const filteredProducts = allProducts.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="category-page">
      <button className="go-back-btn" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <h2>{categoryName} Products</h2>
      <div className="category-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div
              key={p.id}
              className="category-item"
      
              onClick={() => navigate(`/product/${p.id}`)}

            >
              <img src={p.img} alt={p.name} />
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;