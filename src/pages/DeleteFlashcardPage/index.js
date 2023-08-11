import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteModal from '../../components/ui/DeleteModal';
import DeleteFlashcardButton from './DeleteFlashcardButton';

// Displays modal confirming flashcard deletion
const DeleteFlashcardPage = ({ setErrorMessage, setFlashcards }) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const navigate = useNavigate();
    const { categoryId } = useParams();
    
    return (
        <DeleteModal 
            isLoading={false}
            isUpdating={isUpdating}
            deleteButton={
                <DeleteFlashcardButton 
                    setErrorMessage={setErrorMessage}
                    setFlashcards={setFlashcards} 
                    dismissModal={() => navigate(`/categories/${categoryId}`)} 
                    setIsUpdating={setIsUpdating}
                />
            }
        />
    );
}

export default DeleteFlashcardPage;