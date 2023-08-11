import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCategoryId from '../../hooks/useCategoryId';
import DeleteModal from '../../components/ui/DeleteModal';
import DeleteCategoryButton from './DeleteCategoryButton';

// Displays modal confirming category deletion
const DeleteCategoryPage = ({ setErrorMessage, setCategories, setCategoryId, name }) => {
    const [isUpdating, setIsUpdating] = useState(false);
    useCategoryId(setCategoryId);
    const navigate = useNavigate();

    return (
        <DeleteModal 
            name={name}
            isLoading={!name}
            isUpdating={isUpdating}
            deleteButton={
                <DeleteCategoryButton
                    setErrorMessage={setErrorMessage} 
                    setCategories={setCategories} 
                    dismissModal={() => navigate('/categories')} 
                    setIsUpdating={setIsUpdating}
                />
            }
        />
    )
}

export default DeleteCategoryPage; 