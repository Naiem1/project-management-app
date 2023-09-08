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
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GoogleLogo from '../assets/images/google-logo.png';
import { setUser } from '../store/slices/authSlice';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
};

const Register = () => {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const registerChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    console.log('formData', { ...formData });

    dispatch(setUser({ ...formData }));

    setFormData({ ...INITIAL_STATE });
  };

  console.log('[Register Page - authState]>>', authState);

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
            value={formData.username}
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
            value={formData.email}
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
            value={formData.password}
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
            <Link to="/login">Already have an account? Sign in</Link>
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: '50px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #E4E4E4',
            borderRadius: '3px',
            p: '10px',
            cursor: 'pointer',
          }}
        >
          <Box sx={{ ml: '25px' }}>
            <img style={{ width: '35px' }} src={GoogleLogo} alt="google-logo" />
          </Box>
          <Typography
            sx={{ fontWeight: 'bold', m: 'auto' }}
            component="h4"
            variant="h6"
          >
            Sign in With Google
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
