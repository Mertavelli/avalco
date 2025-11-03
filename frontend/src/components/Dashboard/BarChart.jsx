import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartContainer.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Summe (EUR)',
                        },
                        grid: {
                            borderDash: [5, 5],
                            drawBorder: false,
                        }
                    },
                    x: {
                        grid: {
                            display: false,
                        },
                        title: {
                            display: false,
                            text: 'Wochentage',
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                elements: {
                    bar: {
                        borderRadius: 100, // Runde die Ecken der Balken
                    },
                    line: {
                        borderWidth: 3,
                        borderDash: [10, 10], // Gestrichelte Linien
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
            },
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data]);

    return (
        <div style={{ width: '100%', height: "300px", margin: '0 auto' }}>
            <canvas ref={chartContainer} />
        </div>
    );
};

export default BarChart;
