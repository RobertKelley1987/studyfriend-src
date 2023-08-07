import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateFlashcard } from '../../services/flashcards';
import useFlashcard from '../../hooks/useFlashcard';
import { UserIdContext } from '../../context/UserIdContext';
import FlashcardForm from '../../components/forms/FlashcardForm';
import ErrorMessage from '../../components/ui/ErrorMessage';
import Loading from '../../components/ui/Loading';
import ReturnLink from '../../components/ui/ReturnLink';

// Displays form to edit flashcard
const EditFlashcardPage = props => {
    const userId = useContext(UserIdContext);
    const { setFlashcards, setIsStudying } = props;
    const { categoryId } = useParams();
    const flashcard = useFlashcard(userId);
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e, updatedFlashcard) => {
        e.preventDefault();
        setSubmitting(true);

        const { category, errorMessage } = await updateFlashcard(userId, categoryId, flashcard._id, updatedFlashcard);        
        if(errorMessage) {
            setErrorMessage(errorMessage);
            setSubmitting(false);
        } else {
            setFlashcards(category.flashcards);
            navigate(-1);
        }
    }

    return (
        <Loading isLoading={!flashcard.question} loadingEl={<div className="page center-content">Loading...</div>}>
            <div className="page">
                <ReturnLink 
                    setIsStudying={setIsStudying} 
                    text="Return to category page" 
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