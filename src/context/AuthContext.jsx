import React, { createContext, useState } from 'react';

export const AuthProvider = createContext();

const AuthContext = ({children}) => {
    const [isX,setIsX] = useState(true);
    const authInfo = {
      isX,
      setIsX,
    };
    return (
      <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
    );
};

export default AuthContext;