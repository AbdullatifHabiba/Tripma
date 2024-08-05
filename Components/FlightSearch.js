"use client";
import styles from "./Search.module.css";
import Image from "next/image";
import depart from "../public/departure.png";
import arrival from "../public/arrival.png";
import calendarIcon from "../public/calendar.png";
import userIcon from "../public/user.png";

import React, { useState, useRef, useEffect } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Dropdown = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div
        className={`${styles.dropdownHeader} ${isOpen ? styles.open : ""}`}
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

const Calendar = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDateClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (update) => {
    setDateRange(update);
  };

  const handleDone = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.calendar} ref={calendarRef}>
      <div className={styles.dateInput} onClick={handleDateClick}>
        <Image
          src={calendarIcon}
          alt="Calendar"
          className={styles.calendarIcon}
        />
        <span className={styles.dateText}>
          {startDate && endDate
            ? `${startDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })} - ${endDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}`
            : "Depart - Arrive"}
        </span>
      </div>

      {isOpen && (
        <div className={styles.calendarPopup}>
          <div className={styles.tripTypeSelector}>
            <label>
              <input
                type="radio"
                checked={isRoundTrip}
                onChange={() => setIsRoundTrip(true)}
              />
              Round trip
            </label>
            <label>
              <input
                type="radio"
                checked={!isRoundTrip}
                onChange={() => setIsRoundTrip(false)}
              />
              One way
            </label>
            <div className={styles.dateInput} onClick={handleDateClick}>
              <Image
                src={calendarIcon}
                alt="Calendar"
                className={styles.calendarIcon}
              />
              <span className={styles.dateText}>
                {startDate && endDate
                  ? `${startDate.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })} - ${endDate.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}`
                  : "Depart - Arrive"}
              </span>
            </div>
            <button className={styles.doneButton} onClick={handleDone}>
              Done
            </button>
          </div>
        <div className={styles.calenderPicker}>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={handleDateChange}
            monthsShown={2}
            inline
            calendarClassName={styles.sideBySideCalendar}
          />
          </div>
        </div>
      )}
    </div>
  );
};
const PassengerSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [minors, setMinors] = useState(0);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const incrementAdults = () => setAdults(adults + 1);
  const decrementAdults = () => adults > 1 && setAdults(adults - 1);

  const incrementMinors = () => setMinors(minors + 1);
  const decrementMinors = () => minors > 0 && setMinors(minors - 1);

  return (
    <div className={styles.passengerSelector}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        <Image src={userIcon} alt="User Icon" className={styles.userIcon} />
        <span>{`${adults} Adult${adults > 1 ? 's' : ''}`}</span>
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
const FlightSearch = () => {
  const options = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

  return (
    <div className={styles.flightSearch}>
      <div className={styles.textInput}>
        <div className={styles.base}>
          <div className={styles.icon}>
            <Image src={depart} alt="departure" />
          </div>
          <Dropdown options={options} label="From Where?" />
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.textInput}>
        <div className={styles.base}>
          <div className={styles.icon}>
            <Image src={arrival} alt="arrival" />
          </div>
          <Dropdown options={options} label="To Where?" />
        </div>
      </div>

      <div className={styles.divider}></div>

      <Calendar />

      <div className={styles.divider}></div>

      {/* <div className={styles.textInput}>
        <div className={styles.base}>
          <div className={styles.icon}>
            <Image src={user} alt="user" />
          </div>
          <div className={styles.label}>1 adult</div>
        </div>
      </div> */}
      <PassengerSelector/>
      <div className={styles.button}>
        <div className={styles.label}>Search</div>
      </div>
    </div>
  );
};

export default FlightSearch;
