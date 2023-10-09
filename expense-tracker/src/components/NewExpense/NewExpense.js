import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense({onAddExpense}) {
    const saveExpenseHandler = enteredData => {
        const expense = {
            ...enteredData,
            id: Math.random().toString()
        };

        // Lifting state up
        onAddExpense(expense);
    }

    return(
        <div className="new-expense">
            <NewExpenseForm onSaveExpense={saveExpenseHandler} />
        </div>
    );
}

export default NewExpense;