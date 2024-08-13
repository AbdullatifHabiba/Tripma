"use client";
import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import Image from "next/image";
import depart from "../../public/departure.png";
import arrival from "../../public/arrival.png";
import Dropdown from "./Dropdown";
import Calendar from "./Calendar";
import PassengerSelector from "./PassengerSelector";
import Link from "next/link";

const FlightSearch = ({ width, searchParams }) => {
  const [airports, setAirports] = useState([]);
  const [from, setFrom] = useState(searchParams?.from || "");
  const [to, setTo] = useState(searchParams?.to || "");
  const [startDate, setStartDate] = useState(
    searchParams?.startDate ? new Date(searchParams.startDate) : null
  );
  const [endDate, setEndDate] = useState(
    searchParams?.endDate ? new Date(searchParams.endDate) : null
  );
  const [passengers, setPassengers] = useState({
    adults: searchParams?.adults || 1,
    minors: searchParams?.minors || 0,
  });

  useEffect(() => {
    const fetchAirports = async () => {
      const response = await fetch("/api/flights/airports");
      const data = await response.json();
      setAirports(data);
    };

    fetchAirports();
  }, []);
  const origins = [...new Set(airports.map((airport) => airport.origin))];
  const destinations = [...new Set(airports.map((airport) => airport.destination))];

  const handleSearch = () => {
    const formattedStartDate = startDate
      ? startDate.toISOString().split("T")[0]
      : "";
    const formattedEndDate = endDate ? endDate.toISOString().split("T")[0] : "";

    const queryParams = {
      from,
      to,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      adults: passengers.adults,
      minors: passengers.minors,
    };

    // Perform search or navigate to search page with query parameters
    console.log("Search with query parameters:", queryParams);
  };

  const clearSearchParams = () => {
    setFrom("");
    setTo("");
    setStartDate(null);
    setEndDate(null);
    setPassengers({ adults: 1, minors: 0 });
    handleSearch();
  };

  useEffect(() => {
    handleSearch();
  }, [from, to, startDate, endDate, passengers]);

  return (
    <div className={styles.flightSearch} style={{ width }}>
      <div className={styles.textInput} style={{ width: width / 5 }}>
        <div className={styles.base}>
          <div className={styles.icon}>
            <Image src={depart} alt="departure" />
          </div>
          <Dropdown
            options={origins}
            label="From Where?"
            onSelect={setFrom}
            value={from}
          />
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.textInput} style={{ width: width / 5 }}>
        <div className={styles.base}>
          <div className={styles.icon}>
            <Image src={arrival} alt="arrival" />
          </div>
          <Dropdown
            options={destinations}
            label="To Where?"
            onSelect={setTo}
            value={to}
          />
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.textInput} style={{ width: width / 5 }}>
        <Calendar
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          dfStartDate={startDate}
          dfEndDate={endDate}
        />
      </div>

      <div className={styles.divider}></div>

      <div className={styles.textInput} style={{ width: width / 5 }}>
        <PassengerSelector
          onChange={setPassengers}
          dfAdults={passengers.adults}
          dfMinors={passengers.minors}
        />
      </div>

      <div className={styles.button}>
        <div className={styles.label}>
          <Link
            href={{
              pathname: "/ui/flights/search",
              query: {
                from,
                to,
                startDate: startDate
                  ? startDate.toISOString().split("T")[0]
                  : "",
                endDate: endDate ? endDate.toISOString().split("T")[0] : "",
                adults: passengers.adults,
                minors: passengers.minors,
              },
            }}
          >
            <button onClick={handleSearch}>Search</button>
          </Link>
        </div>
      </div>

      
    </div>
  );
};

export default FlightSearch;