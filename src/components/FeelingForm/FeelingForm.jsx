import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
function FeelingForm() {

    const history = useHistory();
    const dispatch = useDispatch();
    let [feelingInput, setFeelingInput] = useState('');

    const handleClick = () => {
        if (feelingInput === '') {
            alert('Please add a number between 1-5.')
        } else {
            dispatch({
                type: 'ADD_FEELING',
                payload: feelingInput
            })
            history.push('/understandingForm');
        }
    };

    const addFeedback = (event) => {
        setFeelingInput(event.target.value);
    };

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <label>scale of 1-5: </label>
            <input 
                type="number" 
                onChange={addFeedback}
                value={feelingInput}
            />
            <button onClick={handleClick}>NEXT</button>
        </div>
    )
}

export default FeelingForm;