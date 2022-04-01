import { useHistory } from 'react-router-dom';

function UnderstandingForm() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/supportForm');
    }

    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <label>Understand scale 1-5</label>
            <input type="number" />
            <button onClick={handleClick}>NEXT</button>
        </div>
    )
}

export default UnderstandingForm;