import { useHistory } from 'react-router-dom';

function SubmittedPage() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
        <div>
            <h2>Feedback Submitted</h2>
            <h3>Thanks for your feedback!</h3>
            <button onClick={handleClick}>Start a new feedback form </button>
        </div>

    )
}

export default SubmittedPage;