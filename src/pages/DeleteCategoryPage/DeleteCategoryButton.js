import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserIdContext } from '../../context/UserIdContext';
import { deleteCategory } from '../../services/categories';

// Button to delete a category from database
const DeleteCategoryButton = ({ setCategories, dismissModal, setIsUpdating, setErrorMessage }) => {
    const userId = useContext(UserIdContext);
    const { categoryId } = useParams();

    const handleClick = async () => {
        setIsUpdating(true);

        const { categories, errorMessage } = await deleteCategory(userId, categoryId);
        if(errorMessage) {
            setErrorMessage(errorMessage);
        } else {
            setCategories(categories);
        }

        setIsUpdating(false);
        dismissModal();
    }

    return <button className="button" onClick={handleClick}>Delete Category</button>
}

export default DeleteCategoryButton;