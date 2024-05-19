import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';

const ItemizedTable = () => {
  return (
    <TableContainer>
      <Table aria-labelledby="tableTitle">
        <TableBody sx={{ "& td": { border: 0, paddingLeft: { sm: "16px", md: "1.6%" }, textTransform: "lowercase" } }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 500, fontSize: { md: "1.05rem", xl: "1.2rem" } }}>salmon</TableCell>
            <TableCell sx={{ fontSize: { md: "1.05rem", xl: "1.2rem" } }} align="right">12.89</TableCell>
          </TableRow>
          <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
            <TableCell sx={{ fontWeight: 500, fontSize: { md: "1.05rem", xl: "1.2rem" }, textTransform: "lowercase" }}>spinach</TableCell>
            <TableCell sx={{ fontSize: { md: "1.05rem", xl: "1.2rem" } }} align="right">210.21</TableCell>
          </TableRow>
          <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
            <TableCell sx={{ fontWeight: 500, fontSize: { md: "1.05rem", xl: "1.2rem" } }}>steak</TableCell>
            <TableCell sx={{ fontSize: { md: "1.05rem", xl: "1.2rem" } }} align="right">35.74</TableCell>
          </TableRow>
          <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
            <TableCell sx={{ fontWeight: 500, fontSize: { md: "1.05rem", xl: "1.2rem" } }}>strawberries</TableCell>
            <TableCell sx={{ fontSize: { md: "1.05rem", xl: "1.2rem" } }} align="right">86.53</TableCell>
          </TableRow>
          <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
            <TableCell sx={{ fontWeight: 500, fontSize: { md: "1.05rem", xl: "1.2rem" } }}>scrambled eggs</TableCell>
            <TableCell sx={{ fontSize: { md: "1.05rem", xl: "1.2rem" } }} align="right">77.62</TableCell>
          </TableRow>
          <TableRow sx={{ "& td": { paddingTop: "0.15rem" } }}>
            <TableCell sx={{ fontWeight: 500, fontSize: { md: "1.05rem", xl: "1.2rem" } }}>squash</TableCell>
            <TableCell sx={{ fontSize: { md: "1.05rem", xl: "1.2rem" } }} align="right">9.03</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemizedTable;
