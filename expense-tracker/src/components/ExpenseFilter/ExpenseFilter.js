import React from 'react';
import './ExpenseFilter.css';

function ExpensesFilter({onSelectYear}) {
    // Just overengineering it xD
    const currentYear = new Date().getFullYear();
    const numberOfSelectableYears = 10;
    const selectableYears = Array.from({ length: numberOfSelectableYears }, (_, index) => currentYear - index);

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={e => onSelectYear(e.target.value)}>
                    {selectableYears.map(year => <option value={year} key={year}>{year}</option>)}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;