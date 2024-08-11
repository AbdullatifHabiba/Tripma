import React from 'react';
import styles from './explore.module.css';

const FlightRouteMap = ({ src, dest }) => {
  // Predefined coordinates for airports (you may want to expand this)
  const airportCoordinates = {
    SFO: { x: 40, y: 37 },
    NRT: { x: 88, y: 35 },
    // Add more airports as needed
  };

  const srcCoord = airportCoordinates[src];
  const destCoord = airportCoordinates[dest];

  return (
    <div className={styles.mapWrapper}>
      <svg className={styles.map} viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
        {/* World map path - simplified for this example */}
        <path
          d="M0 0 L100 0 L100 50 L0 50 Z"
          fill="#E8E9FD"
        />
        
        {/* Flight route */}
        {srcCoord && destCoord && (
          <g>
            <line
              x1={srcCoord.x}
              y1={srcCoord.y}
              x2={destCoord.x}
              y2={destCoord.y}
              stroke="#605DEC"
              strokeWidth="0.5"
              strokeDasharray="1,1"
            />
            <circle cx={srcCoord.x} cy={srcCoord.y} r="0.5" fill="#605DEC" />
            <circle cx={destCoord.x} cy={destCoord.y} r="0.5" fill="#605DEC" />
            <text x={srcCoord.x} y={srcCoord.y + 2} fontSize="2" fill="#605DEC">{src}</text>
            <text x={destCoord.x} y={destCoord.y + 2} fontSize="2" fill="#605DEC">{dest}</text>
            <path
              d={`M${(srcCoord.x + destCoord.x) / 2} ${(srcCoord.y + destCoord.y) / 2} l1 0.5 l-1 0.5 z`}
              fill="#605DEC"
              transform={`rotate(${Math.atan2(destCoord.y - srcCoord.y, destCoord.x - srcCoord.x) * 180 / Math.PI}, ${(srcCoord.x + destCoord.x) / 2}, ${(srcCoord.y + destCoord.y) / 2})`}
            />
          </g>
        )}
      </svg>
    </div>
  );
};

export default FlightRouteMap;