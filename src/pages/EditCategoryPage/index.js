import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCategory } from '../../services/categories';
import { isEmpty, findCategory } from '../../utils';
import { UserIdContext } from '../../context/UserIdContext';
import CategoryForm from '../../components/forms/CategoryForm';
import Loading from '../../components/ui/Loading';
import ErrorMessage from '../../components/ui/ErrorMessage';

const EditCategoryPage = props => {
    const userId = useContext(UserIdContext);
    const { categoryId } = useParams();
    const { categories, setCategories } = props;
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const category = findCategory(categories, categoryId);
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
        <page className="page">
            <ErrorMessage message={errorMessage} />
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
        </page>
    );
}

export default EditCategoryPage;