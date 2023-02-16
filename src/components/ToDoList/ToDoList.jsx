import ToDo from "../ToDo/ToDo"



const ToDoList = ({note , done, deleteNote}) => {

   


    return (
        <div>
            {note.map((notes, index) => (<ToDo key={index} notes = {notes} done = {done} deleteNote = {deleteNote}/>))}
            

        </div>
    )
}


export default ToDoList