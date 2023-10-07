import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

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