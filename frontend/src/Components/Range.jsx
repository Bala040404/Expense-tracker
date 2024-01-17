import React, { useState } from 'react'
import "../Styles/Range.css"
import { useNavigate } from 'react-router-dom'
function Range(props) {

    const [range, setRange] = useState({ startDate: "", endDate: "" });
    let reroute = useNavigate();

    async function filter() {
        let res = await fetch("http://localhost:8080/expense/range",
            {
                method: 'POST',
                body: JSON.stringify(range),
                headers: {
                    "Content-Type": "application/json",

                }
            })
        res = await res.json()

        props.changeExpense(res);
        console.log(res);
        reroute("/allexpense")
    }

    return (
        <div className='range'>
            <h3>choose a Range for statement</h3>
            <div className='startDate'>
                <label htmlFor="start">enter the starting  date</label>
                <input type="date" name="startDate" id="start" value={range.startDate} onChange={(e) => { let x = { ...range, startDate: e.target.value }; setRange(x) }} />
            </div>

            <div className='endDate'>
                <label htmlFor="end">enter the ending date</label>
                <input type="date" name="endDate" id="end" value={range.endDate} onChange={(e) => { let x = { ...range, endDate: e.target.value }; setRange(x) }} />
            </div>
            <button className='filterButton' onClick={filter}>ok</button>
        </div>
    )
}

export default Range
