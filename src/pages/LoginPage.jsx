/* eslint-disable react/no-unescaped-entities */
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogo from '../assets/images/google-logo.png';
import { signInWithGoogle } from '../firebase';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const Login = () => {
  const [credential, setCredential] = useState({ ...INITIAL_STATE });

  const loginChangeHandler = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    console.log({ ...credential });
    credential({ ...INITIAL_STATE });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          onSubmit={handleLoginSubmit}
          component="form"
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            type="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            onChange={loginChangeHandler}
            value={credential.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            type="password"
            label="Password"
            autoComplete="password"
            autoFocus
            onChange={loginChangeHandler}
            value={credential.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Typography component="p">
            <Link to="/register">Don't Have an account? Sign Up</Link>
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', mt: '50px' }}>
        <Box sx={{ width: '100%', height: '1px', bgcolor: 'gray' }}></Box>
        <Box sx={{ mx: '4px' }}>or</Box>
        <Box sx={{ width: '100%', height: '1px', bgcolor: 'gray' }}></Box>
      </Box>

      <Box sx={{mt: '50px'}}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #E4E4E4',
            p: '10px',
            cursor: 'pointer',
          }}
        >
          <Box sx={{ ml: '25px'}}>
            <img style={{ width: '35px' }} src={GoogleLogo} alt="google-logo" />
          </Box>
          {/* <Typography
            sx={{ fontWeight: 'bold', m: 'auto' }}
            component="h4"
            variant="h6"
          >
            Sign in With Google
          </Typography> */}
          <Button onClick={signInWithGoogle}>Signin With Google</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
