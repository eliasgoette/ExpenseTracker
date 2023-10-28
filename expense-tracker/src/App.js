import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: '0.8675463251235678',
    date: new Date(2023, 4, 13),
    title: 'Lightweight laptop',
    amount: 1589
  },
  {
    id: '0.1986298272986626',
    date: new Date(2023, 6, 4),
    title: 'Travelling',
    amount: 1241
  },
  {
    id: '0.49826307989656298',
    date: new Date(2023, 6, 28),
    title: 'Doctor',
    amount: 378.49
  },
  {
    id: '0.879542483287532568',
    date: new Date(2023, 9, 2),
    title: 'ChatGPT Pro',
    amount: 20
  },
  {
    id: '0.398460138176198622',
    date: new Date(2023, 9, 10),
    title: 'Education',
    amount: 3600
  },
  {
    id: '0.21354679678864877',
    date: new Date(2023, 5, 8),
    title: 'Car maintenance',
    amount: 350
  },
  { 
    id: '0.3437114086992554', 
    date: new Date(2021, 9, 12),
    title: 'New TV', 
    amount: 799.49
  },
  {
    id: '0.41234437247368105',
    date: new Date(2022, 2, 23),
    title: 'Dior B23 sneaks',
    amount: 999.89
  },
  {
    id: '0.15678847875332091',
    date: new Date(2022, 2, 28),
    title: 'Car Insurance',
    amount: 294.67
  },
  {
    id: '0.866383744591753',
    date: new Date(2021, 5, 12),
    title: 'New Desk (Wooden)',
    amount: 450
  },
  {
    id: '0.9299378525321051',
    date: new Date(2022, 10, 15),
    title: 'Wool Coat',
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
