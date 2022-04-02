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


    const editClick = () => {
        setEditFeeling(!editFeeling);
    }

    const saveFeeling = () => {
        console.log('yes');
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
                        <input className="editInput" type="number" onChange={saveFeeling} value=''/> 
                        <button onClick={saveFeeling}>save</button>
                    </div>
                    : 
                    <h3>Feelings: {feelingInput} </h3>}
                

                {/* {editFeeling && <button>save</button> } */}
                
                
                <IconButton color="secondary" onClick={editClick}>
                    <EditIcon />
                </IconButton>
            </Box>

            <Box style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <h3>Understanding: {understandingInput}</h3>
                <IconButton color="secondary" >
                    <EditIcon />
                </IconButton>
            </Box>

            <Box style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <h3>Support: {supportInput}</h3>
                <IconButton color="secondary" >
                    <EditIcon />
                </IconButton>
            </Box>

            <Box style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <h3>Comments: {commentInput}</h3>
                <IconButton color="secondary">
                    <EditIcon />
                </IconButton>
            </Box>
            
            <div className="buttonDiv">
                <button onClick={handleBack}>BACK</button>
                <button onClick={handleClick}>NEXT</button>
            </div>
        </div>
    )
}

export default ReviewForm;