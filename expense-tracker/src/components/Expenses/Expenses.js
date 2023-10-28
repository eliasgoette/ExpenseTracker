import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";

function Expenses({ items }) {
    const [filterYear, setFilterYear] = useState(new Date().getFullYear().toString());

    const selectYearHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    };

    const filteredExpenses = items.filter((item) => item.date.getFullYear().toString() === filterYear);

    return (
        <Card className="expenses">
            <ExpensesFilter onSelectYear={selectYearHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;