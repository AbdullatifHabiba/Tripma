"use client";
import styles from "./Search.module.css";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import userIcon from "../../public/user.png";


const PassengerSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [adults, setAdults] = useState(1);
    const [minors, setMinors] = useState(0);
    const passengerRef = useRef(null);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const incrementAdults = () => setAdults(adults + 1);
    const decrementAdults = () => adults > 1 && setAdults(adults - 1);
  
    const incrementMinors = () => setMinors(minors + 1);
    const decrementMinors = () => minors > 0 && setMinors(minors - 1);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (passengerRef.current && !passengerRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    return (
      <div className={styles.passengerSelector} ref={passengerRef}>
        <div className={styles.dropdownHeader} onClick={toggleDropdown}>
          <Image src={userIcon} alt="User Icon" className={styles.userIcon} />
          <span>{`${adults} Adult${adults > 1 ? 's' : ''}`}</span>
          {minors > 0 && <span>{`, ${minors} Minor${minors > 1 ? 's' : ''}`}</span>}
        </div>
  
        {isOpen && (
          <div className={styles.dropdownContent}>
            <div className={styles.counter}>
              <div className={styles.counterRow}>
                <span>Adults:</span>
                <button onClick={decrementAdults} className={styles.counterButton}>-</button>
                <span>{adults}</span>
                <button onClick={incrementAdults} className={styles.counterButton}>+</button>
              </div>
              <div className={styles.counterRow}>
                <span>Minors:</span>
                <button onClick={decrementMinors} className={styles.counterButton}>-</button>
                <span>{minors}</span>
                <button onClick={incrementMinors} className={styles.counterButton}>+</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  export default PassengerSelector;