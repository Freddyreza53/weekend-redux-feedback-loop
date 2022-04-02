import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function UnderstandingForm() {

    const history = useHistory();
    const dispatch = useDispatch();
    let [understandInput, setUnderstandInput] = useState('');

    const handleClick = () => {
        if (understandInput === '') {
            alert('Please add a number between 1-5.')
        } else {
            dispatch({
                type: 'ADD_UNDERSTAND',
                payload: understandInput
            })
            history.push('/supportForm');
        }
    }

    const handleBack = () => {
        history.push('/');
    }

    const addFeedback = (event) => {
        setUnderstandInput(event.target.value);
    }

    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <label>Understand scale 1-5</label>
            <input 
                type="number" 
                onChange={addFeedback}
                value={understandInput}
            />
            <div className="buttonDiv">
                <button onClick={handleBack}>BACK</button>
                <button onClick={handleClick}>NEXT</button>
            </div>
        </div>
    )
}

export default UnderstandingForm;