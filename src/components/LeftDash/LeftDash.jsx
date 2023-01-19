
import React from 'react';
import LeftDashFooter from '../LeftDashFooter/LeftDashFooter';
import LeftDashHeader from '../LeftDashHeader/LeftDashHeader';
import LeftDashMiddle from '../LeftDashMiddle/LeftDashMiddle';
const LeftDash = () => {
    return (
      <div className="w-full">
       <LeftDashHeader></LeftDashHeader>
       <LeftDashMiddle></LeftDashMiddle>
       <LeftDashFooter></LeftDashFooter>
      </div>
    );
};

export default LeftDash;