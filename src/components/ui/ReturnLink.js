import { Link } from 'react-router-dom';
import BackArrowSVG from '../SVGs/BackArrowSVG';
import './ReturnLink.css';

// Returns user to category page
const ReturnLink = ({ setIsStudying, link, className }) => {
    return (
        <Link className={`${className} button`} to={link} onClick={() => setIsStudying(false)}>
            <BackArrowSVG />
            {/* "Return to Categories Page" or "Back" inserted here by css based on screen size. */}
        </Link>
    )
}

export default ReturnLink;