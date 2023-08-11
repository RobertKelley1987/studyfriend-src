import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createFlashcard } from '../../services/flashcards';
import FlashcardForm from '../../components/forms/FlashcardForm';
import ErrorMessage from '../../components/ui/ErrorMessage'
import ReturnLink from '../../components/ui/ReturnLink';

// Page with form to make new flashcard
const NewFlashcardPage = props => {
    const { userId, setIsStudying, setFlashcards } = props;
    const { categoryId } = useParams();
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e, flashcard) => {
        e.preventDefault();
        setSubmitting(true);

        const { flashcards, errorMessage } = await createFlashcard(userId, categoryId, flashcard);
        if(errorMessage) {
            setErrorMessage(errorMessage);
            setSubmitting(false);
        } else {
            setFlashcards(flashcards);
            navigate(`/categories/${categoryId}`);
        }
    }

    return (
        <div className="page">
            <ErrorMessage message={errorMessage} setErrorMessage={setErrorMessage} />
            <ReturnLink 
                setIsStudying={setIsStudying} 
                className="return-link-category" 
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