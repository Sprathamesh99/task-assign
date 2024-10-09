import React from "react";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";

const BarChart = ({ data }) => {
    const chartData = {
        labels: data.map((item) => item.range),
        datasets: [{
            label: "Number of Items",
            data: data.map((item) => item.count),
            backgroundColor: "rgba(75,192,192,0.4)",
        }, ],
    };

    return ( <
        div className = "chart-container" >
        <
        h3 > Price Range Distribution < /h3> <Bar data={chartData} / > { " " } <
        /div>
    );
};

export default BarChart;