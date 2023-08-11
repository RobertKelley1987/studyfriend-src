import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCategory from '../../hooks/useCategory';
import DeleteModal from '../../components/ui/DeleteModal';
import DeleteCategoryButton from './DeleteCategoryButton';

// Displays modal confirming category deletion
const DeleteCategoryPage = ({ userId, setErrorMessage, setCategories }) => {
    const { categoryId } = useParams();
    const { name, setName, loadingCategory } = useCategory(userId, categoryId);
    const [isUpdating, setIsUpdating] = useState(false);
    const navigate = useNavigate();
    
    const handleDismiss = () => {
        setName('');
        navigate('/categories');
    }

    return (
        <DeleteModal 
            name={name}
            isLoading={loadingCategory}
            isUpdating={isUpdating}
            deleteButton={
                <DeleteCategoryButton
                    setErrorMessage={setErrorMessage} 
                    setCategories={setCategories} 
                    dismissModal={handleDismiss} 
                    setIsUpdating={setIsUpdating}
                />
            }
        />
    )
}

export default DeleteCategoryPage; 