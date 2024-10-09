import React from "react";
import "./Statistics.css";

const Statistics = ({ stats }) => {
    return ( <
        div className = "statistics-container" >
        <
        div className = "stat-box" >
        <
        h3 > Total Sale Amount < /h3> <p> {stats.totalSales || 0} </p > { " " } <
        /div>{" "} <
        div className = "stat-box" >
        <
        h3 > Total Sold Items < /h3> <p> {stats.totalSold || 0} </p > { " " } <
        /div>{" "} <
        div className = "stat-box" >
        <
        h3 > Total Not Sold Items < /h3> <p> {stats.totalNotSold || 0} </p > { " " } <
        /div>{" "} <
        /div>
    );
};

export default Statistics;