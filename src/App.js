import './App.css';
import  MainSection from './Components/MainSection'
import { useState ,useEffect} from 'react';
import { TaskContext } from './Contexts/TaskContext';
import {AlertEditContext} from './Contexts/AlertEditContext'
import { AlertContext } from './Contexts/AlertContext';
import AlertEdit from './Components/AlertEdit';

function App() {
  const [arrayOfTasks,setArrayOfTasks] = useState(()=>{
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
         return JSON.parse(storedTasks);
      }else{
        return []
      }

  })
  const [id , setId] = useState(0)
  const [taskEditId,setTaskEditId] = useState(0)
  const [handelBtnTask , setHandelBtnTask] = useState(false)
// -------------------------------------------------------------------------------------------

  const [open, setOpen] = useState(false);

// -------------------------------------------------------------------------------------------

  const [type , setType] = useState("")
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
  };

  useEffect(()=>{
      localStorage.setItem("tasks",JSON.stringify(arrayOfTasks))
  },[arrayOfTasks])
  
  return (
    <TaskContext.Provider value={{tasks : arrayOfTasks , setTasks : setArrayOfTasks , id : id , setId : setId}}>
      <AlertEditContext.Provider value = {{open : open , handleClickOpen: handleClickOpen , handleClose : handleClose , handleSubmit : handleSubmit , taskEditId : taskEditId , setTaskEditId : setTaskEditId ,handelBtnTask : handelBtnTask , setHandelBtnTask : setHandelBtnTask}}>
          <div className="App">
            <AlertContext.Provider value={{type:type ,setType : setType}}>
              <MainSection/>
              <AlertEdit/>
            </AlertContext.Provider>
          </div>
      </AlertEditContext.Provider>
    </TaskContext.Provider>
  );
}

export default App;
