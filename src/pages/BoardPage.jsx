import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Button, Chip, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskCard from '../components/TaskCard';
import UIModal from '../components/UI/UIModal';
import { getTask } from '../store/slices/tasksSlice';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

const drawerWidth = 200;

const Board = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const task = useSelector((state) => state?.tasks?.task);
  const authState = useSelector((state) => state.auth.user);

    // useEffect(() => {
    //   console.log('Triggered');
    //   dispatch(getTask({ userId: authState.id }));
    // }, []);

  // if (!task) {
  //   return <Loading/>
  // }


  const todoTask = task?.filter((task) => task.status === 'pending');
  const inProgress = task?.filter((task) => task.status === 'inprogress');
  const completed = task?.filter((task) => task.status === 'completed');

  return (
    <Box sx={{ display: 'flex' }}>
      <UIModal open={open} handleClose={handleClose} handleOpen={handleOpen} />
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: '#ffff',
          height: '90px',
        }}
      >
        <Toolbar>

          <Typography variant="h6" sx={{color: 'black', mr:3}}><Link to="/register">Register</Link></Typography>
          <Typography variant="h6" sx={{color: 'black'}}><Link to='/login'>Login</Link></Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: 'gray', ml: 'auto' }}
          >
            {authState.username}
            <br />
            {authState.email}
            
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            // bgcolor: '#191C2E',
            // color: '#c7c1c1'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, pt: 5, px: 1 }}>
        <Toolbar />
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}
            >
              <Chip label="Pending" color="error" />

              <Button
                size="small"
                variant="contained"
                sx={{ fontSize: '10px' }}
                onClick={handleOpen}
              >
                Add New Task
              </Button>
            </Box>

            <Box sx={{ height: '80vh', overflowY: 'scroll' }}>
              <Box sx={{ mt: 5, px: 2 }}>
                {todoTask.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}
            >
              <Chip label="In Progress" color="warning" />
              <Button
                size="small"
                variant="contained"
                sx={{ fontSize: '10px' }}
                onClick={handleOpen}
              >
                Add New Task
              </Button>
            </Box>
            <Box sx={{ height: '80vh', overflowY: 'scroll' }}>
              <Box sx={{ mt: 5, px: 2 }}>
                {inProgress.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}
            >
              <Chip label="Completed" color="success" />
              <Button
                size="small"
                variant="contained"
                sx={{ fontSize: '10px' }}
                onClick={handleOpen}
              >
                Add New Task
              </Button>
            </Box>
            <Box sx={{ height: '80vh', overflowY: 'scroll' }}>
              <Box sx={{ mt: 5, px: 2 }}>
                {completed.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Board;

//  bgcolor: '#191C2E'
