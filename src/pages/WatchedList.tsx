import React, { useState } from "react";
import styles from "../styles/WatchedList.module.css";

const WatchedList: React.FC = () => {
  const [watchedMovies, setWatchedMovies] = useState([
    "Titanic",
    "The Matrix",
    "The Godfather",
  ]);

  const removeMovie = (index: number) => {
    const updatedList = [...watchedMovies];
    updatedList.splice(index, 1);
    setWatchedMovies(updatedList);
  };

  return (
    <div className={styles.container}>
      <h1>Watched List</h1>
      <ul>
        {watchedMovies.map((movie, index) => (
          <li key={index}>
            {movie}
            <button
              onClick={() => removeMovie(index)}
              className={styles.removeButton}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchedList;
