import React from "react";
import { useAppContext } from "../context/AppContext";

const Favorites: React.FC = () => {
  const { favorites } = useAppContext();

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
        Your Favorites
      </h1>
      {favorites.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {favorites.map((movie) => (
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
      ) : (
        <p style={{ fontFamily: "Open Sans, sans-serif", color: "#333" }}>
          No favorite movies yet. Add some from the Search page!
        </p>
      )}
    </div>
  );
};

export default Favorites;
