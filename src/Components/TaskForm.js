import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { StateContext } from "../Contexts/StateContext";
import { TextField } from "@mui/material";
import { TaskContext } from "../Contexts/TaskContext";
import { AlertContext } from "../Contexts/AlertContext";
import { useContext, useState } from "react";

export default function TaskForm() {
  const { dispatch } = useContext(StateContext);
  const { id, setId } = useContext(TaskContext);
  const { setType, handleClick } = useContext(AlertContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskInfo, setTaskInfo] = useState("");
  return (
    <Box mt={2}>
      <Grid container spacing={1}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
            color="error"
            label="عنوان المهمة"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "red",
                },
                "&:hover fieldset": {
                  borderColor: "red",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "red",
                },
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            value={taskInfo}
            onChange={(e) => {
              setTaskInfo(e.target.value);
            }}
            color="error"
            label="تفاصيل المهمة"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "red",
                },
                "&:hover fieldset": {
                  borderColor: "red",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "red",
                },
              },
            }}
          />
        </Grid>
        <Grid
          size={{ xs: 5 }}
          sx={{ display: "flex", justifyContent: "center", margin: "auto" }}
        >
          <Button
            variant="contained"
            color="success"
            endIcon={<AddIcon />}
            onClick={() => {
              if (taskTitle) {
                setId((id) => id + 1);
                dispatch({
                  type: "add",
                  deploy: { id: id, title: taskTitle, info: taskInfo },
                });
                setTaskTitle("");
                setTaskInfo("");
                setType("add");
                handleClick();
              } else {
                setType("error");
                handleClick();
              }
            }}
            fullWidth
            sx={{ height: "100%", fontSize: "20px" }}
          >
            أضافة
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
