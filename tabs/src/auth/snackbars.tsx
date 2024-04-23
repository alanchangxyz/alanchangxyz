import type { Dispatch, SetStateAction } from "react";
import { Alert, Snackbar } from '@mui/material';
import { Block, Check } from '@mui/icons-material';

interface AuthSnackbarProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

interface LoggedInSuccessSnackbarProps extends AuthSnackbarProps {
  email: string;
}

export const LoggedInSuccessSnackbar = ({ email, visible, setVisible }: LoggedInSuccessSnackbarProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={visible}
      autoHideDuration={5000}
      onClose={() => setVisible(false)}
      key="auth-logged-in-success"
    >
      <Alert
        icon={<Check />}
        onClose={() => setVisible(false)}
        severity="success"
        variant="filled"
      >
        logged in as {email}
      </Alert>
    </Snackbar>
  );
};

export const LoggedOutSuccessSnackbar = ({ visible, setVisible }: AuthSnackbarProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={visible}
      autoHideDuration={5000}
      onClose={() => setVisible(false)}
      key="auth-logged-in-success"
    >
      <Alert
        icon={<Check />}
        onClose={() => setVisible(false)}
        severity="success"
        variant="filled"
      >
        logged out successfully
      </Alert>
    </Snackbar>
  );
};

export const AllowlistDenySnackbar = ({ visible, setVisible }: AuthSnackbarProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={visible}
      autoHideDuration={5000}
      onClose={() => setVisible(false)}
      key="auth-allowlist-alert-deny"
    >
      <Alert
        icon={<Block />}
        onClose={() => setVisible(false)}
        severity="error"
        variant="filled"
      >
        this email is not allowlisted
      </Alert>
    </Snackbar>
  );
};
