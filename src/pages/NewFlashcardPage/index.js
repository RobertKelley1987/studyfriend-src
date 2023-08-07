import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserIdContext } from '../../context/UserIdContext';
import { createFlashcard } from '../../services/flashcards';
import FlashcardForm from '../../components/forms/FlashcardForm';
import ErrorMessage from '../../components/ui/ErrorMessage'
import ReturnLink from '../../components/ui/ReturnLink';

// Page with form to make new flashcard
const NewFlashcardPage = props => {
    const { setFlashcards, setIsStudying } = props;
    const { categoryId } = useParams();
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const userId = useContext(UserIdContext);
    const navigate = useNavigate();

    const handleSubmit = async (e, flashcard) => {
        e.preventDefault();
        setSubmitting(true);

        const { category, errorMessage } = await createFlashcard(userId, categoryId, flashcard);
        if(errorMessage) {
            setErrorMessage(errorMessage);
            setSubmitting(false);
        } else {
            setFlashcards(category.flashcards);
            navigate(`/categories/${categoryId}`);
        }
    }

    return (
        <div className="page">
            <ErrorMessage message={errorMessage} />
            <ReturnLink 
                setIsStudying={setIsStudying} 
                text="Return to category page" 
                link={`/categories/${categoryId}`}
            />
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