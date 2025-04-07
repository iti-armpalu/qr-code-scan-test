// page.js
"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Survey from "./components/survey";
import Connect from "./components/connect";

export default function HomePage() {
  const [flipped, setFlipped] = useState(false);

  const articles = [
    {
      title: "The Rationale Behind the Empathy Gradient",
      url: "https://www.linkedin.com/pulse/rationale-behind-empathy-gradient-roy-armale-zse8e",
      isFeatured: true,
    },
    {
      title: "The Rationale Behind the Empathy Gradient",
      url: "https://www.linkedin.com/pulse/rationale-behind-empathy-gradient-roy-armale-zse8e",
      isFeatured: true,
    },
    {
      title: "The Rationale Behind the Empathy Gradient",
      url: "https://www.linkedin.com/pulse/rationale-behind-empathy-gradient-roy-armale-zse8e",
      isFeatured: true,
    },
    {
      title: "The Rationale Behind the Empathy Gradient",
      url: "https://www.linkedin.com/pulse/rationale-behind-empathy-gradient-roy-armale-zse8e",
      isFeatured: true,
    },
    {
      title: "The Rationale Behind the Empathy Gradient",
      url: "https://www.linkedin.com/pulse/rationale-behind-empathy-gradient-roy-armale-zse8e",
      isFeatured: true,
    },
    {
      title: "The Rationale Behind the Empathy Gradient",
      url: "https://www.linkedin.com/pulse/rationale-behind-empathy-gradient-roy-armale-zse8e",
      isFeatured: true,
    },
    {
      title: "The Rationale Behind the Empathy Gradient",
      url: "https://www.linkedin.com/pulse/rationale-behind-empathy-gradient-roy-armale-zse8e",
      isFeatured: true,
    },
    {
      title: "The Rationale Behind the Empathy Gradient",
      url: "https://www.linkedin.com/pulse/rationale-behind-empathy-gradient-roy-armale-zse8e",
      isFeatured: true,
    },
    {
      title: "The Rationale Behind the Empathy Gradient",
      url: "https://www.linkedin.com/pulse/rationale-behind-empathy-gradient-roy-armale-zse8e",
      isFeatured: true,
    },
    {
      title: "Why AI Will Probably Make You Less Productive",
      url: "https://www.linkedin.com/pulse/why-ai-probably-make-you-less-productive-first-roy-armale-zdmbe",
      isFeatured: false,
    },
    // More articles as needed
  ];

  const videos = [
    {
      title: "CMO Summit: AI and The Future of Creativity",
      url: "https://www.youtube.com/watch?v=ZJTX6GgUPcw",
      isFeatured: false,
    },
    {
      title: "CMO Summit: AI and The Future of Creativity",
      url: "https://www.youtube.com/watch?v=ZJTX6GgUPcw",
      isFeatured: false,
    },
    {
      title: "CMO Summit: AI and The Future of Creativity",
      url: "https://www.youtube.com/watch?v=ZJTX6GgUPcw",
      isFeatured: false,
    },   {
      title: "CMO Summit: AI and The Future of Creativity",
      url: "https://www.youtube.com/watch?v=ZJTX6GgUPcw",
      isFeatured: false,
    },
    {
      title: "CMO Summit: AI and The Future of Creativity",
      url: "https://www.youtube.com/watch?v=ZJTX6GgUPcw",
      isFeatured: false,
    },
    {
      title: "CMO Summit: AI and The Future of Creativity",
      url: "https://www.youtube.com/watch?v=ZJTX6GgUPcw",
      isFeatured: false,
    },   {
      title: "CMO Summit: AI and The Future of Creativity",
      url: "https://www.youtube.com/watch?v=ZJTX6GgUPcw",
      isFeatured: false,
    }
  
    // More videos as needed
  ];

  return (
    <main className={styles.container}>
      <div className={`${styles.cardWrapper} ${flipped ? styles.flipped : ""}`}>
        <div className={styles.cardContainer}>
          {/* FRONT SIDE */}
          <div className={`${styles.cardFace} ${styles.cardFront}`}>
            <div className={styles.scrollContainer}>
              {/* Front card content */}
              <h1>Card Front</h1>
              <div className={styles.profileSection}>
                {/* Profile content */}
              </div>
              
              <div className={styles.articles}>
                <h2>Featured Articles</h2>
                {articles.filter(a => a.isFeatured).map((article, idx) => (
                  <div key={idx} className={styles.articleItem}>
                    <span>{article.title}</span>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className={styles.readButton}>Read</button>
                    </a>
                  </div>
                ))}
              </div>
              
              <button 
                className={styles.flipButton}
                onClick={() => setFlipped(true)}
              >
                See more content
              </button>
            </div>
          </div>
          
          {/* BACK SIDE */}
          <div className={`${styles.cardFace} ${styles.cardBack}`}>
            <div className={styles.scrollContainer}>
              {/* Back card content */}
              <button 
                className={styles.flipButton}
                onClick={() => setFlipped(false)}
              >
                Back to profile
              </button>
              
              <div className={styles.articles}>
                <h2>More Articles</h2>
                {articles.map((article, idx) => (
                  <div key={idx} className={styles.articleItem}>
                    <span>{article.title}</span>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className={styles.readButton}>Read</button>
                    </a>
                  </div>
                ))}
              </div>
              
              <div className={styles.articles}>
                <h2>Videos</h2>
                {videos.map((video, idx) => (
                  <div key={idx} className={styles.articleItem}>
                    <span>{video.title}</span>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className={styles.readButton}>Watch</button>
                    </a>
                  </div>
                ))}
              </div>
              
              <Survey />
              <Connect />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}