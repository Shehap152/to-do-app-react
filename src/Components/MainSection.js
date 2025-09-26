import Container from '@mui/material/Container';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import TaskForm from './TaskForm';
import TaskBox from './TaskBox';
import { useState  , useContext} from 'react';
import { AlertContext } from '../Contexts/AlertContext';


export default function  MainSection() {
    const [open, setOpen] = useState(false);
    const {type , setType } = useContext(AlertContext)
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const [alignment, setAlignment] = useState('الكل');
    const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    };
    return (
        <Container p={2} maxWidth = "md" sx={{border :"1px solid black" , padding : "8px", margin : "0px 10px" , borderRadius : "15px"}}>
            <div style={{backgroundColor :"re"}}>
                <h1 style={{fontSize : "50px", color:"red"}}>مهامى</h1>
                <ToggleButtonGroup
                    color="error"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    size='large'
                    >
                    <ToggleButton value="غير منجز">غير منجز</ToggleButton>
                    <ToggleButton value="منجز">منجز</ToggleButton>
                    <ToggleButton value="الكل">الكل</ToggleButton>
                </ToggleButtonGroup>
            
                <AlertContext.Provider value={{type:type ,setType : setType , handleClick : handleClick}}>
                    <TaskBox alignment = {alignment}/>
                    <TaskForm/>
                </AlertContext.Provider>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity= {type === "error" ? "error" : "success"}
                        variant="filled"
                        sx={{ width: '100%' }}>
                        {type === "edit"    ? "Message updated successfully!" : type === "done" 
                                            ? "Task completed successfully!"  : type === "add" 
                                            ? "New task added successfully!"  : type === "error" ?"Please enter the task title before adding." : "Task deleted successfully!"}
                    </Alert>
                </Snackbar>
            </div>
        </Container>
    )
}

