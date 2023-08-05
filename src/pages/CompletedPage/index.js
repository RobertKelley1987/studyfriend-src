import ReturnLink from '../../components/ui/ReturnLink';
import './CompletedPage.css';

const CompletedPage = ({ setIsStudying }) => {
    return (
        <div className="page completed-page">
            <ReturnLink className="button" setIsStudying={setIsStudying}/>
            <div className="center-content">
                <h1>You completed this category!</h1>
            </div>
        </div>
    );
}

export default CompletedPage;