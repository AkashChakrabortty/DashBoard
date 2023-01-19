import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Graph from '../Graph/Graph';
import Overview from '../Overview/Overview';
const LeftDashMiddle = () => {
    return (
      <div className="lg:flex p-2 default-bg rounded my-2">
        <Overview></Overview>
        <div className="">
          <div className="icon text-right">
            <span className="font-bold">Sort By:</span>
            Yearly
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div className="overflow-auto">
            <Graph></Graph>
          </div>
        </div>
      </div>
    );
};

export default LeftDashMiddle;