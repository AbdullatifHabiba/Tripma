"use client";
import styles from "./Search.module.css";
import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ options, label, onSelect, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); // Call the callback function
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
        tabIndex={0}
      >
        <div>{selectedOption || label}</div>
      </div>
      {isOpen && (
        <div className={styles.dropdownList}>
          <div
            className={styles.dropdownItem}
            onClick={() => selectOption(null)}
          >
            Clear
          </div>
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