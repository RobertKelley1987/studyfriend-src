import { Link, useParams } from 'react-router-dom';
import BackArrowSVG from '../SVGs/BackArrowSVG';
import './ReturnLink.css';

const ReturnLink = ({ setIsStudying }) => {
    const { categoryId } = useParams();

    return (
        <Link data-text="Return To Category Page" className="return-link button" to={`/categories/${categoryId}`} onClick={() => setIsStudying(false)}>
            <BackArrowSVG />
        </Link>
    )
}

export default ReturnLink;