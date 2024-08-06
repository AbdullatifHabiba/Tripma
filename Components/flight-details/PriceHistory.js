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
      display: true,
      text: 'Price History',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
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
      },
    ],
  };

  return <Line options={options} data={chartData} />;
}
