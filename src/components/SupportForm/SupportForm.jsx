import { useHistory } from 'react-router-dom';

function SupportForm() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/commentsForm');
    }

    return (
        <div>
            <h1>How well are you being supported?</h1>
            <label>Support scale 1-5: </label>
            <input type="number" />
            <button onClick={handleClick}>NEXT</button>
        </div>
    )
}

export default SupportForm;