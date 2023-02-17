import { useContext } from "react";
import { NoteContext } from "../../context/NoteContext";
import ToDo from "../ToDo/ToDo";




const ToDoList = () => {

    const { message } = useContext(NoteContext)


    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
            {message.map((notes, i) =>
                  <ToDo key={i} {...notes} /> 
            )}
        </div>
    )
}


export default ToDoList