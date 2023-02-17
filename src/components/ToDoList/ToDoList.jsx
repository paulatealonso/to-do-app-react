import { useContext } from "react";
import { NoteContext } from "../../context/NoteContext";
import ToDo from "../ToDo/ToDo";




const ToDoList = () => {

    const { message } = useContext(NoteContext)


    return (
        <div>
            {message.map((notes, i) =>
                  <ToDo key={i} {...notes} /> 
            )}
        </div>
    )
}


export default ToDoList