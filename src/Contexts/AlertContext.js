import { useState } from "react";
import { createContext } from "react";
export const AlertContext = createContext()


export const AlertProvider = ({children}) =>{
    const [type , setType] = useState("")
    return (
     <AlertContext.Provider value={{type:type ,setType : setType}}>{children}</AlertContext.Provider>
    )
}