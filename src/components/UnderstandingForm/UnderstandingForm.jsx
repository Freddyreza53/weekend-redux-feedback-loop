import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1)
        },
    },
}));

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 5,
        label: '5',
    },
];

function valuetext(value) {
    return value;
}

function UnderstandingForm() {

    const classes = useStyles();

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

    const addFeedback = (value) => {
        setUnderstandInput(value);
    }

    function valueLabelFormat(value) {
        addFeedback(value)
        return marks.findIndex((mark) => mark.value === value);
    }
    return (
        <div className={classes.root}>
            <h1>How well are you understanding the content?</h1>
            {/* <label>Understand scale 1-5</label>
            <input 
                type="number" 
                onChange={addFeedback}
                value={understandInput}
            /> */}
            <Typography id="discrete-slider-restrict" gutterBottom>
                Understand scale 1-5
            </Typography>
            <div className="slideDiv">
            <Slider
                defaultValue={0}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                step={null}
                style={{
                    width: 200
                }}
                // onChange={(event) => addFeedback(value)}
                max={5}
                valueLabelDisplay="auto"
                marks={marks}
            />
            </div>

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

export default UnderstandingForm;