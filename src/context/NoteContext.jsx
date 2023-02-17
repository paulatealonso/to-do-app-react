import { createContext, useState } from "react";
import { v4 } from "uuid"

const NoteContext = createContext()

const ContextProvider = ({ children }) => {
    const [message, setMessage] = useState([])
    const [shipping, setShipping] = useState(0)

    const addTask = (task , date, currentDate, relevance, tag) =>
    setMessage([
        ...message,
        {
            id: v4(),
            task,
            currentDate,
            date,
            tag,
            relevance,
            complete: false
        }
    ])

    const setStatusTask = (id, status) => {
        setMessage(message.map(t => t.id === id ? {...t, complete: status} : t))
    }


    return (
        <NoteContext.Provider value={{message, setMessage, shipping, setShipping, addTask, setStatusTask}}>
            {children}
        </NoteContext.Provider>
    )
}

export {NoteContext, ContextProvider}