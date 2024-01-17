import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../Styles/Addexpense.css"
function Addexpense() {
    let [expense, setExpense] = useState({ date: "", reason: "", amount: 0, type: "expenditure" });
    let reroute = useNavigate();
    async function addStatement() {

        let res = await fetch("http://localhost:8080/expense", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(expense)
        })

        reroute("/allexpense")

    }
    let col = expense.type == "income" ? "borderGreen" : "borderRed";
    return (

        <div className='addExpenseContainer'>
            <div className={`addExpense ${col}`}>

                <h1>Add details about transaction</h1>

                <div>
                    <label htmlFor="type">Type</label>
                    <select className={expense.type === "income" ? "green" : "red"} name="type" id="type" value={expense.type} onChange={(e) => { let x = { ...expense, type: e.target.value }; setExpense(x) }} >
                        <option className='options' value="expenditure">Expenditure</option>
                        <option className="options" value="income">Income</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="reason">Enter reason</label>
                    <input type="text" name="reason" id="reason" value={expense.reason} onChange={(e) => { let x = { ...expense, reason: e.target.value }; setExpense(x) }} />
                </div>

                <div>
                    <label htmlFor="amount">Enter the amount</label>
                    <input type="number" name="amount" id="amount" value={expense.amount} onChange={(e) => { let x = { ...expense, amount: e.target.value }; setExpense(x) }} />
                </div>

                <div>
                    <label htmlFor="amount">Enter the date</label>
                    <input type="date" name="date" id="date" value={expense.date} onChange={(e) => { let x = { ...expense, date: e.target.value }; setExpense(x) }} />
                </div>

                <button className='addButton' onClick={addStatement}>Add </button>

            </div>
        </div>
    )
}

export default Addexpense
