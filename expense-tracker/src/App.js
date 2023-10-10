import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    date: new Date(2022, 9, 23),
    title: 'Dior B23 sneaks',
    amount: 999.89
  },
  { 
    id: 'e2', 
    date: new Date(2021, 2, 12),
    title: 'New TV', 
    amount: 799.49
  },
  {
    id: 'e3',
    date: new Date(2022, 2, 28),
    title: 'Car Insurance',
    amount: 294.67
  },
  {
    id: 'e4',
    date: new Date(2021, 5, 12),
    title: 'New Desk (Wooden)',
    amount: 450
  },
  {
    id: 'e5',
    date: new Date(2022, 10, 15),
    title: 'Hugo Boss Wool Coat',
    amount: 610
  }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return[expense, ...prevExpenses];
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
