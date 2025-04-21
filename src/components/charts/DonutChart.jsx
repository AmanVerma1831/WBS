import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const DonutChart = () => {
    const chartRef = useRef(null);

    const getChartOptions = () => {
        return {
            series: [35.1, 23.5, 2.4, 5.4],
            colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
            chart: {
                height: 200,
                width: "100%",
                type: "donut",
            },
            stroke: {
                colors: ["transparent"],
                lineCap: "",
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontFamily: "Inter, sans-serif",
                                offsetY: 20,
                            },
                            total: {
                                showAlways: true,
                                show: true,
                                label: "Total Message",
                                fontSize: "14px",
                                fontFamily: "Inter, sans-serif",
                                formatter: function (w) {
                                    const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                                    return sum + 'k';
                                },
                            },
                            value: {
                                show: true,
                                fontFamily: "Inter, sans-serif",
                                fontSize: "20px",
                                offsetY: -20,
                                formatter: (value) => value + "k",
                            },
                        },
                        size: "60%",
                    },
                },
            },
            grid: {
                padding: {
                    top: -2,
                },
            },
            labels: ["Total Message", "Message Sent", "Message Failed", "Remaining Message"],
            dataLabels: {
                enabled: false,
            },
            legend: {
                position: "left",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
            },
            yaxis: {
                labels: {
                    formatter: (value) => value + "k",
                },
            },
            xaxis: {
                labels: {
                    formatter: (value) => value + "k",
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
        };
    };

    useEffect(() => {
        if (chartRef.current) {
            const chart = new ApexCharts(chartRef.current, getChartOptions());
            chart.render();

            // Cleanup on unmount
            return () => {
                chart.destroy();
            };
        }
    }, []);

    return (
        <div className="w-full bg-white rounded-lg shadow-sm p-2">
            {/* Donut Chart */}
            <div className="py-2" ref={chartRef} id="donut-chart"></div>
        </div>
    );
};

export default DonutChart;