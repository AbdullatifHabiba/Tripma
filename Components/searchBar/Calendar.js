"use client";
import Image from "next/image";
import calendarIcon from "../../public/calendar.png";
import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import styles from "./Search.module.css";

const Calendar = ({ setStartDate, setEndDate, dfStartDate, dfEndDate }) => {
  const [dateRange, setDateRange] = useState([dfStartDate, dfEndDate]);
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
    setStartDate(update[0]);
    setEndDate(update[1]);
  };

  const handleClear = () => {
    setDateRange([null, null]);
    setStartDate(null);
    setEndDate(null);
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
          {startDate && (isRoundTrip ? endDate : true)
            ? `${startDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })} ${
                isRoundTrip
                  ? `- ${endDate.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}`
                  : ""
              }`
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
            <div
              className={`${styles.dateInput} ${isOpen ? styles.active : ""}`}
              onClick={handleDateClick}
            >
              <Image
                src={calendarIcon}
                alt="Calendar"
                className={styles.calendarIcon}
              />
              <span className={styles.dateText}>
                {startDate && (isRoundTrip ? endDate : true)
                  ? `${startDate.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })} ${
                      isRoundTrip
                        ? `- ${endDate.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}`
                        : ""
                    }`
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
              monthsShown={isRoundTrip ? 2 : 1}
              inline
              calendarClassName={styles.sideBySideCalendar}
            />
          </div>
          <button className={styles.clearButton} onClick={handleClear}>
              Clear
            </button>
        </div>
      )}
    </div>
  );
};

export default Calendar;