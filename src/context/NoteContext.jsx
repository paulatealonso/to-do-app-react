import { createContext, useState } from "react";

const NoteContext = createContext()

const ContextProvider = ({ children }) => {
    const [note, setNote] = useState([])
    const [tags, setTags] = useState([])
    const [shipping, setShipping] = useState(0)


    return (
        <NoteContext.Provider value={{note, setNote, shipping, setShipping, tags, setTags}}>
            {children}
        </NoteContext.Provider>
    )
}

export {NoteContext, ContextProvider}