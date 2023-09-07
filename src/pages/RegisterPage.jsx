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
  username: '',
  email: '',
  password: '',
};

const Register = () => {
  const [register, setRegister] = useState({ ...INITIAL_STATE });

  const registerChangeHandler = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    console.log({ ...register });

    setRegister({ ...INITIAL_STATE });
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
          Sign Up
        </Typography>
        <Box
          onSubmit={handleRegisterSubmit}
          component="form"
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            name="username"
            type="text"
            label="Username"
            autoComplete="username"
            autoFocus
            onChange={registerChangeHandler}
            value={register.username}
          />

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
            onChange={registerChangeHandler}
            value={register.email}
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
            onChange={registerChangeHandler}
            value={register.password}
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
            <Link to="/login">Have an account? Login</Link>
          </Typography>

        
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
