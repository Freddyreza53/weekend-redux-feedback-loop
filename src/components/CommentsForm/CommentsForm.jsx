import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function CommentsForm() {

    const history = useHistory();
    const dispatch = useDispatch();
    let [commentInput, setCommentInput] = useState('');

    const handleClick = () => {
            dispatch({
                type: 'ADD_COMMENT',
                payload: commentInput
            })
            history.push('/reviewForm');
    }

    const handleBack = () => {
        history.push('/supportForm');
    }

    const addFeedback = (event) => {
        setCommentInput(event.target.value);
    }

    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <label>Comments: </label>
            <input 
                type="text" 
                onChange={addFeedback}
                value={commentInput}
            />
            <div>
                <button onClick={handleBack}>BACK</button>
                <button onClick={handleClick}>NEXT</button>
            </div>
        </div>
    )
}

export default CommentsForm;