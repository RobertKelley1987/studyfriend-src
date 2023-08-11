import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserIdContext } from '../../context/UserIdContext';
import { resetAllFlashcards } from '../../services/flashcards';

// Sets all completed flashcards to be marked 'not completed'
const ResetButton = ({ setFlashcards, completed, setErrorMessage, updatingStatus, setUpdatingStatus }) => {
    const userId = useContext(UserIdContext);
    const { categoryId } = useParams();
    
    const handleClick = async () => {
        setUpdatingStatus(true);

        const { flashcards, errorMessage } = await resetAllFlashcards(userId, categoryId);
        if(errorMessage) {
            setErrorMessage(errorMessage);
        } else {
            setFlashcards(flashcards);
        }

        setUpdatingStatus(false);
    }

    return (
        <button 
            onClick={handleClick} 
            className="button" 
            // disable if querying db or if no cards to reset
            disabled={updatingStatus || !completed.length}
        >
            Reset Flashcards
        </button>
    );
}

export default ResetButton;