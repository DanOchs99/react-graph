import React from 'react';
import './BudgetDistribution.css';
import {useState} from 'react';

const BudgetDistribution = (props) => {
    const [accounts, setAccounts] = useState({})

    const handleChange = (e) => {
        setAccounts({...accounts,
                     [e.target.name]: e.target.value})
    }

    const handleClick = () => {
        props.onUpdate(accounts)
    }

    return (
        <div>
            <label className="label" >Checking</label>
            <input type="text" name="checking" onChange={handleChange} className="textBox" defaultValue='30' />
            <label className="label" >Savings</label>
            <input type="text" name="savings" onChange={handleChange} className="textBox" defaultValue='40'/>
            <label className="label" >Brokerage</label>
            <input type="text" name="brokerage" onChange={handleChange} className="textBox" defaultValue='30'/>
            <button onClick={handleClick} >Update</button>
        </div>
    );
}

export default BudgetDistribution
