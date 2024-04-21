import { Box, Button } from '@mui/material';

const Home = () => {
  const isLoggedIn = false;

  return (
    <Box component="section" sx={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div>
        <h1>tabs</h1>
      </div>
      <div>
        <Button variant="contained" color="secondary">
          {isLoggedIn ? 'Go To Tabs' : 'Log In'}
        </Button>
      </div>
    </Box>
  );
};

export default Home;
