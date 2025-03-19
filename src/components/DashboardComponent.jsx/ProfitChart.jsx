import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2"; // Use react-chartjs-2
import "chart.js/auto"; // Ensure Chart.js is loaded

const VerticalBarDemo = () => {
    const [chartData, setChartData] = useState(null);
    const [chartOptions, setChartOptions] = useState(null);

    useEffect(() => {
        const data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Dataset 1",
                    backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "Dataset 2",
                    backgroundColor: "rgba(255, 206, 86, 0.6)", // Yellow
                    borderColor: "rgba(255, 206, 86, 1)",
                    borderWidth: 1,
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: "#333"
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#666"
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    ticks: {
                        color: "#666"
                    },
                    grid: {
                        color: "#ddd"
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card" style={{ height: "400px" }}>
            {chartData && chartOptions ? (
                <Bar data={chartData} options={chartOptions} />
            ) : (
                <p>Loading chart...</p>
            )}
        </div>
    );
};

export default VerticalBarDemo;
