import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

function Expenses({items}) {
    const [filterYear, setFilterYear] = useState(new Date().getFullYear());

    const selectYearHandler = selectedYear => {
        setFilterYear(selectedYear);
    }

    return(
        <div>
            <ExpensesFilter onSelectYear={selectYearHandler} />
            <Card className="expenses">
                {items.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}
                    />
                ))}
            </Card>
        </div>
    );
}

export default Expenses;