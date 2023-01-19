
import React from 'react';
import LeftDashFooter from '../LeftDashFooter/LeftDashFooter';
import LeftDashHeader from '../LeftDashHeader/LeftDashHeader';
import LeftDashMiddle from '../LeftDashMiddle/LeftDashMiddle';
const LeftDash = () => {
    return (
      <div className="lg:w-full w-3/5 ">
        <LeftDashHeader></LeftDashHeader>
        <LeftDashMiddle></LeftDashMiddle>
        <LeftDashFooter></LeftDashFooter>
      </div>
    );
};

export default LeftDash;