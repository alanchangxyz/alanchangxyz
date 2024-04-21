import { redirect, useParams, Link } from "react-router-dom";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Tab = () => {
  const theme = useTheme();

  const { id } = useParams();
  if (!id) {
    redirect('/tabs');
  }

  return (
    <Box sx={{ width: '96%', paddingLeft: '1.5%' }}>
      <Stack direction="row" justifyContent="flex-start" sx={{ width: "100%" }}>
        <Link to="/tabs" style={{ textDecoration: "none" }}>
          <Typography sx={{
            fontSize: 18,
            fontWeight: 800,
            color: "#888",
            margin: "24px 0 0 14px"
          }}>
            &lt; back to all tabs
          </Typography>
        </Link>
      </Stack>
      <Stack direction="row" justifyContent="flex-start" sx={{ width: "100%" }}>
        <Typography sx={{
          fontSize: 36,
          fontWeight: 800,
          color: theme.palette.primary.main,
          margin: "12px 0 -6px 14px",
          textTransform: "lowercase"
        }}>
          Carrot & Daikon
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="flex-start" sx={{ width: "100%", height: "30px" }}>
        <Typography sx={{
          fontSize: 18,
          fontWeight: 500,
          color: theme.palette.secondary.main,
          margin: "0 12px -9px 14px"
        }}>
          westminster, ca
        </Typography>
        <Divider orientation="vertical" flexItem variant="middle" />
        <Typography sx={{
          fontSize: 18,
          fontWeight: 500,
          color: "#555",
          margin: "0 0 -9px 14px"
        }}>
          january 10, 2024
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
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
              <TableRow sx={{ "& td": { border: 0, paddingBottom: 0 } }}>
                <TableCell>westminster, ca (7.75%)</TableCell>
                <TableCell align="right">12.89</TableCell>
              </TableRow>
              <TableRow sx={{ "& td": { border: 0, paddingBottom: 0 } }}>
                <TableCell>tip (15%)</TableCell>
                <TableCell align="right">6.35</TableCell>
              </TableRow>
              <TableRow sx={{ "& td": { fontWeight: 700 }}}>
                <TableCell>total</TableCell>
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
