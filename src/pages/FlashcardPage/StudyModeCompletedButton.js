import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIdContext } from '../../context/UserIdContext';
import { updateFlashcardCompleted } from '../../services/flashcards';
import CompletedButton from "../../components/flashcard/CompletedButton";
import { DEFAULT_FLASHCARD } from '../../utils';

const StudyModeCompletedButton = props => {
    const { flashcard, setFlashcard, setFlashcards, redirectLink, setUpdatingStatus, setErrorMessage } = props;
    const userId = useContext(UserIdContext);
    const navigate = useNavigate();
    const { _id: flashcardId, category: categoryId } = flashcard;

    const handleClick = async e => {
        e.preventDefault();
        setUpdatingStatus(true);

        const { flashcards, errorMessage } = await updateFlashcardCompleted(userId, categoryId, flashcardId);
        if(errorMessage) {
            setErrorMessage(errorMessage);
            setUpdatingStatus(false);
        } else {
            setFlashcard(DEFAULT_FLASHCARD); // Reset flashcard displayed
            setFlashcards(flashcards);
            setUpdatingStatus(false);
            navigate(redirectLink);
        }         
    }

    return <CompletedButton {...props} className="button" handleClick={handleClick} />
}

export default StudyModeCompletedButton;