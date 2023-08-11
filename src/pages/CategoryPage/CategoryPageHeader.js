import { Link, useParams } from 'react-router-dom';
import ResetButton from './ResetButton';
import StudyButton from './StudyButton';
import CategoryOptions from '../../components/category/CategoryOptions';
import Dropdown from '../../components/ui/Dropdown';
import PlusSVG from '../../components/SVGs/PlusSVG';
import './CategoryPageHeader.css';

// Options displayed at top of category page
const CategoryPageHeader = props => {  
    const { categoryId } = props;

    return (
        <div className="category-page-header">
            <div className="category-page-header-buttons">
                <Link className="button" to={`/categories/${categoryId}/flashcards/new`}>
                    <PlusSVG /> 
                    New Flashcard
                </Link>
                <StudyButton {...props} className="button" />
                <ResetButton {...props} />
            </div>
            <Dropdown svgClassName={"dropdown-svg-big"}>            
                <CategoryOptions categoryId={categoryId} />
            </Dropdown>
        </div>
    );
}

export default CategoryPageHeader;