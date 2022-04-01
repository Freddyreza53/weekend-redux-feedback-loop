import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function ReviewForm() {

    const history = useHistory();
    const dispatch = useDispatch();
    const feelingInput = useSelector(store => store.feelingReducer);
    const understandingInput = useSelector(store => store.understandReducer);
    const supportInput = useSelector(store => store.supportReducer);
    const commentInput = useSelector(store => store.commentReducer);

    const handleClick = () => {
        dispatch({
            type: 'CLEAR'
        })
        history.push('/submittedPage');
    }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <h3>Feelings: {feelingInput}</h3>
            <h3>Understanding: {understandingInput}</h3>
            <h3>Support: {supportInput}</h3>
            <h3>Comments: {commentInput}</h3>
            <button onClick={handleClick}>SUBMIT</button>
        </div>
    )
}

export default ReviewForm;