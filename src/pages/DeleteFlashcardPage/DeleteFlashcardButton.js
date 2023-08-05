import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { deleteFlashcard } from '../../services/flashcards';
import { UserIdContext } from '../../context/UserIdContext';

// Button to delete a flashcard from database
const DeleteFlashcardButton = ({ setCategories, dismissModal }) => {
    const userId = useContext(UserIdContext);
    const { flashcardId, categoryId } = useParams();

    const handleClick = async () => {
        const { data: { categories} } = await deleteFlashcard(userId, categoryId, flashcardId);
        setCategories(categories);
        dismissModal();
    }

    return <button className="button" onClick={handleClick}>Delete Flashcard</button>
}

export default DeleteFlashcardButton;