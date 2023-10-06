import React from "react";
import "./ExpenseDate.css";
import Card from "./Card";

function ExpenseDate({date}) {
    const month = date.toLocaleDateString('en-us', {month: 'long'});
    const year = date.getFullYear();
    const day = date.toLocaleDateString('en-us', {day: '2-digit'});

    return(
        <Card className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </Card>
    );
}

export default ExpenseDate;