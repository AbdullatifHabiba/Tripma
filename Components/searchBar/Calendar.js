"use client";
import styles from "./Search.module.css";
import Image from "next/image";
import calendarIcon from "../../public/calendar.png";
import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";

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
          {startDate && (isRoundTrip ? endDate : true)
            ? `${startDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })} ${isRoundTrip ? `- ${endDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}` : ''}`
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
  
                   {startDate && (isRoundTrip ? endDate : true)
            ? `${startDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })} ${isRoundTrip ? `- ${endDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}` : ''}`
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
          </div>
        )}
      </div>
    );
  };
  export default Calendar;