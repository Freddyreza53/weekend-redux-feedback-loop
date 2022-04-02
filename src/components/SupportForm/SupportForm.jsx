import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function SupportForm() {

    const history = useHistory();
    const dispatch = useDispatch();
    let [supportInput, setSupportInput] = useState('');

    const handleClick = () => {
        if (supportInput === '') {
            alert('Please add a number between 1-5.')
        } else {
            dispatch({
                type: 'ADD_SUPPORT',
                payload: supportInput
            })
            history.push('/commentsForm');
        }
    };

    const handleBack = () => {
        history.push('/understandingForm');
    }


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
            <div>
                <button onClick={handleBack}>BACK</button>
                <button onClick={handleClick}>NEXT</button>
            </div>
        </div>
    )
}

export default SupportForm;