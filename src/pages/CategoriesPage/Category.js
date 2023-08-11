import { Link } from 'react-router-dom';
import Dropdown from '../../components/ui/Dropdown';
import CategoryOptions from '../../components/category/CategoryOptions';
import './Category.css';

// Category card displayed inside grid of categories on categories page
const Category = ({ category }) => {
    return (
        <Link className="category" to={`/categories/${category._id}`}>
            <div className="category-wrapper">
                <h2 className="category-name">{category.name}</h2>
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