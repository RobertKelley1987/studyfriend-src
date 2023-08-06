import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserIdContext } from '../../context/UserIdContext';
import { updateFlashcardCompleted } from '../../services/flashcards';

// Button used to mark a flashcard as completed in database
const CompletedButton = ({ className, setFlashcards, flashcard = { completed: false }, redirectLink }) => {
    const userId = useContext(UserIdContext);
    const { categoryId } = useParams();
    const navigate = useNavigate();

    const renderText = () => !flashcard.completed ? "Mark As Completed" : "Mark For Review";

    const handleClick = async e => {
        e.preventDefault();
        const { data: { category } } = await updateFlashcardCompleted(userId, categoryId, flashcard._id);
        setFlashcards(category.flashcards);
        if(redirectLink) {
            navigate(redirectLink);
        }
    }

    return <button className={className} onClick={handleClick}>{renderText()}</button>;

}

export default CompletedButton;