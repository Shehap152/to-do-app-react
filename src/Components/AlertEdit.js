import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AlertEditContext } from "../Contexts/AlertEditContext";
import { useContext, useState } from "react";
import { AlertContext } from "../Contexts/AlertContext";
import { StateContext } from "../Contexts/StateContext";

export default function AlertEdit() {
  const { setType } = useContext(AlertContext);
  const { open, handleClose, handleSubmit, taskEditId } =
    useContext(AlertEditContext);
  const { setHandelBtnTask } = useContext(AlertEditContext);
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const { dispatch } = useContext(StateContext);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          borderRadius: "24px",
          padding: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          textAlign: "center",
          fontFamily: '"Cairo", sans-serif',
          maxWidth: "380px",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontSize: "22px",
          fontWeight: "700",
          marginBottom: "12px",
          color: "red",
        }}
      >
        رسالة من مهامى
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: "#4B5563" }}>
          Please update the task details below:
        </DialogContentText>
        <form onSubmit={handleSubmit} id="subscription-form">
          <TextField
            autoFocus
            required
            margin="dense"
            id="taskTitle"
            name="title"
            label="عنوان المهمة"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            margin="dense"
            id="taskInfo"
            name="info"
            label="تفاصيل المهمة"
            type="text"
            fullWidth
            variant="standard"
            value={info}
            onChange={(e) => {
              setInfo(e.target.value);
            }}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          color="success"
          type="submit"
          form="subscription-form"
          onClick={() => {
            updateTask(taskEditId);
          }}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );

  function updateTask(id) {
    if (title) {
      dispatch({ type: "edit", deploy: { id: id, title: title, info: info } });
      setHandelBtnTask(true);
      setTitle("");
      setInfo("");
      handleClose();
      setType("edit");
    }
  }
}
