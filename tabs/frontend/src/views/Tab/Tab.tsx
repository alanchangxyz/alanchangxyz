import { useState } from 'react';
import { redirect, useParams, Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Divider,
  Link,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material';
import { Check, EditOutlined, GroupAdd } from '@mui/icons-material';

import { useAuth } from '../../auth/context';
import { ItemizedTable, SplitsTable, TabHeader, TotalsTable } from '../../components';

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
  {
    title: "Chan Chan",
    date: new Date(2022, 9, 4),
    location: {
      city: "Irvine",
      secondary: "Walnut Village",
      state: "CA",
      taxrate: 0.0775
    }
  },
];

const Tab = () => {
  const [copySnackbarVisible, setCopySnackbarVisible] = useState(false);

  const { isLoggedIn } = useAuth();
  const tab = data[Math.floor(Math.random() * data.length)];

  const { id } = useParams();
  if (!id) {
    redirect('/tabs');
  }

  return (
    <>
      <Box sx={{ width: '94%', paddingLeft: '3%' }}>
        {isLoggedIn && (
          <Stack
            direction="row"
            justifyContent="flex-start"
            sx={{ marginTop: "1%", marginLeft: { sm: "16px", md: 0 }, marginBottom: "0.4%" }}
          >
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
        )}
        <TabHeader
          id={id}
          title={tab.title}
          date={tab.date}
          location={tab.location}
          setCopySnackbarVisible={setCopySnackbarVisible}
        />
        <Stack direction={{ sm: "column", md: "row" }} justifyContent="space-between" sx={{ marginTop: "0.1%" }}>
          <ItemizedTable />
          <Box width={{ sm: 0, md: "5%" }} />
          <Stack direction="column" width={{ sm: "100%", md: "500px", xl: "40%" }}>
            <TotalsTable location={tab.location} />
            <Divider sx={{ marginTop: "1.1rem", marginBottom: "0.5rem" }} />
            {isLoggedIn && (
              <Stack direction="row" paddingLeft="12px" paddingRight="12px" paddingTop="0.5rem" paddingBottom="0.3rem">
                <Button
                  disableElevation
                  aria-label="invite"
                  variant="contained"
                  color="primary"
                  sx={{ width: "48%", marginRight: "4%" }}
                  startIcon={<GroupAdd />}
                >
                  Invite
                </Button>
                <Button
                  aria-label="edit-list"
                  variant="outlined"
                  color="primary"
                  sx={{ width: "48%" }}
                  startIcon={<EditOutlined />}
                >
                  Edit List
                </Button>
              </Stack>
            )}
            <SplitsTable />
            <Typography
              color="gray.main"
              fontSize={{ xs: "0.8rem", xl: "0.95rem" }}
              marginLeft="1rem"
              marginTop="1rem"
              sx={{ "userSelect": "none" }}
            >
              hover/click a name to see split
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={copySnackbarVisible}
        autoHideDuration={5000}
        onClose={() => setCopySnackbarVisible(false)}
        key="tab-code-copy-success-alert"
      >
        <Alert
          icon={<Check />}
          onClose={() => setCopySnackbarVisible(false)}
          severity="success"
          variant="filled"
        >
          code copied to clipboard
        </Alert>
      </Snackbar>
    </>
  );
};

export default Tab;
