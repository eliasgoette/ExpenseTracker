import React, { useState } from "react";
import "./NewExpenseForm.css";

function NewExpenseForm() {
    const dateMin = new Date('10/16/2001').toLocaleDateString('en-us');
    const dateNow = new Date().toLocaleDateString('en-us');
    const dateMax = dateNow;

    // const [dateInput, setDateInput] = useState(dateNow);
    // const [titleInput, setTitleInput] = useState('No title');
    // const [amountInput, setAmountInput] = useState('0');
    const [userInput, setUserInput] = useState({date: dateNow, title: 'New expense', amount: '0'});
    console.log(userInput);

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" min={dateMin} max={dateMax} 
                        onChange={
                            (e) => (setUserInput({
                                ...userInput,
                                date: e.target.value
                            }))
                        }
                    />
                </div>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" placeholder="Gas" 
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
                        onChange={
                            (e) => (setUserInput({
                                ...userInput,
                                amount: e.target.value
                            }))
                        } 
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add expense</button>
                </div>
            </div>
        </form>
    );
}

export default NewExpenseForm;