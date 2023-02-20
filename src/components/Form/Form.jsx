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
    const [originalMessage, setOriginalMessage] = useState([]);

    const submitNote = (e) => {
        e.preventDefault()
        addTask(task, date, tag, relevance)
        setTask('')
        setDate('')
        setTag('')
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

    const getUniqueRelevances = () => {
        const relevances = message.map(note => note.relevance);
        return [...new Set(relevances)];
    };

    const uniqueRelevances = getUniqueRelevances();
    const showRelevanceButton = uniqueRelevances.length > 2;

    const filterByRelevance = (relevance) => {
        const filteredNotes = message.filter(note => note.relevance === relevance);
        setOriginalMessage(message);
        setMessage(filteredNotes);
    };

    const showAllNotes = () => {
        setMessage(originalMessage);
    };



    return (
        <div id="conteier-form">

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1 className="neon">to do list</h1>
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
                            <select
                                value={relevance}
                                onChange={e => setRelevance(e.target.value)}>
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

                {showRelevanceButton && (
                    <div>
                        {uniqueRelevances.map(relevance => (
                            <button
                                key={relevance}
                                className="btn-input"
                                type="button"
                                onClick={() => filterByRelevance(relevance)}
                            >
                                {`Relevance ${relevance}`}
                            </button>
                        ))}
                        <button
                            className="btn-input"
                            type="button"
                            onClick={() => showAllNotes()}
                        >
                            Show all notes
                        </button>
                    </div>
                )}



            </form>

            


        </div>
    )
}



export default Form