'use client';
import React, { useState } from "react";
import styles from "./FlightDetails.module.css";

const PriceGrid = ({ data }) => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredCol, setHoveredCol] = useState(null);

  const handleMouseEnter = (rowIndex, colIndex) => {
    setHoveredRow(rowIndex);
    setHoveredCol(colIndex);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
    setHoveredCol(null);
  };

  return (
    <div className={styles.priceGrid}>
      <h3>Price grid (flexible dates)</h3>
      <table className={styles.gridTable}>
        <thead>
          <tr>
            <th></th>
            {data.columns.map((column, index) => (
              <th
                key={index}
                className={
                  hoveredCol === index ? styles.highlight : ""
                }
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td
                className={
                  hoveredRow === rowIndex ? styles.highlight : ""
                }
              >
                {row.date}
              </td>
              {row.prices.map((price, priceIndex) => (
                <td
                  key={priceIndex}
                  className={`${price.isBest ? styles.bestPrice : ""} ${
                    hoveredRow !== null && hoveredCol !== null &&
                    (hoveredRow === rowIndex && priceIndex <= hoveredCol) ||
                    (hoveredCol === priceIndex && rowIndex <= hoveredRow)
                      ? styles.highlight
                      : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(rowIndex, priceIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  {price.value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceGrid;
