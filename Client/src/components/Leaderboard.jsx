import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const Leaderboard = () => {
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartData && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      chartRef.current.chart = new Chart(ctx, chartData);
    }
  }, [chartData]);

  // Sample leaderboard data
  const leaderboardData = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 90 },
    { name: 'David', score: 80 },
    { name: 'Eve', score: 95 },
  ];

  // Extracting names and scores from leaderboard data
  const names = leaderboardData.map((entry) => entry.name);
  const scores = leaderboardData.map((entry) => entry.score);

  // Chart.js data object
  const data = {
    type: 'bar',
    data: {
      labels: names,
      datasets: [
        {
          label: 'Scores',
          data: scores,
          backgroundColor: 'rgba(255, 0, 0, 0.5)', // Red color for bars
          borderColor: 'rgba(255, 0, 0, 1)', // Red color for border
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: 'y', // Horizontal bar chart
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  useEffect(() => {
    setChartData(data);
  }, []);

  return (
    <div style={{ maxWidth: '400px' }}> {/* Limiting width for a smaller chart */}
      <h2>Leaderboard</h2>
      <canvas ref={chartRef} />
    </div>
  );
};

export default Leaderboard;
