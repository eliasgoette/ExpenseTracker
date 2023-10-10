import React, { useState } from "react";
import "./NewExpenseForm.css";

function NewExpenseForm({onSaveExpense, setVisible}) {
    const dateMin = new Date('10/16/2001');
    const dateNow = new Date();
    const dateMax = dateNow;

    // const [dateInput, setDateInput] = useState(dateNow);
    // const [titleInput, setTitleInput] = useState('No title');
    // const [amountInput, setAmountInput] = useState('0');
    const [userInput, setUserInput] = useState({date: dateNow, title: 'New expense', amount: '0.00'});

    const clearUserInput = () => setUserInput({date: dateNow, title: 'New expense', amount: parseFloat(0.00)});

    const submitEvent = (e) => {
        e.preventDefault();
        onSaveExpense(userInput);
        clearUserInput();
        setVisible(false);
    }

    const cancelEvent = () => {
        setVisible(false);
        clearUserInput();
    }

    return(
        <form onSubmit={submitEvent}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" min={dateMin} max={dateMax} 
                        value={userInput.date}
                        onChange={
                            (e) => (setUserInput({
                                ...userInput,
                                date: new Date(e.target.value)
                            }))
                        }
                    />
                </div>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" placeholder="Gas" 
                        value={userInput.title}
                        onChange={
                            (e) => (setUserInput({
                                ...userInput,
                                title: e.target.value
                            }))
                        } 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" placeholder="19.99" step="0.01"
                        value={userInput.amount}
                        onChange={
                            (e) => (setUserInput({
                                ...userInput,
                                amount: parseFloat(e.target.value)
                            }))
                        } 
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={cancelEvent}>Cancel</button>
                    <button type="submit">Add expense</button>
                </div>
            </div>
        </form>
    );
}

export default NewExpenseForm;