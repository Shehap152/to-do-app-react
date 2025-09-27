import Container from '@mui/material/Container';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
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
        <Container p={2} maxWidth = "md" sx={{padding : "8px", margin : "40px 10px" , borderRadius : "15px" , backgroundColor : "white" , boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)"}}>
            <div>
                <h1 style={{fontSize : "50px", color:"#B22222" ,fontFamily:"ruwudu"}}>مهامي</h1><Divider variant="middle" component="hr" sx={{mb:2 , width:"50%" , margin :" 8px auto" , height : "1px" , backgroundColor : "#B22222"}} />
                <ToggleButtonGroup
                    color="error"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    size='large'
                    sx={{mt:2}}
                    >
                    <ToggleButton value="غير منجز">غير منجز</ToggleButton>
                    <ToggleButton value="منجز">منجز</ToggleButton>
                    <ToggleButton value="الكل">الكل</ToggleButton>
                </ToggleButtonGroup>
            
                <AlertContext.Provider value={{type:type ,setType : setType , handleClick : handleClick , setOpen : setOpen}}>
                    <TaskBox alignment = {alignment}/>
                    <TaskForm/>
                </AlertContext.Provider>
                <Snackbar key={new Date().getTime()} open={open} autoHideDuration={6000} onClose={handleClose} sx={{marginBotto : "25px", mt : 2}} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
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

