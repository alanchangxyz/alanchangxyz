import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';

const SplitsTable = () => {
  return (
    <TableContainer>
      <Table aria-labelledby="tableTitle">
        <TableBody sx={{ "& td": { border: 0, paddingBottom: 0 } }}>
          <TableRow sx={{ "& td": { paddingTop: "0.6rem" }}}>
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
  )
};

export default SplitsTable;
