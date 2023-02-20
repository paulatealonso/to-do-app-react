import { useContext, useState } from "react";
import { NoteContext } from "../../context/NoteContext";
import './ToDo.css'

import trash from '../assets/trash.png'


const ToDo = ({ id, task, complete, date, setCurrentDate, currentDate, tag, deleteTask, relevance }) => {

    const { setStatusTask } = useContext(NoteContext)
    const [isEditing, setIsEditing] = useState(false);

    const checkTask = e => setStatusTask(id, e.target.checked)

    const handleUpdateDate = (e) => {
        const newDate = new Date(e.target.value).toLocaleString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
        setCurrentDate(newDate);
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
                    <div style={{ backgroundColor: 'white', display: 'flex', marginBottom: '5px' }}>
                        <input type="datetime-local"
                            value={formattedDate}
                            onChange={(e) => setCurrentDate(e.target.value)}
                            onBlur= {() => setIsEditing(false)}
                            autoFocus
                            style={{ backgroundColor: 'white', textAlign: 'center' }}
                        />
                        <button onClick={handleUpdateDate} style={{ backgroundColor: '#ec7fdf', color: 'white', border: 'none', padding: '3px' }}>CHANGE</button>
                    </div>) : (

                    <p className="transparent" id="line" style={{ color: relevance === '1' ? '#E7008F' : relevance === '2' ? '#D8A2FF' : '#A8FFD9' }} onClick={() => setIsEditing(true)}>{formattedDate}</p>
                )}
                </div>

                {date && <div className="calendar-box" id='border-date' style={{ border: relevance === '1' ? '2px solid #E7008F' : relevance === '2' ? '2px solid #D8A2FF' : '2px solid #A8FFD9' }}>
                    <p className="transparent" style={{ color: relevance === '1' ? '#E7008F' : relevance === '2' ? '#D8A2FF' : '#A8FFD9' }}>{date}</p>
                </div>}


                <div id="check-name">
                    <input type="checkbox" onChange={checkTask} />
                    <h3 className={complete ? 'task-done' : ''} style={{ color: relevance === '1' ? '#E7008F' : relevance === '2' ? '#D8A2FF' : '#A8FFD9' }}>{task}</h3>
                </div>


            </div>
            <img src={trash} alt='bin' onClick={handleClick} id='img-trash' />

        </div>
    )
}


export default ToDo