import React from 'react';
import { Pie } from 'react-chartjs-2';
import './PieChart.css';

const PieChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item._id),
        datasets: [{
            data: data.map(item => item.count),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        }]
    };

    return ( <
        div className = "chart-container" >
        <
        h3 > Category Distribution < /h3> <
        Pie data = { chartData }
        /> <
        /div>
    );
};

export default PieChart;