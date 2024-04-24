import type { ReactElement } from 'react';
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

import { dayAbbrs } from '../../utils/date';

const data = [
  {
    id: "a",
    date: new Date(2024, 1, 18),
    title: "Meiji Seimen",
    location: "Costa Mesa, CA",
    total: 65.67
  },
  {
    id: "b",
    date: new Date(2024, 1, 17),
    title: "Hako",
    location: "Irvine, CA",
    total: 34.19
  },
  {
    id: "c",
    date: new Date(2024, 0, 24),
    title: "SongHak BBQ",
    location: "Tustin, CA",
    total: 171.82
  },
  {
    id: "d",
    date: new Date(2024, 0, 8),
    title: "Carrot & Daikon",
    location: "Garden Grove, CA",
    total: 16.93
  },
  {
    id: "e",
    date: new Date(2024, 0, 5),
    title: "Seaside Donuts & Bakery",
    location: "Newport Beach, CA",
    total: 1.25
  },
];

const formatDate = (date: Date): ReactElement => {
  return (
    <Box textTransform="lowercase">
      <Typography
        fontSize={{ md: "1.08rem", xl: "1.17rem" }}
        fontWeight={700}
        marginBottom="-2px"
        color="primary.main"
      >
        {dayAbbrs[date.getDay()]}
      </Typography>
      <Typography
        fontSize={{ md: "0.9rem", xl: "0.94rem" }}
        fontWeight={400}
      >
        {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear().toString().slice(2)}
      </Typography>
    </Box>
  );
};

const formatLocation = (venue: string, location: string): ReactElement => {
  return (
    <Box textTransform="lowercase">
      <Typography
        fontSize={{ md: "1.08rem", xl: "1.17rem" }}
        fontWeight={700}
        marginBottom="-2px"
        color="secondary.main"
      >
        {venue}
      </Typography>
      <Typography
        display="inline"
        fontSize={{ md: "0.92rem", xl: "0.96rem" }}
      >
        {location}
      </Typography>
    </Box>
  );
};

const generateAvatars = (): ReactElement => {
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
          .map((_, index) => (
            <Avatar key={`avatar_${index}`} src={`${avatars[Math.floor(Math.random() * 4)]}`} />
          )
        )}
      </AvatarGroup>
    </>
  );
};

const formatTotal = (total: number): ReactElement => {
  return (
    <>
      <Typography
        display="inline"
        color="primary.dark"
        fontSize={{ md: "1.08rem", xl: "1.17rem" }}
        fontWeight={700}
      >
        {Math.floor(total)}
      </Typography>
      <Typography
        display="inline"
        color="primary.dark"
        fontSize={{ md: "0.96rem", xl: "1.04rem" }}
        fontWeight={600}
      >
        .{Math.round((total - Math.floor(total)) * 100)}
      </Typography>
    </>
  );
};

const Tabs = () => {
  return (
    <Box sx={{ width: '94%', paddingLeft: '3%' }}>
      <Stack direction="row" justifyContent="flex-start" sx={{ marginTop: "35px", marginLeft: "12px" }}>
        <Typography variant="h1" color="primary.main" textTransform="lowercase">
          Tabs
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="flex-end">
        <Button
          disableElevation
          variant="contained"
          color="secondary"
          sx={{
            fontSize: "1rem",
            fontWeight: 600,
            width: "160px",
            margin: "8px 0px 1.5rem 8px",
            padding: "8px"
          }}
        >
          New Tab
        </Button>
      </Stack>
      <TableContainer>
        <Table aria-labelledby="tableTitle">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ fontSize: { md: '1rem', xl: '1.17rem' } }}>date</TableCell>
              <TableCell align="left" />
              <TableCell align="right" sx={{ fontSize: { md: '1rem', xl: '1.17rem' }, paddingRight: 2.5 }}>with</TableCell>
              <TableCell align="right" sx={{ fontSize: { md: '1rem', xl: '1.17rem' }, paddingRight: 2.5 }}>total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((entry) => (
              <TableRow key={entry.id}>
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
