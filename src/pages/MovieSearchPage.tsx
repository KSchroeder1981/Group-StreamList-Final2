import React, { useState } from "react";
import styles from "../styles/MovieSearchPage.module.css";

const TMDB_READ_ACCESS_TOKEN = process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN;

const MovieSearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovies = async () => {
    if (!searchTerm.trim()) {
      setError("Please enter a search term.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      console.log("Making API call...");
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          searchTerm
        )}`,
        {
          headers: {
            Authorization: `Bearer ${TMDB_READ_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();

      console.log("API Response:", data);

      if (data.results) {
        setMovies(data.results);
      } else {
        setError("No movies found. Try another search.");
      }
    } catch (err) {
      console.error("API Error:", err);
      setError("An error occurred while fetching movie data.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Search Movies</h1>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.input}
        />
        <button onClick={searchMovies} className={styles.button}>
          Search
        </button>
      </div>
      {isLoading && <p className={styles.placeholder}>Loading...</p>}
      {error && <p className={styles.placeholder}>{error}</p>}
      <div className={styles.grid}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.card}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/200"
              }
              alt={movie.title}
   
