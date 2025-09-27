import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import TaskInfo from './TaskInfo';

import { useContext } from 'react';
import { TaskContext } from '../Contexts/TaskContext';

export default function TaskBox({ alignment }) {
      const boxStyle = {
          padding: "8px",
          margin: "40px 10px",
          borderRadius: "15px",
          backgroundColor: "",
          maxHeight: "40vh",
          overflow: "auto",
          
          "&::-webkit-scrollbar": {
          width: "6px",
          },
          "&::-webkit-scrollbar-track": {
          background: "transparent", 
          },
          "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,0.3)", 
          borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "rgba(0,0,0,0.5)", 
          },
      }
  const { tasks } = useContext(TaskContext);
  const filteredTasks = tasks.filter((task) => {
    if (alignment === "الكل") return true;
    if (alignment === "منجز") return task.done;
    return !task.done;
  });

  return (
    <Box mt={2} sx={boxStyle}>
      <Stack spacing={1}>
        {filteredTasks.map((task) => (
          <TaskInfo 
            key={task.id} 
            title={task.title} 
            info={task.info} 
            id={task.id} 
            done = {task.done}
          />
        ))}
      </Stack>
    </Box>
  );
}
