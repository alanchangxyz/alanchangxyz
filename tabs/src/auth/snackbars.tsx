import type { Dispatch, SetStateAction } from "react";
import { Alert, Snackbar } from '@mui/material';
import { Block, Check } from '@mui/icons-material';

interface AuthSnackbarProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

interface AuthSnackbarWithEmailProps extends AuthSnackbarProps {
  email: string;
}

export const LoggedInSuccessSnackbar = ({ email, visible, setVisible }: AuthSnackbarWithEmailProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={visible}
      autoHideDuration={5000}
      onClose={() => setVisible(false)}
      key="auth-logged-in-success-alert"
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
      key="auth-logged-out-success-alert"
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

export const LoginRequiredSnackbar = ({ visible, setVisible }: AuthSnackbarProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={visible}
      autoHideDuration={5000}
      onClose={() => setVisible(false)}
      key="auth-login-required-alert"
    >
      <Alert
        icon={<Block />}
        onClose={() => setVisible(false)}
        severity="error"
        variant="filled"
      >
        you must be logged in to view this page
      </Alert>
    </Snackbar>
  );
};

export const AllowlistDenySnackbar = ({ email, visible, setVisible }: AuthSnackbarWithEmailProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={visible}
      autoHideDuration={5000}
      onClose={() => setVisible(false)}
      key="auth-allowlist-deny-alert"
    >
      <Alert
        icon={<Block />}
        onClose={() => setVisible(false)}
        severity="error"
        variant="filled"
      >
        {email} is not an allowlisted email
      </Alert>
    </Snackbar>
  );
};
