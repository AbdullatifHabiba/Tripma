'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import plan from '@/public/plan.svg';
import styles from './selectSeat.module.css';
import check from '@/public/correct_icon.svg';

const TrainSeats = ({ setSelectedSeat, FlightSeats, isDeparting }) => {
  const businessSeats = FlightSeats.filter(seat => seat.class === true);
  const economySeats = FlightSeats.filter(seat => seat.class === false);

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (seat) => {
    setSelectedSeat(seat);
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seat.id)
        ? prevSelectedSeats.filter((id) => id !== seat.id)
        : [seat.id]
    );
  };

  const renderSeat = (seat, isBusiness) => {
    const isSelected = selectedSeats.includes(seat.id);
    const seatStyle = isBusiness
      ? styles.seatBusiness
      : styles.seatEconomy;

    return (
      <div
        key={seat.id}
        onClick={() => toggleSeatSelection(seat)}
        className={`${styles.seat} ${seatStyle} ${isSelected ? styles.selected : ''}`}
        title={`Seat ${seat.row}-${seat.col}`}
      >
        {isSelected ? <Image src={check} alt='check' /> : ''}
      </div>
    );
  };

  const renderRow = (seats, isBusiness) => {
    const middleIndex = Math.floor(seats.length / 2);
    const rowSeats = [...seats];
    rowSeats.splice(middleIndex, 0, { id: `row-${seats[0].row}`, row: seats[0].row, col: 'rowNumber' });

    return (
      <div className={isBusiness ? styles.businessRow : styles.economyRow}>
        {rowSeats.map((seat) =>
          seat.col === 'rowNumber' ? (
            <div key={seat.id} className={styles.rowNumber}>
              {seat.row}
            </div>
          ) : (
            renderSeat(seat, isBusiness)
          )
        )}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Image src={plan} alt="Train" className={styles.train} />
      <div className={styles.business}>
        {Array.from({ length: (businessSeats.length / 4) }, (_, i) => i + 1).map(row => (
          <React.Fragment key={row}>
            {renderRow(businessSeats.filter(seat => seat.row === row), true)}
          </React.Fragment>
        ))}
      </div>
      <div className={styles.economy}>
        {Array.from({ length: (economySeats.length / 6) }, (_, i) => i + 6).map((row, index) => (
          <React.Fragment key={row}>
            {(row === 6 || row === 14 || row === 19 || row === 29) && (
              <div className={styles.exitRow}>ℹ️Exit Row</div>
            )}
            {renderRow(economySeats.filter(seat => seat.row === row), false)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TrainSeats;
