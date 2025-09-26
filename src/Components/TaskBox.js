import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import TaskInfo from './TaskInfo';

import { useContext } from 'react';
import { TaskContext } from '../Contexts/TaskContext';

export default function TaskBox({ alignment }) {
  const { tasks } = useContext(TaskContext);

  const filteredTasks = tasks.filter((task) => {
    if (alignment === "الكل") return true;
    if (alignment === "منجز") return task.done;
    return !task.done;
  });

  return (
    <Box mt={2}>
      <Stack spacing={2}>
        {filteredTasks.map((task) => (
          <TaskInfo 
            key={task.id} 
            title={task.title} 
            info={task.info} 
            id={task.id} 
          />
        ))}
      </Stack>
    </Box>
  );
}
