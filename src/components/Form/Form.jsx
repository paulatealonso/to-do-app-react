import { useState } from "react";
import data from '../../data.json'
import InputForm from "../InputForm/InputForm";
import ToDoList from "../ToDoList/ToDoList";



const Form = () => {
    const [note, setNote] = useState(data)

    const done = (id) => {
        console.log('task', id)
        setNote(note.map((notes) => {
            return notes.id === Number(id) ? {...notes, completed: !notes.completed} : {...notes}

        }))
    }

    const deleteNote = (id) => {
        setNote([...note].filter(notes => notes.id !== id))
        
    }

    const addNote = (newNote) => {
        let newMessage = { id : +new Date(), task: newNote, completed: false}
        

        setNote([...note, newMessage])
    }


    return (
        <div>
            <ToDoList note={note} done = {done} deleteNote = {deleteNote}/>
            <InputForm addNote={addNote}/>

            

        </div>
    )
}



export default Form