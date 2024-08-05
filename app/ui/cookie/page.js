'use client';
import React, { useState } from 'react';
import styles from './cookies.module.css';

const CookiesCard = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  return (
    <div className={accepted ? styles.hiddencookies : styles.cookiesCard}>
      <div className={styles.cookiesCardContent}>
        <p className={styles.cookiesCardText}>
          By using our site, you agree to eat our cookies.
        </p>
        <div className={styles.buttons}>
          <button className={styles.accept} onClick={handleAccept}>
            Accept Cookies
          </button>
          <button>Go to settings</button>
        </div>
      </div>
    </div>
  );
};

export default CookiesCard;''