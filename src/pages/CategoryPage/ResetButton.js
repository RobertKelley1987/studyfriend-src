import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserIdContext } from '../../context/UserIdContext';
import { resetAllFlashcards } from '../../services/flashcards';

// Sets all completed flashcards to be marked 'not completed'
const ResetButton = ({ className, setCategories, completed }) => {
    const userId = useContext(UserIdContext);
    const { categoryId } = useParams();
    
    const handleClick = async () => {
        const { data } = await resetAllFlashcards(userId, categoryId);
        setCategories(data.categories);
    }

    return <button onClick={handleClick} className={className} disabled={!completed.length}>Reset Flashcards</button>
}

export default ResetButton;