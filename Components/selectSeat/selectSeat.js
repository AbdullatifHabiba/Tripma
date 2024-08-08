'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import plan from '@/public/plan.svg';
import styles from './selectSeat.module.css';
import { businessSeats, economySeats } from './seats_Data';
import check from '@/public/correct_icon.svg';



const TrainSeats = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (seatId) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter((id) => id !== seatId)
        : [...prevSelectedSeats, seatId]
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
        onClick={() => toggleSeatSelection(seat.id)}
        className={`${styles.seat} ${seatStyle} ${isSelected ? styles.selected : ''}`}
        title={`Seat ${seat.row}-${seat.col}`}
      >
        {isSelected? <Image src={check}  alt='check'/> :"" }
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
    <Image
      src={plan}
      alt="Train"
      className={styles.train}
    />
    <div className={styles.business}>
      {[1, 2, 3, 4, 5].map(row => (
          <React.Fragment key={row}>
            {renderRow(businessSeats.filter(seat => seat.row === row), true)}
          </React.Fragment>
      ))}
    </div>
    <div className={styles.economy}>
  {Array.from({ length: 28 }, (_, i) => i + 6).map((row, index) => (
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
