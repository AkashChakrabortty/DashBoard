import React from 'react';
import LeftContainer from '../LeftContainer/LeftContainer';
import RightContainer from '../RightContainer/RightContainer';

const Layout = () => {
    return (
      <div className="flex h-screen">
        <LeftContainer></LeftContainer>
        <RightContainer></RightContainer>
      </div>
    );
};

export default Layout;