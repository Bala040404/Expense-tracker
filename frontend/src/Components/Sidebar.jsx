import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Styles/sidebar.css"

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='contents'>
                <h3 className='name'>Expensetracker</h3>
                <NavLink className="navLinks" to="/allexpense">Allexpense</NavLink>
                <NavLink className="navLinks" to="/addexpense">Addexpense</NavLink>
            </div>
        </div >
    )
}

export default Sidebar
