import { useNavigate, useParams } from 'react-router-dom';
import DeleteModal from '../../components/ui/DeleteModal';
import DeleteFlashcardButton from './DeleteFlashcardButton';

// Displays modal confirming flashcard deletion
const DeleteFlashcardPage = ({ setCategories }) => {
    const navigate = useNavigate();
    const { categoryId } = useParams();
    
    return <DeleteModal>
               <DeleteFlashcardButton 
                    setCategories={setCategories} 
                    dismissModal={() => navigate(`/categories/${categoryId}`)} 
               />
           </DeleteModal>
}

export default DeleteFlashcardPage;