import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    payment: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const handlePlaceOrder = () => {
    for (let key in formData) {
      if (!formData[key]) {
        alert("Please fill all fields and select payment method");
        return;
      }
    }

    const orderId = "ORD-" + Date.now() + "-" + Math.floor(Math.random() * 1000);

    const order = {
      orderId: orderId,
      userDetails: formData,
      items: cart,
      total: totalPrice,
      date: new Date().toLocaleString()
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    clearCart();
    setFormData({
      name: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      payment: ""
    });
    setShowCheckout(false);

    alert(`✅ Order Placed Successfully! \n🆔 Order ID: ${orderId}`);
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                {/* ✅ Clickable image and name */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="cart-img"
                  onClick={() => navigate(`/product/${item.id}`)}
                  style={{ cursor: "pointer" }}
                />
                <div
                  className="cart-info"
                  onClick={() => navigate(`/product/${item.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, (item.quantity || 1) - 1)
                    }
                    disabled={(item.quantity || 1) <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity || 1}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, (item.quantity || 1) + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total: ₹{totalPrice}</h2>
            <button
              className="checkout-btn"
              onClick={() => setShowCheckout(true)}
            >
              Proceed to Checkout
            </button>
          </div>

          {showCheckout && (
            <div className="checkout-section">
              <h2>Checkout</h2>
              <div className="checkout-container">
                <div className="billing-details">
                  <h3>Billing Details</h3>
                  <form>
                    <input name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleInputChange} required />
                    <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required />
                    <input name="phone" type="text" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required />
                    <input name="street" type="text" placeholder="Street Address" value={formData.street} onChange={handleInputChange} required />
                    <input name="city" type="text" placeholder="City" value={formData.city} onChange={handleInputChange} required />
                    <input name="state" type="text" placeholder="State" value={formData.state} onChange={handleInputChange} required />
                    <input name="zip" type="text" placeholder="Zip Code" value={formData.zip} onChange={handleInputChange} required />

                    <h4>Payment Method</h4>
                    <div className="payment-method">
                      <label>
                        <input type="radio" name="payment" value="COD" checked={formData.payment === "COD"} onChange={handleInputChange} /> Cash on Delivery
                      </label>
                      <label>
                        <input type="radio" name="payment" value="UPI" checked={formData.payment === "UPI"} onChange={handleInputChange} /> UPI / Net Banking
                      </label>
                      <label>
                        <input type="radio" name="payment" value="CARD" checked={formData.payment === "CARD"} onChange={handleInputChange} /> Debit / Credit Card
                      </label>
                    </div>
                  </form>
                </div>

                <div className="order-summary">
                  <h3>Order Summary</h3>
                  {cart.map((item) => (
                    <div key={item.id} className="order-item">
                      <p>{item.name} × {item.quantity || 1}</p>
                      <span>₹{item.price * (item.quantity || 1)}</span>
                    </div>
                  ))}
                  <hr />
                  <div className="order-total grand">
                    <p>Total</p>
                    <span>₹{totalPrice}</span>
                  </div>
                  <button className="place-order-btn" onClick={handlePlaceOrder}>
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
