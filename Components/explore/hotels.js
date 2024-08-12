// ShopHotels.jsx
import React from "react";
import styles from "./explore.module.css";

export default function ShopHotels({ hotels }) {
  return (
    <div className={styles.container}>
 
      <div className={styles.cardsContainer}>
        {hotels.map((hotel, index) => (
          <div key={index} className={styles.card}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${hotel.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{hotel.name}</h3>
              <p className={styles.cardDescription}>{hotel.description}</p>
              <p className={styles.cardPrice}>{hotel.price}$</p>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.button}>Shop all hotels</button>
    </div>
  );
}
