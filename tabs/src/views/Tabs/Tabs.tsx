import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
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

import { dayAbbrs } from '../../utils/date';

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
  {
    date: new Date(2024, 0, 5),
    title: "Seaside Donuts & Bakery",
    location: "Newport Beach, CA",
    total: 1.25
  },
];

const formatDate = (date: Date): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      <p style={{ fontSize: 18, fontWeight: 700, color: theme.palette.primary.main }}>{dayAbbrs[date.getDay()]}</p>
      <p style={{ fontSize: 14, fontWeight: 400 }}>{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear().toString().slice(2)}</p>
    </>
  );
};

const formatLocation = (venue: string, location: string): JSX.Element => {
  const theme = useTheme();
  return (
    <div style={{ textTransform: "lowercase" }}>
      <p style={{ fontSize: 18, fontWeight: 700, color: theme.palette.secondary.main }}>{venue}</p>
      <p style={{ fontSize: 14 }}>{location}</p>
    </div>
  );
};

const generateAvatars = (): JSX.Element => {
  const avatars: string[] = [
    'https://mui.com/static/images/avatar/1.jpg',
    'https://mui.com/static/images/avatar/2.jpg',
    'https://mui.com/static/images/avatar/3.jpg',
    'https://mui.com/static/images/avatar/4.jpg'
  ];
  return (
    <>
      <AvatarGroup max={4}>
        {Array(Math.floor(Math.random() * 6))
          .fill(0)
          .map((_) => (
            <Avatar src={`${avatars[Math.floor(Math.random() * 4)]}`} />
          )
        )}
      </AvatarGroup>
    </>
  );
};

const formatTotal = (total: number): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      <span style={{ fontSize: 18, fontWeight: 700, color: theme.palette.primary.dark }}>{Math.floor(total)}</span>
      <span style={{ fontWeight: 600, color: theme.palette.primary.dark }}>.{Math.round((total - Math.floor(total)) * 100)}</span>
    </>
  );
};

const Tabs = () => {
  const theme = useTheme();
  return (
    <Box sx={{ width: '96%', paddingLeft: '1.5%' }}>
      <Stack direction="row" justifyContent="flex-start" sx={{ width: "100%" }}>
        <Typography sx={{
          fontSize: 36,
          fontWeight: 800,
          color: theme.palette.primary.main,
          margin: "35px 0 -10px 14px"
        }}>
          tabs
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="flex-end" sx={{ width: "100%" }}>
        <Button disableElevation variant="contained" color="secondary" sx={{ width: "17.5%", margin: "5px 5px 12px 8px" }}>
          New Tab
        </Button>
      </Stack>
      <TableContainer>
        <Table aria-labelledby="tableTitle">
          <TableHead>
            <TableRow>
              <TableCell align="left">date</TableCell>
              <TableCell align="left" />
              <TableCell align="right" sx={{ paddingRight: 3 }}>with</TableCell>
              <TableCell align="right" sx={{ paddingRight: 2.5 }}>total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((entry) => (
              <TableRow>
                <TableCell align="left">{formatDate(entry.date)}</TableCell>
                <TableCell align="left">{formatLocation(entry.title, entry.location)}</TableCell>
                <TableCell align="left" sx={{ width: 1/2 }}>{generateAvatars()}</TableCell>
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
    </Box>
  );
};

export default Tabs;
