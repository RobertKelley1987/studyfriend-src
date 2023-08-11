import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { deleteFlashcard } from '../../services/flashcards';
import { UserIdContext } from '../../context/UserIdContext';

// Button to delete a flashcard from database
const DeleteFlashcardButton = ({ setErrorMessage, setFlashcards, setIsUpdating, dismissModal }) => {
    const userId = useContext(UserIdContext);
    const { flashcardId, categoryId } = useParams();

    const handleClick = async () => {
        setIsUpdating(true);

        const { flashcards, errorMessage } = await deleteFlashcard(userId, categoryId, flashcardId);
        if(errorMessage) {
            setErrorMessage(errorMessage);
        } else {
            setFlashcards(flashcards);
        }

        setIsUpdating(false);
        dismissModal();
    }

    return <button className="button" onClick={handleClick}>Delete Flashcard</button>
}

export default DeleteFlashcardButton;