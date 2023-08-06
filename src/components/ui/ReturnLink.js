import { Link, useParams } from 'react-router-dom';
import BackArrowSVG from '../SVGs/BackArrowSVG';
import './ReturnLink.css';

// Returns user to category page
const ReturnLink = ({ setIsStudying }) => {
    const { categoryId } = useParams();

    return (
        <Link 
            className="return-link button" 
            to={`/categories/${categoryId}`} 
            onClick={() => setIsStudying(false)}
        >
            <BackArrowSVG />
            {/* "Return to Categories Page" or "Back" inserted here by css based on screen size. */}
        </Link>
    )
}

export default ReturnLink;