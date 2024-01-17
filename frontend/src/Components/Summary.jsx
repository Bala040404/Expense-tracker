import React from 'react'
import "../Styles/summary.css"

function Summary(props) {
    return (
        <div className='summary'>
            <div className='income'>
                <h3>income</h3>
                <div>{props.income}</div>
            </div>
            <div className='expenditure'>
                <h3>expense</h3>
                <div>{props.expense}</div>
            </div>

        </div>
    )
}

export default Summary
