


const ToDo = ({ notes , done , deleteNote}) => {


    const getStyle = () => {
        return {
            textDecoration: notes.completed ? 'line-through' : 'none',
            margin: '20px',
            border: '1px solid #FFFFFF',
            backgroundColor: '#CCF7E3'

        }
    }


    return (
        <div style={getStyle()}>

            <input type='checkbox' checked = {notes.completed} onChange = {() => done(notes.id)}/>

            {notes.task}

            <button onClick={() => deleteNote(notes.id)}>X</button>

        </div>
    )
}


export default ToDo