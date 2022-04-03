import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';



function ReviewForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    const feelingInput = useSelector(store => store.feelingReducer);
    const understandingInput = useSelector(store => store.understandReducer);
    const supportInput = useSelector(store => store.supportReducer);
    const commentInput = useSelector(store => store.commentReducer);

    const [newFeeling, setNewFeeling] = useState(feelingInput);
    const [newUnderstanding, setNewUnderstanding] = useState(understandingInput);
    const [newSupport, setNewSupport] = useState(supportInput);
    const [newComments, setNewComments] = useState(commentInput);

    const handleClick = () => {
        let feedback = {
            feelingInput: feelingInput,
            understandingInput: understandingInput,
            supportInput: supportInput,
            commentInput: commentInput
        }

        axios.post('/feedback', feedback)
            .then( response => {
                dispatch({
                    type: 'CLEAR'
                })
                history.push('/submittedPage');
            })
            .catch( err => {
                console.log(err);
                alert(err);
            })
    }

    const handleBack = () => {
        history.push('/commentsForm');
    }

    const [editFeeling, setEditFeeling] = useState(false)
    const editClickFeeling = () => {
        setEditFeeling(!editFeeling);
    }
    const saveFeeling = () => {
        if (newFeeling < 0 || newFeeling > 5) {
            alert('Please choose a number between 1 and 5.');
        } else {
            dispatch({
                type: 'ADD_FEELING',
                payload: newFeeling
            })
            setEditFeeling(!editFeeling);
        }
    }

    const [editUnderstanding, setEditUnderstanding] = useState(false)
    const editClickUnderstanding = () => {
        setEditUnderstanding(!editUnderstanding);
    }
    const saveUnderstanding = () => {
        if (newUnderstanding < 0 || newUnderstanding > 5) {
            alert('Please choose a number between 1 and 5.');
        } else {
            dispatch({
                type: 'ADD_UNDERSTAND',
                payload: newUnderstanding
            })
            setEditUnderstanding(!editUnderstanding);
        }
    }

    const [editSupport, setEditSupport] = useState(false)
    const editClickSupport = () => {
        setEditSupport(!editSupport);
    }
    const saveSupport = () => {
        if (newSupport < 0 || newSupport > 5) {
            alert('Please choose a number between 1 and 5.');
        } else {
            dispatch({
                type: 'ADD_SUPPORT',
                payload: newSupport
            })
            setEditSupport(!editSupport);
        }
    }

    const [editComment, setEditComment] = useState(false)
    const editClickComment = () => {
        setEditComment(!editComment);
    }
    const saveComment = () => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: newComments
        })
        setEditComment(!editComment);
    }

    return (
        <div>
            <h2>Review Your Feedback</h2>

            <Box style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                {editFeeling === true ? 
                    <div className="editDiv">
                        <h3>Feelings: </h3>
                        <input className="editInput" type="number" onChange={(event) => setNewFeeling(event.target.value)} value={newFeeling}/> 
                        <button onClick={saveFeeling}>save</button>
                    </div>
                    : 
                    <h3>Feelings: {feelingInput} </h3>}
                <IconButton color="secondary" onClick={editClickFeeling}>
                    <EditIcon />
                </IconButton>
            </Box>

            <Box style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                {editUnderstanding === true ? 
                    <div className="editDiv">
                        <h3>Understanding: </h3>
                        <input className="editInput" type="number" onChange={(event) => setNewUnderstanding(event.target.value)} value={newUnderstanding}/> 
                        <button onClick={saveUnderstanding}>save</button>
                    </div>
                    : 
                    <h3>Understanding: {understandingInput} </h3>}
                <IconButton color="secondary" onClick={editClickUnderstanding}>
                    <EditIcon />
                </IconButton>
            </Box>

            <Box style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                {editSupport === true ? 
                    <div className="editDiv">
                        <h3>Support: </h3>
                        <input className="editInput" type="number" onChange={(event) => setNewSupport(event.target.value)} value={newSupport}/> 
                        <button onClick={saveSupport}>save</button>
                    </div>
                    : 
                    <h3>Support: {supportInput} </h3>}
                <IconButton color="secondary" onClick={editClickSupport}>
                    <EditIcon />
                </IconButton>
            </Box>

            <Box style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                {editComment === true ? 
                    <div className="editDiv">
                        <h3>Comments: </h3>
                        <input type="text" onChange={(event) => setNewComments(event.target.value)} value={newComments}/> 
                        <button onClick={saveComment}>save</button>
                    </div>
                    : 
                    <h3>Comments: {commentInput} </h3>}
                <IconButton color="secondary" onClick={editClickComment}>
                    <EditIcon />
                </IconButton>
            </Box>
            
            <div className="buttonDiv">
                <button onClick={handleBack}>BACK</button>
                <button onClick={handleClick}>SUBMIT</button>
            </div>
        </div>
    )
}

export default ReviewForm;