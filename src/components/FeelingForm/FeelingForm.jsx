import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        },
    },
}));

function FeelingForm() {

    const classes = useStyles();

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
        <div className={classes.root}>
            <h1>How are you feeling today?</h1>
            {/* <label>scale of 1-5: </label> */}
            {/* <input 
                type="number" 
                onChange={addFeedback}
                value={feelingInput}
            /> */}
            <FormControl component="fieldset">
                <FormLabel component="legend">Scale of 1-5: </FormLabel>
                <RadioGroup style={{margin: 10}} row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel
                        control={<Radio color="secondary" />}
                        label="1"
                        onChange={addFeedback}
                        value="1"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="2"
                        onChange={addFeedback}
                        control={<Radio color="secondary" />}
                        label="2"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="3"
                        onChange={addFeedback}
                        control={<Radio color="default" />}
                        label="3"
                        labelPlacement="top"
                    />
                    <FormControlLabel 
                        value="4" 
                        onChange={addFeedback}
                        control={<Radio color="primary" />} 
                        label="4" 
                        labelPlacement="top"
                    />
                    <FormControlLabel 
                        value="5" 
                        onChange={addFeedback}
                        control={<Radio color="primary" />} 
                        label="5" 
                        labelPlacement="top"
                    />
                </RadioGroup>
            </FormControl>
            <div>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleClick}
                >NEXT</Button>
            </div>
        </div>
    )
}

export default FeelingForm;