import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpensesFilter';
import Card from '../UI/Card'
import './Expenses.css'
const Expenses = (props) => {
    const [filterYear,setFilterYear]= useState('2022');
    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    }
    const filterExpenses =  props.item.filter(expense =>{
        return expense.date.getFullYear().toString() === filterYear;
    });

    return(
        <li>
            <Card className="expenses">
                <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
                <ExpenseList item={filterExpenses} />
            </Card>
        </li>
    );
}

export default Expenses;