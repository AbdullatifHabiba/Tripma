"use client";
import styles from "./Search.module.css";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import userIcon from "../../public/user.png";

const PassengerSelector = ({ onChange, dfAdults, dfMinors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(Number(dfAdults));
  const [minors, setMinors] = useState(Number(dfMinors));
  const passengerRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const updatePassengers = (newAdults, newMinors) => {
    setAdults(newAdults);
    setMinors(newMinors);
    onChange({ adults: newAdults, minors: newMinors });
  };

  const incrementAdults = () => updatePassengers(adults + 1, minors);
  const decrementAdults = () => {
    if (adults > 1) {
      updatePassengers(adults - 1, minors);
    }
  };

  const incrementMinors = () => updatePassengers(adults, minors + 1);
  const decrementMinors = () => {
    if (minors > 0) {
      updatePassengers(adults, minors - 1);
    }
  };

  const handleClear = () => {
    updatePassengers(1, 0); // Reset to 1 adult and 0 minors
  };

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
          <button className={styles.clearButton} onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default PassengerSelector;