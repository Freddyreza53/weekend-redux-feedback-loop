import { useHistory } from 'react-router-dom';

function ReviewForm() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/submittedPage');
    }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <h3>Feelings: </h3>
            <h3>Understanding: </h3>
            <h3>Support: </h3>
            <h3>Comments: </h3>
            <button onClick={handleClick}>SUBMIT</button>
        </div>
    )
}

export default ReviewForm;