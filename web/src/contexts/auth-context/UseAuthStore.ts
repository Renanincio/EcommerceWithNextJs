import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const useAuthStore = () => {
  const { isAuthenticated, login, logout, user, signup, error, isLogged } =
    useContext(AuthContext)

    console.log("Auth Store - Usuário:", user);
    
  return { isAuthenticated, login, logout, user, signup, error, isLogged }
}

export default useAuthStore