import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCategory } from '../../services/categories';
import useCategory from '../../hooks/useCategory';
import CategoryForm from '../../components/forms/CategoryForm';
import Loading from '../../components/ui/Loading';
import ErrorMessage from '../../components/ui/ErrorMessage';
import ReturnLink from '../../components/ui/ReturnLink';

// Displays form to edit category
const EditCategoryPage = props => {
    const { userId, setCategories, setIsStudying } = props;
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { categoryId } = useParams();
    const { name, loadingCategory } = useCategory(userId, categoryId);
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
        <div className="page">
            <ReturnLink setIsStudying={setIsStudying} className="return-link-categories" link={`/categories`} />
            <ErrorMessage message={errorMessage} setErrorMessage={setErrorMessage}/>
            <div className="center-content">
                <Loading isLoading={loadingCategory} loadingEl="Loading...">
                    <CategoryForm 
                        nameToEdit={name} 
                        title="Edit Category" 
                        handleSubmit={handleSubmit} 
                        submitting={submitting}
                    />
                </Loading>
            </div>
        </div>
    );
}

export default EditCategoryPage;