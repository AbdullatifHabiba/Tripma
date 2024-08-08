import React from 'react';
import styles from './SeatClassSelector.module.css';

const SeatClassSelector = () => {
  return (
    <div className={styles.container}>
        {/* header options */}
        <div className={styles.header}>
          <h2>Seat Class</h2>
          </div>
        {/* classes */}
        <div className={styles.classes}>
            <div className={styles.class}>
                <h3>Business</h3>
                <p>Comfortable seats with more legroom</p>
            </div>
                <div className={styles.class}>
                <h3>Economy</h3>
                <p>Standard seats with less legroom</p>
                </div>
        </div>
        {/* footer */}
        <div className={styles.footerOptions}>
            <button className={styles.button}>Continue</button>
        </div>


     
    </div>
  );
};

export default SeatClassSelector;