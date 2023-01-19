import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Graph from '../Graph/Graph';
import Overview from '../Overview/Overview';
const LeftDashMiddle = () => {
    return (
      <div className="flex p-2 default-bg rounded">
        <Overview></Overview>
        <div className="">
          <div className="icon text-right">
            <span className='font-bold'>Sort By:</span>
            Yearly
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <Graph></Graph>
        </div>
      </div>
    );
};

export default LeftDashMiddle;