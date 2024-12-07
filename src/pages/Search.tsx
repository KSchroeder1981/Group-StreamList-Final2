import React, { useState } from "react";
import { fetchMovies } from "../utils/fetchMovies";
import { useAppContext } from "../context/AppContext";
import styles from "../styles/Search.module.css";

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const { addToCart, addToFavorites } = useAppContext();

  const handleSearch = async () => {
    if (query.trim() === "") {
      alert("Please enter a search term.");
      return;
    }

    try {
      const results = await fetchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error("Error while searching:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search for Movies</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie name"
          className={styles.searchInput}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          Search
        </button>
      </div>
      <div className={styles.movieGrid}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className={styles.movieCard}>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className={styles.moviePoster}
                />
              ) : (
                <div className={styles.noImage}>No Image</div>
              )}
              <h3 className={styles.movieTitle}>{movie.title}</h3>
              <button
                onClick={() => addToCart(movie)}
                className={`${styles.actionButton}`}
              >
                Add to Cart
              </button>
              <button
                onClick={() => addToFavorites(movie)}
                className={`${styles.actionButton} ${styles.favoriteButton}`}
              >
                Add to Favorites
              </button>
            </div>
          ))
        ) : (
          <p>No movies found. Try searching for something else!</p>
        )}
      </div>
    </div>
  );
};

export default Search;
