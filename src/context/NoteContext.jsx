import { createContext, useState } from "react";

const NoteContext = createContext()

const ContextProvider = ({ children }) => {
    const [note, setNote] = useState([])
    const [shipping, setShipping] = useState(0)


    return (
        <NoteContext.Provider value={{note, setNote, shipping, setShipping}}>
            {children}
        </NoteContext.Provider>
    )
}

export {NoteContext, ContextProvider}