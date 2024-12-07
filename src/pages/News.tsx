import React from "react";
import styles from "../styles/News.module.css";

const News: React.FC = () => {
  const newsArticles = [
    { id: 1, title: "StreamList Hits 1 Million Users!", date: "Nov 24, 2024" },
    {
      id: 2,
      title: "Top 10 Movies to Watch This Holiday Season",
      date: "Nov 22, 2024",
    },
    {
      id: 3,
      title: "StreamList Partners with Major Studios",
      date: "Nov 18, 2024",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Latest News</h1>
      <div className={styles.feed}>
        {newsArticles.map((article) => (
          <div key={article.id} className={styles.article}>
            <h2>{article.title}</h2>
            <p>{article.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
