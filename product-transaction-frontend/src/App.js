import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionTable from './components/TransactionTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import './App.css';

function App() {
    const [month, setMonth] = useState('03'); // March by default
    const [data, setData] = useState({ transactions: [], stats: {}, barChart: [], pieChart: [] });
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    // Fetch combined API data
    const fetchData = async(month, search = '', page = 1) => {
        try {
            const result = await axios.get(`http://localhost:5000/combined?month=${month}&search=${search}&page=${page}`);
            setData(result.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Fetch data whenever month, search, or page changes
    useEffect(() => {
        fetchData(month, search, page);
    }, [month, search, page]);

    return ( <
        div className = "app-container" >
        <
        h1 > Product Transactions < /h1>

        { /* Month dropdown */ } <
        div className = "month-select" >
        <
        label htmlFor = "month" > Select Month: < /label> <
        select id = "month"
        value = { month }
        onChange = { e => setMonth(e.target.value) } > {
            Array.from({ length: 12 }, (_, i) => ( <
                option key = { i }
                value = { String(i + 1).padStart(2, '0') } > { new Date(0, i).toLocaleString('default', { month: 'long' }) } <
                /option>
            ))
        } <
        /select> <
        /div>

        { /* Search Box */ } <
        div className = "search-box" >
        <
        input type = "text"
        placeholder = "Search transactions"
        value = { search }
        onChange = {
            (e) => setSearch(e.target.value) }
        /> <
        /div>

        { /* Transaction Table */ } <
        TransactionTable transactions = { data.transactions }
        page = { page }
        setPage = { setPage }
        />

        { /* Statistics */ } <
        Statistics stats = { data.stats }
        />

        { /* Bar Chart */ } <
        BarChart data = { data.barChart }
        />

        { /* Pie Chart */ } <
        PieChart data = { data.pieChart }
        /> <
        /div>
    );
}

export default App;