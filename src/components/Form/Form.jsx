import { useState } from "react";
import { NoteContext } from "../../context/NoteContext";
import data from '../../data.json'
import ToDoList from "../ToDoList/ToDoList";






const Form = () => {
    const [note, setNote] = useState(data)

   


    return (
        <div>
            <ToDoList note = {note}/>






        </div>
    )
}



export default Form