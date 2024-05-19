import type { Location } from '../../types';
import { Dispatch } from 'react';
import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { ContentCopy } from '@mui/icons-material';

import { months } from '../../utils/date';

interface TabHeaderProps {
  id: string | undefined,
  title: string,
  date: Date,
  location: Location,
  setCopySnackbarVisible: Dispatch<boolean>,
}

const TabHeader = ({ id, title, date, location, setCopySnackbarVisible }: TabHeaderProps) => {

  return (
    <Box marginLeft={{ xs: "16px", md: "1.05%" }}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        sx={{ marginTop: "1.6%" }}
      >
        <Typography
          variant="h1"
          color="primary.main"
          textTransform="lowercase"
        >
          {title}
        </Typography>
        <Button
          variant="text"
          aria-label="copy"
          endIcon={(
            <ContentCopy sx={{
              color: "gray.main",
              width: "1.05rem",
              paddingTop: "0.05rem",
              paddingLeft: "0.05rem",
              paddingRight: "0.2rem",
            }} />
          )}
          sx={{
            marginTop: "1.2rem",
            marginLeft: "0.6rem",
            paddingLeft: "0.7rem",
            paddingRight: "0.7rem",
            paddingTop: "0.4rem",
            paddingBottom: 0,
            userSelect: "unset",
          }}
          onClick={() => {
            navigator.clipboard.writeText(id!);
            setCopySnackbarVisible(true);
          }}
        >
          <Typography variant="h6" color="gray.main" paddingLeft="-0.1rem">
            {id}
          </Typography>
        </Button>
      </Stack>
      <Stack direction="row" justifyContent="flex-start" sx={{ height: "30px", marginBottom: "0.2%" }}>
        <Typography
          variant="h6"
          fontWeight={500}
          color="secondary.main"
          textTransform="lowercase"
        >
          {location.city}, {location.secondary}
        </Typography>
        <Divider orientation="vertical" flexItem variant="middle" sx={{ marginLeft: "12px", marginRight: "14px", marginBottom: "6px" }} />
        <Typography
          variant="h6"
          color="gray.dark"
          textTransform="lowercase"
        >
          {months[date.getMonth() + 1]} {date.getDate()}, {date.getFullYear()}
        </Typography>
      </Stack>
    </Box>
  );
};

export default TabHeader;
