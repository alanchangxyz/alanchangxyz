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
      state: "CA"
    }
  },
  {
    title: "Carrot & Daikon",
    date: new Date(2024, 0, 8),
    location: {
      city: "Westminster",
      secondary: "Little Saigon",
      state: "CA"
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
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={{ fontWeight: 700 }}>item</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>amt</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>a</TableCell>
                <TableCell align="right">12.89</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>b</TableCell>
                <TableCell align="right">210.21</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>c</TableCell>
                <TableCell align="right">35.74</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>d</TableCell>
                <TableCell align="right">86.53</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ width: "50px" }} />
        <TableContainer sx={{ width: "40%", marginRight: "2px" }}>
          <Table aria-labelledby="tableTitle">
            <TableHead>
              {/* <TableRow sx={{ "& td": { border: 0, padding: 0 }}}>
                <TableCell align="left"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow> */}
            </TableHead>
            <TableBody>
              <TableRow sx={{ "& td": { border: 0, paddingBottom: 0 } }}>
                <TableCell>subtotal</TableCell>
                <TableCell align="right">43.71</TableCell>
              </TableRow>
              <TableRow sx={{ "& td": { border: 0, paddingTop: "6px", paddingBottom: 0 } }}>
                <TableCell>{tab.location.city}, {tab.location.state} (7.75%)</TableCell>
                <TableCell align="right">6.35</TableCell>
              </TableRow>
              <TableRow sx={{ "& td": { border: 0, paddingTop: "6px", paddingBottom: 0 } }}>
                <TableCell>tip (15%)</TableCell>
                <TableCell align="right">12.89</TableCell>
              </TableRow>
              <TableRow sx={{ "& td": { paddingTop: "12px", fontWeight: 700 }}}>
                <TableCell sx={{ color: theme.palette.primary.main }}>total</TableCell>
                <TableCell align="right">62.90</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  );
};

export default Tab;
