import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateFlashcard } from '../../services/flashcards';
import useFlashcard from '../../hooks/useFlashcard';
import FlashcardForm from '../../components/forms/FlashcardForm';
import ErrorMessage from '../../components/ui/ErrorMessage';
import Loading from '../../components/ui/Loading';
import ReturnLink from '../../components/ui/ReturnLink';

// Displays form to edit flashcard
const EditFlashcardPage = props => {
    const { userId, setIsStudying, setFlashcards } = props;
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { flashcard } = useFlashcard(userId);
    const { categoryId } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e, formFlashcard) => {
        e.preventDefault();
        setSubmitting(true);

        const { flashcards, errorMessage } = await updateFlashcard(userId, categoryId, flashcard._id, formFlashcard);        
        if(errorMessage) {
            setErrorMessage(errorMessage);
            setSubmitting(false);
        } else {
            setFlashcards(flashcards);
            navigate(-1);
        }
    }

    return (
        <Loading isLoading={!flashcard.question} loadingEl={<div className="page center-content">Loading...</div>}>
            <div className="page">
                <ReturnLink 
                    setIsStudying={setIsStudying} 
                    className="return-link-category" 
                    link={`/categories/${categoryId}`}
                />
                <ErrorMessage message={errorMessage} setErrorMessage={setErrorMessage}/>
                <div className="center-content">
                    <FlashcardForm 
                        {...props}
                        flashcardToEdit={flashcard} 
                        title="Edit Flashcard" 
                        handleSubmit={handleSubmit}
                        submitting={submitting}
                    />
                </div>
            </div>
        </Loading>
    );
}

export default EditFlashcardPage;