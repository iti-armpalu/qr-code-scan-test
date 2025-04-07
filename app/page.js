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
        <div className={`${styles.cardFace} ${styles.cardFront}`}>
          <div className={styles.scrollContainer}>
            <h1>Front Side</h1>
            {[...Array(50)].map((_, i) => (
              <p key={i}>Front Line {i + 1}</p>
            ))}
            <button onClick={() => setFlipped(true)}>Flip to Back</button>
          </div>
        </div>

        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          <div className={styles.scrollContainer}>
            <h1>Back Side</h1>
            {[...Array(50)].map((_, i) => (
              <p key={i}>Back Line {i + 1}</p>
            ))}
            <button onClick={() => setFlipped(false)}>Flip to Front</button>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}