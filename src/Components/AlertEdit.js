import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {AlertEditContext} from '../Contexts/AlertEditContext'
import { useContext , useState} from 'react';
import { TaskContext } from '../Contexts/TaskContext';
import { AlertContext } from '../Contexts/AlertContext';

export default function AlertEdit(){
    const {tasks,setTasks} = useContext(TaskContext)
    const {setType} = useContext(AlertContext)
    const {open , handleClose , handleSubmit , taskEditId } = useContext(AlertEditContext)
    const {setHandelBtnTask} = useContext(AlertEditContext)
    const [title ,setTitle] = useState("")
    const [info ,setInfo] = useState("")

    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>مهامى</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    "Please update the task details below:"
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
                        onChange={(e)=>{setTitle(e.target.value)}}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="taskInfo"
                        name="info"
                        label="تفاصيل المهمة"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={info}
                        onChange={(e)=>{setInfo(e.target.value)}}
                    />
                 </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" form="subscription-form" onClick={()=>{updateTask(taskEditId)}}>
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    )
    function updateTask(id){
        if(title){
            const theTasks = tasks.map((task)=>{
                if(task.id === id){
                    return {...task , title : title , info : info}
                }
                return task
            })
            setTasks(theTasks)
            setHandelBtnTask(true)
            setTitle("")
            setInfo("")
            handleClose()
            setType("edit")
        }
    }
}