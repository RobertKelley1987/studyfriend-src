import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIdContext } from '../../context/UserIdContext';
import { updateFlashcardCompleted } from '../../services/flashcards';
import CompletedButton from "../../components/flashcard/CompletedButton";

const FlashcardPageCompletedButton = props => {
    const { flashcard, setFlashcard, redirectLink, setUpdatingStatus, setErrorMessage } = props;
    const userId = useContext(UserIdContext);
    const navigate = useNavigate();
    const { _id: flashcardId, category: categoryId } = flashcard;

    const handleClick = async e => {
        e.preventDefault();
        setUpdatingStatus(true);

        const { flashcard, errorMessage } = await updateFlashcardCompleted(userId, categoryId, flashcardId);
        if(errorMessage) {
            setErrorMessage(errorMessage);
        } else {
            setFlashcard(flashcard);
        } 

        setUpdatingStatus(false);
        if(redirectLink) {
            navigate(redirectLink);
        } 
    }

    return <CompletedButton {...props} className="link" handleClick={handleClick} />
}

export default FlashcardPageCompletedButton;