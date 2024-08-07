'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: false, // Hide title
    },
    legend: {
      display: false, // Hide legend
    },
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false, // Hide vertical gridlines
      },
      border:{
        display: false,
      }
      }
    ,
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      min:250,
      max:1000,
      grid: {
        color: 'rgba(235, 235, 235, 0.5)', // Light grey gridlines
      },
      ticks: {
        stepSize: 250,
        callback: (value) => `$${value}`,
        font: {
          size: 12,
          color: '#888',
        },
      },
      grid: {
        color: '#f0f0f0',
      },
      border: {
        display: false,
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
    point: {
      radius: 0,
    },
  },
};

export default function PriceHistory({ data }) {
  // Define the gradient
  const gradientFill = (context) => {
    const chart = context.chart;
    const { ctx, chartArea } = chart;
    if (!chartArea) {
      // This case happens on initial chart load
      return null;
    }
    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    gradient.addColorStop(0, 'rgba(131, 125, 247, 0.6)');
    gradient.addColorStop(1, 'rgba(131, 125, 247, 0)');

    return gradient;
  };

  // Transform data into chart.js format
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: 'Price',
        data: data.map((item) => item.price),
        borderColor: '#837df7',
        backgroundColor: gradientFill,
        fill: true,
        tension: 0.4, // Adds smooth curves
        pointRadius: 0, // Hide points on the line
      },
    ],
  };

  return (
    <>
    <h3>Price history</h3>
    <div style={
      { height: '200px', width: '100%', padding: '10px', 
        backgroundColor: 'white', borderRadius: '10px',
        border: '1px solid #f0f0f0',}
      }>

  <Line options={options} data={chartData} />
  
    </div>
        </>
  );
}
