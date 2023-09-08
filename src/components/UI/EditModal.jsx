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
import { getItemFromLocalStorage } from '../../util/storage';
import { updateTask } from '../../store/slices/tasksSlice';

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

const EditModal = ({ open, handleClose, tasks }) => {
  const [task, setTask] = useState({ ...INITIAL_STATE });
  const user = getItemFromLocalStorage('users');
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const taskState = useSelector((state) => state.tasks.task);
  const [updatedTask, setUpdatedTask] = useState({ ...tasks });

  console.log('update Task>> board', updatedTask);

  // const handleChange = (event) => {
  //   setUpdatedTask({
  //     ...updatedTask,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateTask({
        updatedTask,
      })
    );
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
                onChange={(e) =>
                  setUpdatedTask({ ...updatedTask, title: e.target.value })
                }
                value={updatedTask.title}
              />

              <Box>
                <label>Description</label>
                <textarea
                  name="description"
                  style={{ width: '100%' }}
                  required
                  rows={5}
                  value={updatedTask.description}
                  onChange={(e) =>
                    setUpdatedTask({
                      ...updatedTask,
                      description: e.target.value,
                    })
                  }
                />
              </Box>

              <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={updatedTask.priority}
                  name="priority"
                  label="Priority"
                  fullWidth
                  onChange={(e) =>
                    setUpdatedTask({ ...updatedTask, priority: e.target.value })
                  }
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
                  value={updatedTask.status}
                  name="status"
                  label="Status"
                  onChange={(e) =>
                    setUpdatedTask({ ...updatedTask, status: e.target.value })
                  }
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
                  value={updatedTask.assignedTo}
                  name="assignedTo"
                  label="Assign To"
                  onChange={(e) =>
                    setUpdatedTask({
                      ...updatedTask,
                      assignedTo: e.target.value,
                    })
                  }
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
                  onChange={(e) =>
                    setUpdatedTask({ ...updatedTask, dueDate: e.target.value })
                  }
                  value={updatedTask.dueDate}
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
export default EditModal;
