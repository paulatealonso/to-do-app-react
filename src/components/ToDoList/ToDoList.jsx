import { useContext, useEffect, useState } from "react";
import { NoteContext } from "../../context/NoteContext";
import ToDo from "../ToDo/ToDo";




const ToDoList = () => {

    const { message, deleteTask } = useContext(NoteContext)
    const [currentDate] = useState(new Date())

    
    console.log(message)
    



    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            {message.map((notes, id) =>
               
                    <ToDo key={id} {...notes} currentDate={currentDate} deleteTask={deleteTask} relevance={notes.relevance} tag={notes.tag}/>

            )}
        </div>
    )
}


export default ToDoList