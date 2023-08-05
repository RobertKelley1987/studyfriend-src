import { useNavigate } from 'react-router-dom';

const StudyButton = ({ className, firstCard, setIsStudying, categoryId }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if(firstCard) {
            setIsStudying(true);
            navigate(`/categories/${categoryId}/flashcards/${firstCard._id}`);
        }
    }

    return <button className={className} disabled={!firstCard} onClick={handleClick}>Start Studying</button>;
}

export default StudyButton;