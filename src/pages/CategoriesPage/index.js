import { Link } from 'react-router-dom';
import Categories from './Categories';
import PlusSVG from '../../components/SVGs/PlusSVG';
import Loading from '../../components/ui/Loading';
import './CategoriesPage.css';

const CategoriesPage = ({ categories, categoriesLoading, setCategoryId }) => {
    return (
        <div className="page">
            <div className="page-options">
                <Link to="/categories/new" className="button">
                    <PlusSVG /> 
                    New Category
                </Link>
            </div>

            <h1 className="categories-page-heading">Categories</h1>
            <Loading isLoading={categoriesLoading} loadingEl="Loading...">
                <Categories categories={categories} setCategoryId={setCategoryId} />
            </Loading>
        </div>
    );
}

export default CategoriesPage;