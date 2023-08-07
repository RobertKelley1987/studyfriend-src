import { useNavigate } from 'react-router-dom';
import DeleteModal from '../../components/ui/DeleteModal';
import DeleteCategoryButton from './DeleteCategoryButton';

// Displays modal confirming category deletion
const DeleteCategoryPage = ({ setErrorMessage, setCategories, category }) => {
    const navigate = useNavigate();

    return (
        <DeleteModal heading={`Delete ${category.name}?`}>
            <DeleteCategoryButton
                setErrorMessage={setErrorMessage} 
                setCategories={setCategories} 
                dismissModal={() => navigate('/categories')} 
            />
        </DeleteModal>
    )
}

export default DeleteCategoryPage; 