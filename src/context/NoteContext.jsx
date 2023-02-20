import { createContext, useState } from "react";
import { v4 } from "uuid"

const NoteContext = createContext()

const ContextProvider = ({ children }) => {
    const [message, setMessage] = useState([])
   
    

    const addTask = (task , date, currentDate, relevance, tag) =>
    setMessage([
        ...message,
        {
            id: v4(),
            task,
            currentDate,
            date,
            relevance,
            tag,
            complete: false
        }
    ])



    const setStatusTask = (id, status) => {
        setMessage(message.map(t => t.id === id ? {...t, complete: status} : t))
       
    }

    const deleteTask = (id) => {
        setMessage(message.filter((t) => t.id !== id));
    }

   

    return (
        <NoteContext.Provider value={{message, setMessage, addTask, setStatusTask, deleteTask}}>
            {children}
        </NoteContext.Provider>
    )
}

export {NoteContext, ContextProvider}