
import React from 'react';
import LeftDashFooter from '../LeftDashFooter/LeftDashFooter';
import LeftDashHeader from '../LeftDashHeader/LeftDashHeader';
const LeftDash = () => {
    return (
      <div className="w-full">
       <LeftDashHeader></LeftDashHeader>
       <LeftDashFooter></LeftDashFooter>
      </div>
    );
};

export default LeftDash;