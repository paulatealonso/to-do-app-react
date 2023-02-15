import { useState } from "react";

const ToDo = () => {
    const [ userInput, setUserInput ] = useState('');
    

    

    



    return (
        <div>
            <label>Añadir nota:</label>
            <input 
            type='text' 
            value={userInput} 
            onChange={e => setUserInput(e.target.value)}/>
            <button 
            disabled = {userInput ? "" : "disabled"}
            type='submit'
            > Enviar</button>



        </div>
    )
}


export default ToDo