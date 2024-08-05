'use client';
import { useState } from 'react';
import styles from './Styles.module.css';
import Image from 'next/image';
import x from '../public/x close no.png';

export default function Banar() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.banar}>
      <div className={styles.banarContent}>
        Join Tripma today and save up to 20% on your flight using code TRAVEL at checkout. Promotion valid for new users only.
        <button className={styles.banarButton} onClick={handleClose}>
            <Image src={x} alt="x" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}