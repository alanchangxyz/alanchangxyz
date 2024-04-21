import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithRedirect, GoogleAuthProvider, User } from 'firebase/auth';
import { auth } from './firebase';

interface AuthProviderProps {
  children: JSX.Element[];
}

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState({} as User | null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const login = () => signInWithRedirect(auth, provider);
  const logout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
