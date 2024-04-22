import { redirect, useParams, Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { months } from '../../utils/date';
const data = [
  {
    title: "Folks' Pizzeria",
    date: new Date(2021, 3, 27),
    location: {
      city: "Costa Mesa",
      secondary: "SoBeCa",
      state: "CA",
      taxrate: 0.0775
    }
  },
  {
    title: "Bear Flag Fish Co.",
    date: new Date(2024, 11, 8),
    location: {
      city: "Newport Beach",
      secondary: "Via Lido",
      state: "CA",
      taxrate: 0.0775
    }
  },
  {
    title: "Tsujita Artisan Noodle",
    date: new Date(2023, 5, 17),
    location: {
      city: "Los Angeles",
      secondary: "Sawtelle Blvd",
      state: "CA",
      taxrate: 0.095
    }
  },
];

const Tab = () => {
  const theme = useTheme();
  const tab = data[Math.floor(Math.random() * data.length)];

  const { id } = useParams();
  if (!id) {
    redirect('/tabs');
  }

  return (
    <Box sx={{ width: '94%', paddingLeft: '3%' }}>
      <Stack direction="row" justifyContent="flex-start" sx={{ marginTop: "1%", marginBottom: "0.2%" }}>
        <Link component={RouterLink} to="/tabs" underline="none">
          <Typography
            color="gray.main"
            fontSize={18}
            fontWeight={800}
            marginTop="24px"
          >
            &lt; back to all tabs
          </Typography>
        </Link>
      </Stack>
      <Stack direction="row" justifyContent="flex-start">
        <Typography
          variant="h1"
          color="primary.main"
          textTransform="lowercase"
        >
          {tab.title}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="flex-start" sx={{ height: "30px", marginBottom: "0.2%" }}>
        <Typography
          variant="h6"
          fontWeight={500}
          color="secondary.main"
          textTransform="lowercase"
        >
          {tab.location.city}, {tab.location.secondary}
        </Typography>
        <Divider orientation="vertical" flexItem variant="middle" sx={{ marginLeft: "12px", marginRight: "14px", marginBottom: "6px" }} />
        <Typography
          variant="h6"
          color="gray.dark"
          textTransform="lowercase"
        >
          {months[tab.date.getMonth() + 1]} {tab.date.getDate()}, {tab.date.getFullYear()}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" sx={{ marginTop: "0.1%" }}>
        <TableContainer>
          <Table aria-labelledby="tableTitle">
            <TableBody sx={{ "& td": { border: 0, paddingLeft: 0, textTransform: "lowercase" } }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 500, fontSize: { md: '1.05rem', xl: '1.2rem' } }}>salmon</TableCell>
                <TableCell sx={{ fontSize: { md: '1.05rem', xl: '1.2rem' } }} align="right">12.89</TableCell>
              </TableRow>
              <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
                <TableCell sx={{ fontWeight: 500, fontSize: { md: '1.05rem', xl: '1.2rem' }, textTransform: 'lowercase' }}>spinach</TableCell>
                <TableCell sx={{ fontSize: { md: '1.05rem', xl: '1.2rem' } }} align="right">210.21</TableCell>
              </TableRow>
              <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
                <TableCell sx={{ fontWeight: 500, fontSize: { md: '1.05rem', xl: '1.2rem' } }}>steak</TableCell>
                <TableCell sx={{ fontSize: { md: '1.05rem', xl: '1.2rem' } }} align="right">35.74</TableCell>
              </TableRow>
              <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
                <TableCell sx={{ fontWeight: 500, fontSize: { md: '1.05rem', xl: '1.2rem' } }}>strawberries</TableCell>
                <TableCell sx={{ fontSize: { md: '1.05rem', xl: '1.2rem' } }} align="right">86.53</TableCell>
              </TableRow>
              <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
                <TableCell sx={{ fontWeight: 500, fontSize: { md: '1.05rem', xl: '1.2rem' } }}>scrambled eggs</TableCell>
                <TableCell sx={{ fontSize: { md: '1.05rem', xl: '1.2rem' } }} align="right">77.62</TableCell>
              </TableRow>
              <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
                <TableCell sx={{ fontWeight: 500, fontSize: { md: '1.05rem', xl: '1.2rem' } }}>squash</TableCell>
                <TableCell sx={{ fontSize: { md: '1.05rem', xl: '1.2rem' } }} align="right">9.03</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box width={{ sm: "30px", md: "60px", xl: "5%" }} />
        <Stack direction="column" width={{ sm: "300px", md: "500px", xl: "40%" }}>
          <TableContainer>
            <Table aria-labelledby="tableTitle">
              <TableBody sx={{ "& td": { border: 0, paddingBottom: 0 } }}>
                <TableRow>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }}>subtotal</TableCell>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }} align="right">143.71</TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' }, textTransform: 'lowercase' }}>{tab.location.city}, {tab.location.state} ({tab.location.taxrate * 100}%)</TableCell>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }} align="right">6.35</TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }}>tip (15%)</TableCell>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }} align="right">12.89</TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { paddingTop: "0.75rem", fontWeight: 700 }}}>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' }, color: theme.palette.primary.main }}>total</TableCell>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }} align="right">162.90</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Divider sx={{ marginTop: "1.1rem" }} />
          {/* <Divider sx={{ marginTop: "0.8rem", marginBottom: "0.5rem" }} /> */}
          {/* <Typography fontSize={{ md: '1rem', xl: '1.17rem' }} fontWeight={700} marginLeft="0.95rem">splits</Typography> */}
          {/* <Divider sx={{ marginTop: "0.5rem", marginBottom: "0.15rem" }} /> */}
          <TableContainer>
            <Table aria-labelledby="tableTitle">
              <TableBody sx={{ "& td": { border: 0, paddingBottom: 0 } }}>
                <TableRow>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' }, textTransform: 'lowercase' }}>alan</TableCell>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }} align="right">10.75</TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' }, textTransform: 'lowercase' }}>brie</TableCell>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }} align="right">86.37</TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' }, textTransform: 'lowercase' }}>carlos</TableCell>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }} align="right">4.21</TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' }, textTransform: 'lowercase' }}>claude</TableCell>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }} align="right">53.84</TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' }, textTransform: 'lowercase' }}>meghna</TableCell>
                  <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }} align="right">29.09</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography color="gray.main" fontSize={{md: "0.8rem", xl: "0.95rem"}} marginLeft="1rem" marginTop="1rem">hover/click to see split</Typography>
          {/* <Divider sx={{ marginTop: "1.1rem" }} /> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Tab;
