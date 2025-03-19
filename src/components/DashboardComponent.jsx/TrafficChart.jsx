import React, { useState, useEffect } from 'react';
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

export default function DoughnutChartDemo() {
    // ✅ Provide a default datasets structure to prevent undefined errors
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{ data: [] }]
    });
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['Organic', 'Referral'],
            datasets: [
                {
                    data: [300, 150], // Example data for Organic and Referral
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500') || 'rgba(54, 162, 235, 0.6)', // Blue for Organic
                        documentStyle.getPropertyValue('--yellow-500') || 'rgba(255, 206, 86, 0.6)' // Yellow for Referral
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400') || 'rgba(54, 162, 235, 1)',
                        documentStyle.getPropertyValue('--yellow-400') || 'rgba(255, 206, 86, 1)'
                    ]
                }
            ]
        };
        
        const options = {
            cutout: '60%',
            responsive: true,
            maintainAspectRatio: false
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center" style={{ width: '400px', height: '400px' }}>
            {/* ✅ Render only if datasets exist */}
            {chartData?.datasets?.length > 0 ? (
                <Doughnut data={chartData} options={chartOptions} />
            ) : (
                <p>Loading chart...</p>
            )}
        </div>
    );
}
