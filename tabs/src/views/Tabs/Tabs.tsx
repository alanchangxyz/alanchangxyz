import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar
} from '@mui/material';

const data = [
  {
    date: new Date(2024, 1, 18),
    title: "Meiji Seimen",
    location: "Costa Mesa, CA",
    total: 65.67
  },
  {
    date: new Date(2024, 1, 17),
    title: "Hako",
    location: "Irvine, CA",
    total: 34.19
  },
  {
    date: new Date(2024, 0, 24),
    title: "SongHak BBQ",
    location: "Tustin, CA",
    total: 171.82
  },
  {
    date: new Date(2024, 0, 8),
    title: "Carrot & Daikon",
    location: "Garden Grove, CA",
    total: 16.93
  },
];

const monthAbbrs: Record<number, String> = {
  1: "JAN",
  2: "FEB",
  3: "MAR",
  4: "APR",
  5: "MAY",
  6: "JUN",
  7: "JUL",
  8: "AUG",
  9: "SEP",
  10: "OCT",
  11: "NOV",
  12: "DEC"
};

const dayAbbrs: Record<number, String> = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT"
};

const formatDate = (date: Date): JSX.Element => (
  <>
    <p style={{ fontSize: 18, fontWeight: 700 }}>{dayAbbrs[date.getDay()]}</p>
    {/* <p>{monthAbbrs[date.getMonth()]}</p> */}
    <p style={{ fontSize: 14 }}>{date.getMonth() + 1}/{date.getDate()}</p>
  </>
);

const formatLocation = (venue: string, location: string): JSX.Element => (
  <>
    <p style={{ fontSize: 18, fontWeight: 700 }}>{venue}</p>
    <p style={{ fontSize: 14 }}>{location}</p>
  </>
);

const formatTotal = (total: number): JSX.Element => (
  <>
    <span style={{ fontSize: 18, fontWeight: 700, color: "#222" }}>{Math.floor(total)}</span>
    <span style={{ fontWeight: 600, color: "gray" }}>.{Math.round((total - Math.floor(total)) * 100)}</span>
  </>
);

const Tabs = () => {
  return (
    <>
      <p>Tabs</p>
      <TableContainer>
        <Table aria-labelledby="tableTitle">
          <Box sx={{ width: '100%' }}>
            <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 }}}>

            </Toolbar>

          </Box>
          <TableBody>
            {data.map((entry) => (
              <TableRow>
                <TableCell align="left">{formatDate(entry.date)}</TableCell>
                <TableCell align="left">{formatLocation(entry.title, entry.location)}</TableCell>
                <TableCell align="right">{formatTotal(entry.total)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          rowsPerPage={10}
          component="div"
          count={data.length}
          page={0}
          onPageChange={() => null}
        />
      </TableContainer>
    </>
  );
};

export default Tabs;
