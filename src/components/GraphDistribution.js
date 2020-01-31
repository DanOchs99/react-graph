import React from 'react';
import './GraphDistribution.css';
import PieChart from 'react-minimal-pie-chart';

const GraphDistribution = (props) => {

    return (
        <div className="graphDiv">
        <PieChart
          data={props.info}
          label
          labelPosition={50}
          labelStyle={{
              fill: '#121212',
              fontFamily: 'sans-serif',
              fontSize: '5px'
          }}
        />
        </div>
    );
}

export default GraphDistribution