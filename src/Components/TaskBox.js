import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TaskInfo from "./TaskInfo";
import ConfirmDel from "./ConfirmDel";
import { AlertContext } from "../Contexts/AlertContext";
import { useContext, useState } from "react";

import { StateContext } from "../Contexts/StateContext";

export default function TaskBox({ state }) {
  const { dispatch } = useContext(StateContext);
  const [idDelTask, setIdDelTask] = useState();
  const [checkDel, setCheckDel] = useState(false);
  const { setType, handleClick } = useContext(AlertContext);

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
  };

  return (
    <>
      <Box mt={2} sx={boxStyle}>
        <Stack spacing={1}>
          {state.map((task) => (
            <TaskInfo
              key={task.id}
              title={task.title}
              info={task.info}
              id={task.id}
              done={task.done}
              setIdDelTask={setIdDelTask}
              setCheckDel={setCheckDel}
            />
          ))}
        </Stack>
      </Box>
      <ConfirmDel
        checkDel={checkDel}
        setCheckDel={setCheckDel}
        onConfirm={() => {
          deleteTask(idDelTask);
          setType("delete");
          handleClick();
        }}
      />
    </>
  );

  function deleteTask(id) {
    dispatch({ type: "del", deploy: { id: id } });
  }
}
