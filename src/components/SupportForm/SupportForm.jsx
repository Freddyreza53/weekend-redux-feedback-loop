import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

function SupportForm() {
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();

    const history = useHistory();
    const dispatch = useDispatch();
    let [supportInput, setSupportInput] = useState('');

    const handleClick = () => {
        if (value === 0) {
            alert('Please add a number between 1-5.')
        } else {
            dispatch({
                type: 'ADD_SUPPORT',
                payload: value
            })
            history.push('/commentsForm');
        }
    };

    const handleBack = () => {
        history.push('/understandingForm');
    }

    // const addFeedback = (event) => {
    //     setSupportInput(event.target.value);
    // };

    return (
        <div className={classes.root}>
            <h1>How well are you being supported?</h1>
            <label>Support scale 1-5: </label>
            {/* <input 
                type="number" 
                onChange={addFeedback}
                value={supportInput}
            /> */}
            
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={1}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                    setHover(newHover);
                    }}
                />
                {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
            
            <div>
                <button onClick={handleBack}>BACK</button>
                <button onClick={handleClick}>NEXT</button>
            </div>
        </div>
    )
}

export default SupportForm;