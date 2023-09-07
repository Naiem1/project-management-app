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
            <Link to="/register">Have not an account? Register</Link>
          </Typography>
          
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
