import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">We would love to hear from you! 😊</p>

      <div className="contact-container">
        {/* Left Side Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: support@ecommerce.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Address: 123, Fashion Street, Mumbai, India</p>
        </div>

        {/* Right Side Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
