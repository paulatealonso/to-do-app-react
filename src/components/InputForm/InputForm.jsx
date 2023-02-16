import { useState } from "react"

const InputForm = ({addNote}) => {

    const [userInput, setUserInput] = useState([])

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput.trim() !== '')
        addNote(userInput)
        setUserInput('')
    }



    return ( 
        <div>

        <form onSubmit={handleSubmit}>
        <input type='text' value={userInput} onChange={handleChange}/>
        <button> Add Note </button>

        </form>


        </div>
    )
}

export default InputForm