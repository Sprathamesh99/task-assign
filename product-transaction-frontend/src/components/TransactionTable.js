import React from 'react';
import './TransactionTable.css';

const TransactionTable = ({ transactions, page, setPage }) => {
    return ( <
        div className = "table-container" >
        <
        table className = "transaction-table" >
        <
        thead >
        <
        tr >
        <
        th > Title < /th> <
        th > Description < /th> <
        th > Price < /th> <
        th > Date of Sale < /th> < /
        tr > <
        /thead> <
        tbody > {
            transactions.length > 0 ? transactions.map((transaction, index) => ( <
                tr key = { index } >
                <
                td > { transaction.title } < /td> <
                td > { transaction.description } < /td> <
                td > { transaction.price } < /td> <
                td > { new Date(transaction.dateOfSale).toLocaleDateString() } < /td> < /
                tr >
            )) : ( <
                tr >
                <
                td colSpan = "4" > No transactions found < /td> < /
                tr >
            )
        } <
        /tbody> < /
        table >

        { /* Pagination */ } <
        div className = "pagination" >
        <
        button onClick = {
            () => setPage(prev => Math.max(prev - 1, 1))
        }
        disabled = { page === 1 } > Previous < /button> <
        span > Page { page } < /span> <
        button onClick = {
            () => setPage(prev => prev + 1)
        } > Next < /button> < /
        div > <
        /div>
    );
};

export default TransactionTable;
() => setPage(prev => Math.max(prev - 1, 1))
}
disabled = { page === 1 } > Previous < /button> <
span > Page { page } < /span> <
button onClick = {
    () => setPage(prev => prev + 1)
} > Next < /button> < /
div > <
    /div>
);
};

export default TransactionTable;