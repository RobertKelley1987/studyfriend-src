import { Link, useParams } from 'react-router-dom';
import ResetButton from './ResetButton';
import StudyButton from './StudyButton';
import CategoryOptions from '../../components/category/CategoryOptions';
import PlusSVG from '../../components/SVGs/PlusSVG';
import './CategoryPageHeader.css';
import Dropdown from '../../components/ui/Dropdown';

const CategoryPageHeader = props => {
    const { setCategories, completed } = props;
    const { categoryId = '' } = useParams();
    
    return (
        <div className="category-page-header">
            <div className="category-page-header-buttons">
                <Link className="button" to={`/categories/${categoryId}/flashcards/new`}>
                    <PlusSVG /> 
                    New Flashcard
                </Link>
                <StudyButton {...props} categoryId={categoryId} className="button" />
                <ResetButton className="button" completed={completed} setCategories={setCategories} />
            </div>
            <Dropdown svgClassName={"dropdown-svg-big"}>            
                <CategoryOptions categoryId={categoryId} className="link" />
            </Dropdown>
        </div>
    );
}

export default CategoryPageHeader;