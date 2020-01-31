import React from 'react';
import './App.css';
import BudgetDistribution from './components/BudgetDistribution.js'
import GraphDistribution from './components/GraphDistribution.js'
import {useState} from 'react'
import {useEffect} from 'react'


const App = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let d = []
        d.push({ title: 'Checking', value: 30, color: 'red' })
        d.push({ title: 'Savings', value: 40, color: 'green' })
        d.push({ title: 'Brokerage', value: 30, color: 'blue' })
        setData(d);
    }, [])

    const onUpdate = (a) => {
        let d = []
        d.push({ title: 'Checking', value: parseInt(a.checking), color: 'red' })
        d.push({ title: 'Savings', value: parseInt(a.savings), color: 'green' })
        d.push({ title: 'Brokerage', value: parseInt(a.brokerage), color: 'blue' })
        setData(d);
    }

    return (
        <div>
          <BudgetDistribution onUpdate={onUpdate} />
          <GraphDistribution info={data}/>
        </div>
    );
}

export default App;

/*
data={[
  { title: 'Checking', value: 70, color: 'red' },
  { title: 'Savings', value: 20, color: 'green' },
  { title: 'Brokerage', value: 10, color: 'blue' },
]}
*/