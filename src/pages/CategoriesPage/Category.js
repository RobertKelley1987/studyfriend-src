import { Link } from 'react-router-dom';
import Dropdown from '../../components/ui/Dropdown';
import CategoryOptions from '../../components/category/CategoryOptions';
import './Category.css';

// Category card displayed inside grid of categories on categories page
const Category = ({ category, setCategoryId }) => {
    return (
        <Link className="category" to={`/categories/${category._id}`} onClick={() => setCategoryId(category._id)}>
            <div className="category-wrapper">
                <h2 className="category-name">{category.name}</h2>
                {/* <div className="category-data">
                    <span>Total Cards: {completed.length + notCompleted.length}</span>
                    <span>Cards To Review: {completed.length}</span>
                    <span>Completed Cards: {notCompleted.length}</span>
                </div> */}
            </div>
            <div className="category-buttons">
                <Dropdown>
                    <CategoryOptions categoryId={category._id} className="link"/>
                </Dropdown>
            </div>
        </Link>
    )
}

export default Category;