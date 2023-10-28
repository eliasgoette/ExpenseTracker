import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ items }) {
    if(items.length === 0) return <h2 className="expense-list__fallback">No items meet the criteria</h2>

    return (
        <ul className="expense-list">
            <strong className="expense-list__net-expenses">
                Net. expenses: $ {items.reduce((accumulator, currentItem) => (currentItem.amount >= 0.01) ? accumulator + currentItem.amount : accumulator, 0)}
            </strong>
            {[...items.sort((a, b) => b.date - a.date)].map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                />
            ))}
        </ul>
    );
}

export default ExpenseList;