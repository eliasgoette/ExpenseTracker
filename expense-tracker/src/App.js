import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
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
      date: new Date(2021, 2, 28),
      title: 'Car Insurance',
      amount: 294.67
    },
    {
      id: 'e4',
      date: new Date(2021, 5, 12),
      title: 'New Desk (Wooden)',
      amount: 450
    }
  ];

  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
