import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

const CategoryOptions = ({ categoryId, className }) => {
    const location = useLocation();
    
    return (
        <Fragment>
            <Link className={className} to={`/categories/${categoryId}/edit`}>Edit Category</Link>
            <Link 
                className={className}
                to={`/categories/${categoryId}/delete`}
                state={{ background: location }}
            >
                Delete Category
            </Link>
        </Fragment>
    )
}

export default CategoryOptions;