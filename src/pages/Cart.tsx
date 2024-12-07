import React from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const { cart } = useAppContext();
  const navigate = useNavigate();

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
        Your Cart
      </h1>
      {cart.length > 0 ? (
        <>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {cart.map((movie) => (
              <div
                key={movie.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "1rem",
                  backgroundColor: "white",
                  textAlign: "center",
                  width: "200px",
                }}
              >
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    style={{ borderRadius: "8px", marginBottom: "0.5rem" }}
                  />
                )}
                <h3
                  style={{
                    fontSize: "16px",
                    fontFamily: "Poppins, sans-serif",
                    color: "#333",
                  }}
                >
                  {movie.title}
                </h3>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate("/checkout")}
            style={{
              marginTop: "1rem",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "0.5rem 1rem",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Proceed to Checkout
          </button>
        </>
      ) : (
        <p style={{ fontFamily: "Open Sans, sans-serif", color: "#333" }}>
          Your cart is empty. Add some movies from the Search page!
        </p>
      )}
    </div>
  );
};

export default Cart;
