import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Grid } from '@mui/material';
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
import { useEffect } from 'react';
import { getTaskFromDB, postTaskToDB,  } from '../util/taskController';
import { useSelector } from 'react-redux';

const drawerWidth = 200;

const Board = () => {

  const authState = useSelector(state => state.auth);
  console.log('board', authState);  
  useEffect(() => {
    const task = postTaskToDB({
      title: 'Task1',
      description: 'Description1',
      assignedTo: 'user2',
      user: authState.user,
      dueDate: '10/12/2020',
      priority: 'high',
      status: 'Pending',
    });

    console.log('post-error', task);
  }, []);

  useEffect(() => {
    const task = getTaskFromDB(authState.user.id);

    console.log('getTaskFromDB', task);
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
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
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
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
        <Grid container textAlign="center">
          <Grid item xs={12} md={4} border="1px solid">
            <Typography component="p" variant="h6">
              TODO
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} border="1px solid">
            <Typography component="p" variant="h6">
              PROGRESS
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} border="1px solid">
            <Typography component="p" variant="h6">
              COMPLETED
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Board;

//  bgcolor: '#191C2E'
