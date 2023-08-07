import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCategory } from '../../services/categories';
import useCategory from '../../hooks/useCategory';
import { isEmpty } from '../../utils';
import { UserIdContext } from '../../context/UserIdContext';
import CategoryForm from '../../components/forms/CategoryForm';
import Loading from '../../components/ui/Loading';
import ErrorMessage from '../../components/ui/ErrorMessage';
import ReturnLink from '../../components/ui/ReturnLink';

// Displays form to edit category
const EditCategoryPage = props => {
    const userId = useContext(UserIdContext);
    const { categoryId } = useParams();
    const { setCategories, setIsStudying } = props;
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { category, loadingCategory } = useCategory(userId, categoryId);
    const navigate = useNavigate();

    const handleSubmit = async (e, updatedName) => {
        e.preventDefault();
        setSubmitting(true);

        const { categories, errorMessage } = await updateCategory(userId, categoryId, updatedName);
        if(errorMessage) {
            setErrorMessage(errorMessage);
            setSubmitting(false);
        } else {
            setCategories(categories);
            navigate(-1);
        }
    }

    return (
        <Loading isLoading={loadingCategory} loadingEl={<div className="page center-content">Loading...</div>}>
            <div className="page">
                <ErrorMessage message={errorMessage} />
                <ReturnLink setIsStudying={setIsStudying} text="Return to categories page" link={`/categories`} />
                <div className="center-content">
                    <Loading isLoading={isEmpty(category)} loadingEl="Loading...">
                        <CategoryForm 
                            nameToEdit={category.name} 
                            title="Edit Category" 
                            handleSubmit={handleSubmit} 
                            submitting={submitting}
                        />
                    </Loading>
                </div>
            </div>
        </Loading>
    );
}

export default EditCategoryPage;