import { createContext, useReducer , useContext , useEffect} from "react";
import { ReducerHandlerTaskForm } from "../Reducers/ReducerHandlerTaskForm";
import { TaskContext } from "../Contexts/TaskContext";
export const StateContext = createContext()


export const StateProvider = ({children})=>{
    const { tasks, setTasks, id, setId } = useContext(TaskContext);
    const [state,dispatch] = useReducer(ReducerHandlerTaskForm,tasks)
    useEffect(()=>{setTasks(state)},[state])
    return(
        <StateContext.Provider value={{state : state , dispatch : dispatch}}>{children}</StateContext.Provider>
    )
}