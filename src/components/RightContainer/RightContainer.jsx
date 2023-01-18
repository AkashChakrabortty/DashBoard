import React from 'react';
import LeftDash from '../LeftDash/LeftDash';
import NavBar from '../NavBar/NavBar';
import RightDash from "../RightDash/RightDash";
const RightContainer = () => {
    return (
      <div className="bg-blue-300 w-full">
        <NavBar></NavBar>
        <div className="flex gap-2 m-2">
          <LeftDash></LeftDash>
          <RightDash></RightDash>
        </div>
      </div>
    );
};

export default RightContainer;