import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function SupportForm() {

    const history = useHistory();
    const dispatch = useDispatch();
    let [supportInput, setSupportInput] = useState('');

    const handleClick = () => {
        dispatch({
            type: 'ADD_SUPPORT',
            payload: supportInput
        })
        history.push('/commentsForm');
    };

    const addFeedback = (event) => {
        setSupportInput(event.target.value);
    };

    return (
        <div>
            <h1>How well are you being supported?</h1>
            <label>Support scale 1-5: </label>
            <input 
                type="number" 
                onChange={addFeedback}
                value={supportInput}
            />
            <button onClick={handleClick}>NEXT</button>
        </div>
    )
}

export default SupportForm;