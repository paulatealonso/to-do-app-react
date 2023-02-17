import { useContext, useState } from "react";
import { NoteContext } from "../../context/NoteContext";
import './ToDo.css'
import calendar from '../assets/calendar.png'


const ToDo = ({ id, task, complete, date, currentDate, setCurrentDate, relevance, tag }) => {

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
            dotColor = '#D8A2FF';
            break;
        case '2':
            dotColor = '#A8FFD9';
            break;
        case '3':
            dotColor = '#E7008F';
            break;
        default:
            dotColor = 'black';
    }





    return (
        <div className="conteiner-list" style={{ backgroundColor: dotColor }}>
            <div className="card-info" style={{ backgroundColor: 'transparent' }}>
                <div id="check-name">
                    <input type="checkbox" onChange={checkTask} />
                    <h3 className={complete ? 'task-done' : ''}>{task}</h3>
                </div>

                <div id="tag-task">
                    {tag && <p>✨{tag}✨</p>}
                </div>



                <div className="box-date">

                    <div className="calendar-box" id="datetime"> {isEditing ? (
                        <input type="datetime-local"
                            value={currentDate.toISOString().slice(0, -8)}
                            onChange={(e) => setCurrentDate(new Date(e.target.value))}
                            onBlur={() => setIsEditing(false)}
                            autoFocus />) : (

                        <p className="transparent" id="line" onClick={() => setIsEditing(true)}>{formattedDate}</p>
                    )}
                    </div>


                    <div style={{ paddingTop: '25px' }} className="calendar-box">
                        <img src={calendar} alt='calendar' />
                        <p className="transparent">{date}</p>
                    </div>

                </div>
            </div>


        </div>
    )
}


export default ToDo