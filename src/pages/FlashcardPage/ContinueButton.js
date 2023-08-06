import { useNavigate } from 'react-router-dom';

// Takes the user to the next flashcard without marking the previous
// card as completed. If the button is rendered on the only card remaining,
// it redirects back to the question side for the same card. 
const ContinueButton = ({ nextLink, nextCardId, className, setIsFlipped }) => {
    const navigate = useNavigate();

    // If next card exists, move to next card, otherwise just flip back to question side.
    const handleClick = () => nextCardId ? navigate(nextLink) : setIsFlipped(false);

    return <button className={className} onClick={handleClick}>Leave Card and Continue</button>;
}

export default ContinueButton;