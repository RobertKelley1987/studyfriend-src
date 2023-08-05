import { useNavigate, useParams } from 'react-router-dom';
import { findCategory } from '../../utils';
import DeleteModal from '../../components/ui/DeleteModal';
import DeleteCategoryButton from './DeleteCategoryButton';

const DeleteCategoryPage = ({ categories, setCategories }) => {
    const { categoryId } = useParams();
    const category = findCategory(categories, categoryId);
    const navigate = useNavigate();

    return (
        <DeleteModal heading={`Delete ${category.name}?`}>
            <DeleteCategoryButton setCategories={setCategories} dismissModal={() => navigate('/categories')} />
        </DeleteModal>
    )
}

export default DeleteCategoryPage; 