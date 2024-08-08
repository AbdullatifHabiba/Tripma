'use client';
import React, { useState } from 'react';
import SVGComponent from './svgcomp'; // Import your converted SVG component
import styles from './selectSeat.module.css';

const rectangleDimensions = [
  { id: 1, x: 1121, y: 506, width: 30, height: 40, isBusiness: true },
  { id: 2, x: 1159.5, y: 506, width: 30, height: 40, isBusiness: true },
  { id: 3, x: 1236.5, y: 506, width: 30, height: 40, isBusiness: false },
  { id: 4, x: 1275, y: 506, width: 30, height: 40, isBusiness: false },
  // Add more rectangles as needed
];

const TrainSeats = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (seatId) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter((id) => id !== seatId)
        : [...prevSelectedSeats, seatId]
    );
  };

  return (
    <div className={styles.container}>
      <SVGComponent />
      {rectangleDimensions.map((rect) => {
        const isSelected = selectedSeats.includes(rect.id);
        const seatStyle = rect.isBusiness
          ? { background: 'linear-gradient(180deg, #5CD6C0 0%, #22C3A6 100%)' }
          : { background: 'linear-gradient(180deg, #605DEC 0%, #2A26D9 100%)' };

        return (
          <div
            key={rect.id}
            onClick={() => toggleSeatSelection(rect.id)}
            className={`${styles.seat} ${isSelected ? styles.selected : ''}`}
            style={{
              ...seatStyle,
              width: `${rect.width}px`,
              height: `${rect.height}px`,
              left: `${rect.x}px`,
              top: `${rect.y}px`,
            }}
            title={`Seat ${rect.id}`}
          />
        );
      })}
    </div>
  );
};

export default TrainSeats;
