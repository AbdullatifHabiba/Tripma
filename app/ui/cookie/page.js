'use client';
import React, { useState } from 'react';
import styles from './cookies.module.css';

const CookiesCard = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  return (
    <>
    {!accepted && 
    <div className={accepted ? styles.hiddencookies : styles.cookiesCard}>
      <div className={styles.cookiesCardContent}>
      <div className={styles.buttons}>

        <div className={styles.cookiesCardText}>
          By using our site, you agree to eat our cookies.
        </div>
        <button className={styles.cancel} onClick={handleAccept} >X</button>
         </div>
        <div className={styles.buttons}>
          <button className={styles.accept} onClick={handleAccept}>
            Accept Cookies
          </button>
          <button className={styles.buttonc}>Go to settings</button>
        </div>
      </div>
    </div>
  }
    </>
  );
};

export default CookiesCard;''