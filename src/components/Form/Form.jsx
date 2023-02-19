import { useContext, useState } from "react";
import { NoteContext } from "../../context/NoteContext";
import './Form.css'
import titleImg from '../assets/black-todo.jpeg'




const Form = () => {
    const [task, setTask] = useState('')
    const [date, setDate] = useState('')
    const [tag, setTag] = useState('')
    const { addTask, message, setMessage } = useContext(NoteContext)
    const [relevance, setRelevance] = useState('')
    const [sortDirection, setSortDirection] = useState('asc')

    const submitNote = (e) => {
        e.preventDefault()
        addTask(task, date, relevance, tag)
        setTask('')
        setTag('')
        setDate('')
        setRelevance('')
    }

    const handleSort = () => {
        const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(newSortDirection);
        setMessage(sortNotes(message, newSortDirection));
    }

    const sortNotes = (notes, direction) => {
        return [...notes].sort((a, b) => {
            const aDate = new Date(a.date).getTime();
            const bDate = new Date(b.date).getTime();
            const compareResult = aDate - bDate;
            return direction === 'asc' ? compareResult : -compareResult;
        });
    }

    const sortedNotes = sortNotes(message, sortDirection);



    return (
        <div id="conteier-form">

            <div id="img-header">
                <img src={titleImg} alt='title-img' />
            </div>

            <form onSubmit={submitNote}>
                <div id="form-note">
                    <input
                        type="text"
                        className="input-note"
                        value={task}
                        placeholder="Type something here...."
                        onChange={e => setTask(e.target.value)}
                        required />

                    <button className="btn-input">Add</button>

                    <button className="btn-input" type="button" onClick={handleSort}>
                        Sort by date {sortDirection === 'asc' ? 'ascendente' : 'descendente'}
                    </button>
                </div>

                <div id="box-conteiners-form">

                    {task && (
                        <div className="conteiner-tag">
                            <input type="text" value={tag} placeholder="#AddATag" onChange={e => setTag(e.target.value)} />
                        </div>
                    )}

                    {task && (
                        <div className="conteiner-relevance">
                            <select value={relevance} onChange={e => setRelevance(e.target.value)}>
                                <option value="">Priority</option>
                                <option value="1" >Low</option>
                                <option value="2">Medium</option>
                                <option value="3">High</option>
                            </select>
                        </div>
                    )}

                    {task && (
                        <div className="conteiner-date">
                            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
                        </div>
                    )}
                </div>

            </form>
            
            {sortedNotes.map(note => (
                <div key={note.id}>
                    <span>{note.date}</span>
                    <p>{note.task}</p>
                </div>
            ))}

            
        </div>
    )
}



export default Form