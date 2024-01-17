import React, { useRef } from 'react'
import "../Styles/Expense.css"
function Expense(props) {


    let col = props.type === 'income' ? "green" : "red"
    return (
        <div className="expense" >
            <div className='expenseDate'>{props.date}</div>
            <div className='expenseReason'>{props.reason}</div>
            <div className='expensePrice'>{props.price}</div>
            <div className={`colorcode ${col}`}></div>
        </div>
    )
}

export default Expense
