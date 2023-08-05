import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIdContext } from '../../context/UserIdContext';
import { createFlashcard } from '../../services/flashcards';
import FlashcardForm from '../../components/forms/FlashcardForm';
import ErrorMessage from '../../components/ui/ErrorMessage'

const NewFlashcardPage = props => {
    const { setCategories } = props;
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const userId = useContext(UserIdContext);
    const navigate = useNavigate();

    const handleSubmit = async (e, flashcard) => {
        e.preventDefault();
        setSubmitting(true);

        const { categories, errorMessage } = await createFlashcard(userId, flashcard.category, flashcard);
        if(errorMessage) {
            setErrorMessage(errorMessage);
            setSubmitting(false);
        } else {
            setCategories(categories);
            navigate(`/categories/${flashcard.category}`);
        }
    }

    return (
        <div className="page">
            <ErrorMessage message={errorMessage} />
            <div className="center-content">
                <FlashcardForm 
                    {...props} 
                    title="New Flashcard" 
                    handleSubmit={handleSubmit}
                    submitting={submitting} 
                />
            </div>
        </div>
    )
}

export default NewFlashcardPage;