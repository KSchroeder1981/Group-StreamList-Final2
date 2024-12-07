import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input
    if (!cardNumber || !expiryDate || !cvv) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
      alert("Card number must be 16 digits.");
      return;
    }

    if (!/^\d{3}$/.test(cvv)) {
      alert("CVV must be 3 digits.");
      return;
    }

    alert("Payment Successful! Thank you for your purchase.");
    navigate("/"); // Redirect to home or another page after successful payment
  };

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "24px",
          color: "#007BFF",
        }}
      >
        Checkout
      </h1>
      <form
        onSubmit={handlePayment}
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label
            style={{ fontFamily: "Open Sans, sans-serif", fontSize: "16px" }}
          >
            Card Number
          </label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            style={{
              width: "100%",
              padding: "0.5rem",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "0.5rem",
            }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label
            style={{ fontFamily: "Open Sans, sans-serif", fontSize: "16px" }}
          >
            Expiry Date
          </label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            style={{
              width: "100%",
              padding: "0.5rem",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "0.5rem",
            }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label
            style={{ fontFamily: "Open Sans, sans-serif", fontSize: "16px" }}
          >
            CVV
          </label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            style={{
              width: "100%",
              padding: "0.5rem",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "0.5rem",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "0.5rem 1rem",
            fontSize: "16px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;
