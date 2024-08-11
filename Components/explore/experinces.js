// UniqueExperiences.jsx
import React from 'react';
import styles from './explore.module.css';

export default function UniqueExperiences({ experiences }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Find Unique Experiences</h2>
      <div className={styles.cardsContainer}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.card}>
         <div
              className={styles.image}
              style={{
                backgroundImage: `url(${experience.imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{experience.name}</h3>
              <p className={styles.cardDescription}>{experience.description}</p>
              <p className={styles.cardPrice}>{experience.price}</p>
            </div>
          </div>
        ))}
      </div>
        <button className={styles.button}>Explore all experiences</button>
    </div>
  );
}
