import { useContext, useState } from "react";
import { NoteContext } from "../../context/NoteContext";
import './ToDo.css'
import calendar from '../assets/calendar.png'


const ToDo = ({ id, task, complete, date, setCurrentDate, currentDate, tag, deleteTask , relevance}) => {

    const { setStatusTask } = useContext(NoteContext)
    const [isEditing, setIsEditing] = useState(false);

    const checkTask = e => setStatusTask(id, e.target.checked)

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



    const handleClick = () => {
        deleteTask(id);
    }

  
  


    return (
        <div  className={relevance === '1' ? 'low' : relevance === '2' ? 'medium' : 'low'} id='conteiner-list'>
            <button className="delete-button" onClick={handleClick}>Delete</button>
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
                        <div>
                            <input type="datetime-local"
                                value={currentDate}
                                onChange={(e) => setCurrentDate(e.target.value)}
                                onBlur={() => setIsEditing(false)}
                                autoFocus />
                            <button onClick={handleUpdateDate}>CHANGE</button>
                        </div>) : (

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