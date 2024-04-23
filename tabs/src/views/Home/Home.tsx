import { useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { useAuth } from '../../auth/context';

const Home = () => {
  const auth = useAuth();

  useEffect(() => {
    auth.getLoginRedirectStatus().then((result) => {
      if (result) {
        auth.setShowLoggedInAlert(true);
      }
    });
  }, []);

  return (
    <Box component="section" sx={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div>
        <h1>tabs</h1>
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={auth.isLoggedIn ? auth.logout : auth.login}
        >
          {auth.isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
      </div>
    </Box>
  );
};

export default Home;
