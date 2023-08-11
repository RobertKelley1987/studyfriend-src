import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Dropdown options displayed for a category, either on show page or in grid card
const CategoryOptions = ({ categoryId }) => {
    const location = useLocation();
    
    return (
        <Fragment>
            <Link className="link" to={`/categories/${categoryId}/edit`}>Edit Category</Link>
            <Link 
                className="link"
                to={`/categories/${categoryId}/delete`}
                state={{ background: location }}
            >
                Delete Category
            </Link>
        </Fragment>
    )
}

export default CategoryOptions;