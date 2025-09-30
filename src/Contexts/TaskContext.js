
import { createContext , useState , useEffect } from "react";
export const TaskContext = createContext()


export const TaskProvider = ({children}) =>{
    const [id , setId] = useState(()=>JSON.parse(localStorage.getItem("lastId") || "0"))
    const [arrayOfTasks,setArrayOfTasks] = useState(()=>JSON.parse(localStorage.getItem("tasks")|| "[]"))
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(arrayOfTasks))
        localStorage.setItem("lastId",JSON.stringify(id))
    },[arrayOfTasks , id])
    return(
        <TaskContext.Provider value={{
            tasks : arrayOfTasks , 
            setTasks : setArrayOfTasks , 
            id : id , 
            setId : setId}}>{children}</TaskContext.Provider>
    )
}