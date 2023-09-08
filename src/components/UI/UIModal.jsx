import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../../store/slices/tasksSlice';
import { getItemFromLocalStorage } from '../../util/storage';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#ececf0',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const INITIAL_STATE = {
  title: '',
  description: '',
  status: 'pending',
  priority: 'low',
  dueDate: '',
  assignedTo: '',
};

const UIModal = ({ open, handleClose }) => {
  const [task, setTask] = useState({ ...INITIAL_STATE });
  const user = getItemFromLocalStorage('users');
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleChange = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  console.log('Task>> board', task);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createTask({
        task: { ...task, user: authState.user },
        userId: authState.user.id,
      })
    );

    setTask({ ...INITIAL_STATE });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Add Task</h1>
          <Box>
            <Box
              onSubmit={handleSubmit}
              component="form"
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                label="Title"
                required
                fullWidth
                name="title"
                type="text"
                autoComplete="title"
                autoFocus
                onChange={handleChange}
                value={task.title}
              />

              <Box>
                <label>Description</label>
                <textarea
                  name="description"
                  style={{ width: '100%' }}
                  required
                  rows={5}
                  value={task.description}
                  onChange={handleChange}
                />
              </Box>

              <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={task.priority}
                  name="priority"
                  label="Priority"
                  fullWidth
                  onChange={handleChange}
                >
                  <MenuItem value={'low'}>Low</MenuItem>
                  <MenuItem value={'medium'}>Medium</MenuItem>
                  <MenuItem value={'high'}>High</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={task.status}
                  name="status"
                  label="Status"
                  onChange={handleChange}
                >
                  <MenuItem value={'pending'}>Pending</MenuItem>
                  <MenuItem value={'inprogress'}>Inprogress</MenuItem>
                  <MenuItem value={'completed'}>Completed</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Assign To</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={task.assignedTo}
                  name="assignedTo"
                  label="Assign To"
                  onChange={handleChange}
                >
                  {user?.map((user) => (
                    <MenuItem key={user.id} value={user.username}>
                      {user.username}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <label>Due Date:</label>
              <FormControl fullWidth>
                <TextField
                  name="dueDate"
                  type="date"
                  onChange={handleChange}
                  value={task.dueDate}
                />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add New Task
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default UIModal;
