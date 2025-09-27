import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import ConfirmDel from './ConfirmDel';



import { TaskContext } from '../Contexts/TaskContext';
import { AlertContext } from '../Contexts/AlertContext';
import {AlertEditContext} from '../Contexts/AlertEditContext'
import { useContext , useEffect, useState} from 'react';

export default function TaskInfo({title , info , id , done}){
    const {tasks , setTasks } = useContext(TaskContext)
    const {handelBtnTask , setHandelBtnTask} = useContext(AlertEditContext)
    const {type ,setType , handleClick} = useContext(AlertContext)
    const {handleClickOpen , setTaskEditId} = useContext(AlertEditContext)
    const [checkDel , setCheckDel] = useState(false)


    const taskDetailsStyle = {
        backgroundColor: "#F9FAFB",       
        borderLeft: "4px solid #B22222", 
        borderRadius: "6px",
        padding: "12px 16px",
        marginTop: "8px",
        color: "#374151",              
        fontSize: "14px",
        lineHeight: 1.6,
        whiteSpace: "pre-wrap",
    };

    useEffect(()=>{
        if(handelBtnTask){
            handleClick()
            setHandelBtnTask(false)
        } 
    },[handelBtnTask , setHandelBtnTask , handleClick , type])

    return(
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon fontSize="large"/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography component="span" sx={{width:"100%"}}>{
                        <Box  sx={{display:"flex" ,justifyContent : "space-between" , alignItems : "center"} }>
                            <Typography variant="body1">{title}</Typography>
                            <Stack  direction="row" spacing={2}>
                                <IconButton component="span" color="success" size="small" disabled = {done}
                                    onClick={(event)=>{event.stopPropagation(); taskdone(id) ; setType("done")}}>
                                    <DoneIcon />
                                </IconButton>
                                <IconButton component="span" color="primary" size="small" disabled = {done}
                                    onClick={(event)=>{
                                        event.stopPropagation();
                                        handleClickOpen();;       
                                        setTaskEditId(id)}}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton component="span" color="error" size="small" 
                                    onClick={(event)=>{
                                        event.stopPropagation();
                                        setCheckDel(true)
                                    }}>
                                    <DeleteIcon />
                                </IconButton>
                                <ConfirmDel checkDel={checkDel} setCheckDel={setCheckDel} onConfirm = {() => { deleteTask(id); setType("delete");}} />
                            </Stack>
                        </Box>
                    }
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div style={taskDetailsStyle}>{info}</div>
            </AccordionDetails>
        </Accordion>
    )

    function deleteTask(id){
        const TheTasks = tasks.filter((task)=>{
            return task.id !== id
        })
        setTasks(TheTasks)
    }

    function taskdone(id){
        const TheTasks = tasks.map((task)=>{
            if(task.id === id){
                task.done = true
            }
            return task
        })
        setTasks(TheTasks)
    }
}