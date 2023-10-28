import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense({onAddExpense}) {
    const [formVisible, setFormVisible] = useState(false);

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
            {
                !formVisible
                    ? <button onClick={() => setFormVisible(true)}>Add New Expense</button>
                    : <NewExpenseForm onSaveExpense={saveExpenseHandler} setVisible={setFormVisible} />
            }
        </div>
    );
}

export default NewExpense;