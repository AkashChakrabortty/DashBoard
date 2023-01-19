import React from 'react';
import Graph from '../Graph/Graph';
import Overview from '../Overview/Overview';
const LeftDashMiddle = () => {
    return (
        <div className='flex p-2'>
            <Overview></Overview>
            <Graph></Graph>
        </div>
    );
};

export default LeftDashMiddle;