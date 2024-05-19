import type { Location } from '../../types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';

interface TotalsTableProps {
  location: Location;
}

const TotalsTable = ({ location }: TotalsTableProps) => {
  return (
    <TableContainer>
      <Table aria-labelledby="tableTitle">
        <TableBody sx={{ "& td": { border: 0, paddingBottom: 0 } }}>
          <TableRow>
            <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }}>subtotal</TableCell>
            <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }} align="right">143.71</TableCell>
          </TableRow>
          <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
            <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' }, textTransform: 'lowercase' }}>{location.city}, {location.state} ({location.taxrate * 100}%)</TableCell>
            <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }} align="right">6.35</TableCell>
          </TableRow>
          <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
            <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }}>tip (15%)</TableCell>
            <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }} align="right">12.89</TableCell>
          </TableRow>
          <TableRow sx={{ "& td": { paddingTop: "0.75rem", fontWeight: 700 }}}>
            <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' }, color: "secondary.main" }}>total</TableCell>
            <TableCell sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }} align="right">162.90</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TotalsTable;
