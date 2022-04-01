import { useHistory } from 'react-router-dom';

function CommentsForm() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/reviewForm');
    }

    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <label>Comments: </label>
            <input type="text" />
            <button onClick={handleClick}>NEXT</button>
        </div>
    )
}

export default CommentsForm;