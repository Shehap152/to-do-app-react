import { createContext , useState} from "react";

export const AlertEditContext = createContext()

export const AlertEditProvider = ({children})=>{
  const [taskEditId,setTaskEditId] = useState(0)
  const [handelBtnTask , setHandelBtnTask] = useState(false)
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
  };
  return(
    <AlertEditContext.Provider value = {{
      open : open , 
      handleClickOpen: handleClickOpen , 
      handleClose : handleClose , 
      handleSubmit : handleSubmit , 
      taskEditId : taskEditId , 
      setTaskEditId : setTaskEditId ,
      handelBtnTask : handelBtnTask , 
      setHandelBtnTask : setHandelBtnTask}}>{children}</AlertEditContext.Provider>
  )
}