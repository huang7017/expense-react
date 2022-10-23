
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'
const ExpenseList = (props) => {
    if(props.item.length === 0 ){
        return <h2 className="expenses-list__fallback">No expenses found</h2> 
    }

    return (
        <ul className="expenses-list">
            {
                props.item.map(elements => 
                    <ExpenseItem 
                        key={elements.id}
                        title={elements.title}
                        amount={elements.amount}
                        date={elements.date}
                    />
                )
            }
        </ul>
    )
}

export default ExpenseList;