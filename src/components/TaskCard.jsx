import { Button, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import UIModal from './UI/UIModal';
import { useState } from 'react';
import { deleteTask } from '../store/slices/tasksSlice';
import { useDispatch } from 'react-redux';
import EditModal from './UI/EditModal';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const TaskCard = ({ task }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const [update, setUpdate] = useState({ ...task });
  console.log('update', update);


  const handleDelete = (taskId) => {
    dispatch(deleteTask({ taskId }));
    console.log('Deleted');
  }
  return (
    <Card sx={{ minWidth: 275, my: 1 }}>
     <EditModal open={open} handleClose={handleClose} handleOpen={handleOpen} tasks={task} />
      <CardContent>
        <Typography variant="h5" component="div">
          {task?.title}
        </Typography>

        <Typography variant="body2">{task?.description}</Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body2">Due Date: {task?.dueDate}</Typography>
        <Typography variant="body2">Priority: {task?.priority}</Typography>
        <Typography variant="body2">AssignedTo: {task?.assignedTo}</Typography>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
        <Button onClick={() => handleDelete(task.id)} variant="contained" size="small" color="error">
          Delete
        </Button>
        <Button variant="contained" size="small" color="success" onClick={handleOpen}>
          Edit
        </Button>
      </Box>
    </Card>
  );
};

export default TaskCard;
