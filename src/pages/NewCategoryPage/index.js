import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIdContext } from '../../context/UserIdContext';
import { createCategory } from '../../services/categories';
import CategoryForm from '../../components/forms/CategoryForm';
import ErrorMessage from '../../components/ui/ErrorMessage';
import ReturnLink from '../../components/ui/ReturnLink';

// Page with form to create new category
const NewCategoryPage = props => {
    const userId = useContext(UserIdContext);
    const { setCategories, setIsStudying } = props;
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Function to create new category on form submit
    const handleSubmit = async (e, categoryName) => {
        e.preventDefault();
        setSubmitting(true);

        const { categories, errorMessage } = await createCategory(userId, categoryName);
        if(errorMessage) {
            setSubmitting(false);
            setErrorMessage(errorMessage);
        } else {
            setCategories(categories);
            navigate('/categories');
        }
    }

    return (
        <div className="page">
            <ErrorMessage message={errorMessage} />
            <ReturnLink setIsStudying={setIsStudying} className="return-link-categories" link={`/categories`} />
            <div className="center-content">
                <CategoryForm 
                    handleSubmit={handleSubmit} 
                    title="New Category" 
                    submitting={submitting}
                />
            </div>
        </div>
    );
}

export default NewCategoryPage;