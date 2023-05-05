import { useState } from "react";
import { signIn } from "../../firebase";

import "./style.css";

import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate } from "react-router-dom";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [emailReset, setEmailReset] = useState<string>("");
  const [messageReset, setMessageReset] = useState<string>("");
  const [messageResetStyle, setMessageResetStyle] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [error, setError] = useState<string>("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const auth = getAuth();
  useEffect(() => {
    const logged = auth.onAuthStateChanged((user: any) => {
      if (user) {
        setIsLoggedIn(true);
      }
    });
    return logged;
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoadingLogin(true);

    try {
      await signIn(email.toString(), password.toString());
    } catch (error) {
      setError("Incorrect email or password!");
    }
    setLoadingLogin(false);
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessageReset("Password reset email sent!");
      setMessageResetStyle("correct");
    } catch (error) {
      setMessageReset("Error sending reset email!");
      setMessageResetStyle("error");

      console.log(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailReset(event.target.value);
  };

  const handleSubmitResetPassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setLoading(true);

    await resetPassword(emailReset);

    setEmailReset("");
    setLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 13,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <p></p>
            {loadingLogin ? (
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <>
                <p className="errorLogin">{error}</p>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </>
            )}
            <Grid container>
              <Grid item xs>
                <Link
                  onClick={handleOpen}
                  style={{ cursor: "pointer" }}
                  variant="body2"
                >
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                Forgot password?
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmitResetPassword}
                noValidate
                sx={{ mt: 1 }}
              >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Enter your recovery email
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={emailReset}
                  onChange={handleChange}
                />

                {loading ? (
                  <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <>
                    <p className={messageResetStyle}>{messageReset}</p>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Send
                    </Button>
                  </>
                )}
              </Box>
            </Box>
          </Modal>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Login;
