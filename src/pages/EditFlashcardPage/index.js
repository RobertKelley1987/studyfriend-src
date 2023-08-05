import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateFlashcard } from '../../services/flashcards';
import { UserIdContext } from '../../context/UserIdContext';
import { findCategory, findFlashcard } from '../../utils';
import FlashcardForm from '../../components/forms/FlashcardForm';
import ErrorMessage from '../../components/ui/ErrorMessage'

const EditFlashcardPage = props => {
    const userId = useContext(UserIdContext);
    const { categories, setCategories } = props;
    const { categoryId, flashcardId } = useParams();
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const category = findCategory(categories, categoryId);
    const flashcard = findFlashcard(category, flashcardId);

    const handleSubmit = async (e, updatedFlashcard) => {
        e.preventDefault();
        setSubmitting(true);

        const { categories, errorMessage } = await updateFlashcard(userId, category._id, flashcard._id, updatedFlashcard);        
        if(errorMessage) {
            setErrorMessage(errorMessage);
            setSubmitting(false);
        } else {
            setCategories(categories);
            navigate(-1);
        }
    }

    return (
        <div className="page">
            <ErrorMessage message={errorMessage} />
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
    );
}

export default EditFlashcardPage;