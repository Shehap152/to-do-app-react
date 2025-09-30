import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmDel({checkDel , setCheckDel , onConfirm}) {

  const handleClickOpen = () => {
        onConfirm()
        setCheckDel(false)
    };

    const handleClose = () => {
        setCheckDel(false)
    };

  return (
    <React.Fragment >
      <Dialog 
        open={checkDel}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
          PaperProps={{
            sx: {
              borderRadius: "24px",
              padding: "12px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              textAlign: "center",
              fontFamily: '"Cairo", sans-serif',
              maxWidth: "380px"
            }
          }}
      >
        <DialogTitle id="responsive-dialog-title" sx={{ textAlign:"center",fontSize: "22px",fontWeight: "700",marginBottom: "12px",color: "red"}}>
          {"رسالة من مهامى"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{color: "#4B5563"}}>
            Are you sure you want to delete this task? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={(e)=>{handleClose() ; e.stopPropagation()}}  color="primary">
            Cancel
          </Button>
          <Button onClick={(e)=>{handleClickOpen() ; e.stopPropagation()}}  color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}