import {createContext} from 'react';
import { useNavigate } from 'react-router-dom';

import { authServiceFactory } from '../services/authService'; 
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const  AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [authState, setAuthState] = useLocalStorage('authToken', {});
    
    const authService = authServiceFactory(authState.accessToken);

    const onLoginSubmit = async (data) => {
        try {
            const loginResult = await authService.login(data);

            setAuthState(loginResult)

            navigate('/catalog');

        } catch(err) {
            alert(err)
        };

    };

    const onLogout = async () => {
        
        await authService.logout();

        setAuthState({});
      };

    const contextValues = {
        onLoginSubmit,
        onLogout,
        userId: authState._id,
        token: authState.accessToken,
        userEmail: authState.email,
        isAuthenticated: !!authState.accessToken,
 
    };

    return (
        <>
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
        </>

    );

};