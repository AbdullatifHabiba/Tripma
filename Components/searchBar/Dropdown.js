"use client";
import styles from "./Search.module.css";
import React, { useState, useRef, useEffect } from "react";


const Dropdown = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef} onClick={toggleDropdown}>
      <div
        className={`${styles.dropdownHeader} ${isOpen ? styles.open : ''}`}
        onClick={toggleDropdown}
        tabIndex={0} // Makes the header focusable
      >
        <div>{selectedOption || label}</div>
      </div>
      {isOpen && (
        <div className={styles.dropdownList}>
          {options.map((option, index) => (
            <div
              key={index}
              className={styles.dropdownItem}
              onClick={() => selectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;