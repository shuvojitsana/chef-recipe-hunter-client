import React, { Children, createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.console';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const user = {displayName: 'muri khan'}

    const authInfo = {
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;