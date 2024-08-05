import React from 'react';
import styles from './cookies.module.css';

const CookiesCard = () => {
  return (
    <div className={styles.cookiesCard}>
      <div className={styles.cookiesCardContent}>
        <p className={styles.cookiesCardText}>
        By using our site, you agree to eat our cookies.        </p>
        <div className={styles.buttons}>
        <button className={styles.accept}>Accept Cookies</button>
        <button >Go to settings</button>
        </div>
      </div>
    </div>
  );
};

export default CookiesCard;