import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({items}) {
    return(
        <div className="expenses">
            {items.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                />
            ))}
        </div>
    );
}

export default Expenses;