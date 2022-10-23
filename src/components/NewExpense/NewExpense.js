import {useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) =>{
    const saveExpenseDAtaHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    const [expenseFormShow,setExpenseFormShow] = useState(false)
    const showExpenseForm = (show) => {
        setExpenseFormShow(show)
    }
    return (
        <div className="new-expense">
            {!expenseFormShow && <button onClick={showExpenseForm}>Add New Expense</button>}
            {expenseFormShow && <ExpenseForm onShow={showExpenseForm} onSaveExpenseData={saveExpenseDAtaHandler}/>} 
        </div>
    );
}

export default NewExpense;