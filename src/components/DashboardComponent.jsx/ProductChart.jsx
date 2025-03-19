import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register necessary components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const [chartData, setChartData] = useState(null);
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Performance",
          data: [2, 3, 1, 4, 2, 3, 2], // Lower values keep it near the bottom
          borderColor: "#3b82f6", // Blue
          backgroundColor: "rgba(59, 130, 246, 0.2)", // Transparent fill
          tension: 0.1, // Minimum curve
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "#333", // Legend text color
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#666",
          },
          grid: {
            color: "#ddd",
          },
        },
        y: {
          ticks: {
            color: "#666",
            beginAtZero: true, // Ensures the line starts near the bottom
            stepSize: 1, // Keeps values low
          },
          grid: {
            color: "#ddd",
          },
          min: 0, // Keeps the chart at the bottom
          max: 5, // Limits the height of the line
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card" style={{ height: "400px" }}>
      {chartData && chartOptions ? (
        <Line data={chartData} options={chartOptions} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default LineChart;

