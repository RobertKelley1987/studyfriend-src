import useCategoryFormData from '../../hooks/useCategoryFormData';
import Form from './Form';

// Form used for creating and editing categories
const CategoryForm = ({ nameToEdit, title, handleSubmit, submitting }) => {
    const [categoryName, setCategoryName] = useCategoryFormData(nameToEdit);

    return (
        <div className="form-wrapper">
            <h2 className="form-heading">{title}</h2>
            
            <Form 
                submitting={submitting}
                handleSubmit={e => handleSubmit(e, categoryName)} 
                isValidated={() => categoryName !== ''}
            >
                <input 
                    className="form-input" 
                    onChange={e => setCategoryName(e.target.value)} 
                    placeholder="Name" 
                    type="text"
                    value={categoryName} 
                />
            </Form>
        </div>
    )
}

export default CategoryForm;