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
    <React.Fragment>
      <Dialog
        open={checkDel}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"رسالة من مهامى"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
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