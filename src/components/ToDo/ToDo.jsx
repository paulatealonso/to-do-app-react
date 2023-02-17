import { useContext, useState } from "react";
import { NoteContext } from "../../context/NoteContext";
import './ToDo.css'

const ToDo = ({ id, task, complete, date, currentDate, setCurrentDate, relevance }) => {

    const { setStatusTask } = useContext(NoteContext)
    const checkTask = e => setStatusTask(id, e.target.checked)
    const [isEditing, setIsEditing] = useState(false);

    const handleUpdateDate = () => {
        setCurrentDate(new Date());
        setIsEditing(false);
    }

    const formattedDate = currentDate.toLocaleString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    let dotColor;

    switch (relevance) {
        case '1':
            dotColor = 'red';
            break;
        case '2':
            dotColor = 'orange';
            break;
        case '3':
            dotColor = 'green';
            break;
        default:
            dotColor = 'black';
    }





    return (
        <div className="conteiner-list">
            <div id="check-name">
                <input type="checkbox" onChange={checkTask} />
                <h3 className={complete ? 'task-done' : ''}>{task}</h3>
            </div>

            <div className="box-date">
                <span>{date}</span>
                <p>Fecha de creación: {isEditing ? (
                    <input type="datetime-local" value={currentDate.toISOString().slice(0, -8)} onChange={(e) => setCurrentDate(new Date(e.target.value))} onBlur={() => setIsEditing(false)}
                        autoFocus />
                ) : (
                    <span onClick={() => setIsEditing(true)}>{formattedDate}</span>

                )}</p>
            </div>

            <div
                className="dot"
                style={{ backgroundColor: dotColor }}
            ></div>
        </div>
    )
}


export default ToDo