import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function UnderstandingForm() {

    const history = useHistory();
    const dispatch = useDispatch();
    let [understandInput, setUnderstandInput] = useState('');

    const handleClick = () => {
        dispatch({
            type: 'ADD_UNDERSTAND',
            payload: understandInput
        })
        history.push('/supportForm');
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
            <button onClick={handleClick}>NEXT</button>
        </div>
    )
}

export default UnderstandingForm;