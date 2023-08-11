import ReturnLink from '../../components/ui/ReturnLink';
import './CompletedPage.css';

// Page displayed to user when all flashcards in a category are marked completed
const CompletedPage = ({ categoryId, setIsStudying }) => {
    return (
        <div className="page completed-page">
            <ReturnLink className="return-link-category" setIsStudying={setIsStudying} link={`/categories/${categoryId}`}/>
            <div className="center-content">
                <h1>You completed this category!</h1>
            </div>
        </div>
    );
}

export default CompletedPage;