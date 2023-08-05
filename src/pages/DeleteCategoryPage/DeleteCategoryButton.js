import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserIdContext } from '../../context/UserIdContext';
import { deleteCategory } from '../../services/categories';

// Button to delete a category from database
const DeleteCategoryButton = ({ setCategories, dismissModal }) => {
    const userId = useContext(UserIdContext);
    const { categoryId } = useParams();

    const handleClick = async () => {
        const { data: { categories} } = await deleteCategory(userId, categoryId);
        setCategories(categories);
        dismissModal();
    }

    return <button className="button" onClick={handleClick}>Delete Category</button>
}

export default DeleteCategoryButton;