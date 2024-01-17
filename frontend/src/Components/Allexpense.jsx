import React from 'react'
import { useState, useEffect } from 'react'
import Expense from './Expense';
import Range from './Range';

import "../Styles/allexpense.css"
import Summary from './Summary';
function Allexpense() {

    const [expenses, setExpenses] = useState([{}]);


    function calculateSummary() {
        let income = 0;
        let expenditure = 0;
        for (let i of expenses) {
            if (i.type === 'income') {
                income += i.amount;
            }
            else {
                expenditure += i.amount;
            }
        }

        return [income, expenditure];
    }
    async function fetchExpenses() {

        let expense = await fetch("http://localhost:8080/expense");
        expense = await expense.json();
        setExpenses(expense);

    }

    useEffect(() => { fetchExpenses() }, [])

    let expenseList = expenses.map((e, id) => { return (<Expense key={id} date={e.date} reason={e.reason} price={e.amount} type={e.type} />) })

    return (

        <div className='allExpense'>
            <h1>Expense tracker</h1>
            <Summary income={calculateSummary()[0]} expense={calculateSummary()[1]} />

            <section className='expensecontainer'>
                <div className='expenseContents'>
                    {expenseList}
                </div>
                <Range className="rangeContents" changeExpense={setExpenses} />
            </section>
        </div>

    )
}

export default Allexpense
