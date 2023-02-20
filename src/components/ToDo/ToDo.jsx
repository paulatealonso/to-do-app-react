import { useContext, useState } from "react";
import { NoteContext } from "../../context/NoteContext";
import './ToDo.css'
import calendar from '../assets/calendar.png'
import trash from '../assets/trash.png'


const ToDo = ({ id, task, complete, date, setCurrentDate, currentDate, tag, deleteTask, relevance }) => {

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
        <div id='conteiner-list' className={relevance === '1' ? 'low' : relevance === '2' ? 'medium' : 'high'}>

{/* 
            <div id="tag-task" style={{ backgroundColor: 'red' }}>
                {tag && <p>✨{tag}✨</p>}
            </div> */}

            <div className="box-date">

                <div className="calendar-box" id="datetime"> {isEditing ? (
                    <div style={{backgroundColor : 'white', display: 'flex', marginBottom: '5px'}}>
                        <input type="datetime-local"
                            value={currentDate}
                            onChange={(e) => setCurrentDate(e.target.value)}
                            onBlur={() => setIsEditing(false)}
                            autoFocus 
                            style={{backgroundColor : 'white', textAlign: 'center'}}
                            />
                        <button onClick={handleUpdateDate} style={{backgroundColor : '#ec7fdf' , color: 'white' , border: 'none', padding: '3px'}}>CHANGE</button>
                    </div>) : (

                    <p className="transparent" id="line" onClick={() => setIsEditing(true)}>{formattedDate}</p>
                )}
                </div>

                {date &&  <div style={{ paddingTop: '10px', paddingBottom: '10px' ,fontSize: '16px', border: '1px solid #ec7fdf' }} className="calendar-box">
                    <p className="transparent">{date}</p>
                </div>}
               

                <div id="check-name">
                    <input type="checkbox" onChange={checkTask} />
                    <h3 className={complete ? 'task-done' : ''}>{task}</h3>
                </div>


            </div>
            <img src={trash} alt='bin' onClick={handleClick} id='img-trash' />

        </div>
    )
}


export default ToDo