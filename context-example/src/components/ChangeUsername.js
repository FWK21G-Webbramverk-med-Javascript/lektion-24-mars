import { useState, useContext } from 'react';
import { ChangeContext } from '../App';

function ChangeUsername() {
    const [newUsername, setNewUsername] = useState('');
    const setUsername = useContext(ChangeContext);

    function handleOnKeyUp(event) {
        setNewUsername(event.target.value);
    }

    function handleClick() {
        setUsername(newUsername);
    }

    return (
        <section>
            <input type="text" onKeyUp={ handleOnKeyUp } />
            <button onClick={ handleClick }>Ändra</button>
        </section>
    )
}

export default ChangeUsername;