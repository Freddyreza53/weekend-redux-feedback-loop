import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

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
            {/* <label>Comments: </label> */}
            <TextareaAutosize 
                aria-label="empty textarea" 
                placeholder="Enter comment here."
                minRows={3}
                // style={{
                //     width: 300,
                //     margin: 10
                // }}
                onChange={addFeedback}
                value={commentInput}
            />
            {/* <input 
                type="text" 
                onChange={addFeedback}
                value={commentInput}
            /> */}
            <div className="buttonDiv">
                <Button 
                    variant="contained" 
                    color="primary"
                    style={{
                        margin: 10
                    }}
                    onClick={handleBack}
                >BACK</Button>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={handleClick}
                >NEXT</Button>
            </div>
        </div>
    )
}

export default CommentsForm;