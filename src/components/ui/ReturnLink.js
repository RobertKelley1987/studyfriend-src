import { Link } from 'react-router-dom';
import BackArrowSVG from '../SVGs/BackArrowSVG';
import './ReturnLink.css';

// Returns user to category page
const ReturnLink = ({ setIsStudying, text, link }) => {
    return (
        <Link className="return-link button" to={link} onClick={() => setIsStudying(false)} data-text={text}>
            <BackArrowSVG />
            {/* "Return to Categories Page" or "Back" inserted here by css based on screen size. */}
        </Link>
    )
}

export default ReturnLink;