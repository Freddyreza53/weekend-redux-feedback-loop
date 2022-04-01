import { useHistory } from 'react-router-dom';

function FeelingForm() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/understandingForm');
    }

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <label>scale of 1-5: </label>
            <input type="number" />
            <button onClick={handleClick}>NEXT</button>
        </div>
    )
}

export default FeelingForm;