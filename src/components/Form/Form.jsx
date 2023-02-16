import { useState } from "react";
import { NoteContext } from "../../context/NoteContext";
import data from '../../data.json'
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




    return (
        <div>
            <ToDoList note={note} done = {done} deleteNote = {deleteNote}/>

            {/* <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget)
                setNote((items) => [...items, formData.get('todo-list')])
            }}>
                <input name="todo-list" />
                <button type="submit"> Add note </button>

            </form>

            <div>
                {note.map((item) =>
                    <div>
                        {item}
                    </div>)}

            </div> */}





        </div>
    )
}



export default Form