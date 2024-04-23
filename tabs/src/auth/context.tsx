import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactElement
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  deleteUser,
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  GoogleAuthProvider,
  User
} from 'firebase/auth';

import { AllowlistDenySnackbar, LoggedInSuccessSnackbar, LoggedOutSuccessSnackbar } from './snackbars';
import { app } from './firebase';
import allowlist from './allowlist';

interface AuthProviderProps {
  children: ReactElement;
}

interface AuthProvider {
  currentUser: User | null;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext({
  currentUser: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
} as AuthProvider);
const useAuth = (): AuthProvider => useContext(AuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [showLoggedInAlert, setShowLoggedInAlert] = useState(false);
  const [showLoggedOutAlert, setShowLoggedOutAlert] = useState(false);
  const [showAllowlistAlert, setShowAllowlistAlert] = useState(false);
  const [currentUser, setCurrentUser] = useState(null as User | null);
  const isLoggedIn = currentUser !== null;

  const navigate = useNavigate();

  const auth = getAuth(app);
  auth.useDeviceLanguage();
  const provider = new GoogleAuthProvider();
  provider.addScope('email');
  provider.addScope('openid');
  provider.addScope('profile');

  const login = () => {
    signInWithRedirect(auth, provider);
  }
  const logout = async () => {
    await auth.signOut();
    await setCurrentUser(null);
    await setShowLoggedOutAlert(true);
    navigate('/');
  };

  useEffect(() => {
    onAuthStateChanged(auth, async user => {
      // maintaining allowlist
      if (user && !allowlist.includes(user.email ?? "")) {
        await deleteUser(user);
        user = null;
        await setShowAllowlistAlert(true);
      }
      // log in & persist
      await setCurrentUser(user);
      await setShowLoggedInAlert(true);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {isLoggedIn &&
        <LoggedInSuccessSnackbar
          email={currentUser.email!}
          visible={showLoggedInAlert}
          setVisible={setShowLoggedInAlert}
        />
      }
      <LoggedOutSuccessSnackbar
        visible={showLoggedOutAlert}
        setVisible={setShowLoggedOutAlert}
      />
      <AllowlistDenySnackbar
        visible={showAllowlistAlert}
        setVisible={setShowAllowlistAlert}
      />
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
