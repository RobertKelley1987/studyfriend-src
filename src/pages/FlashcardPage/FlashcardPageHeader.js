import Dropdown from '../../components/ui/Dropdown';
import CardsRemaining from './CardsRemaining';
import FlashcardOptions from '../../components/flashcard/FlashcardOptions';
import FlashcardPageCompletedButton from './FlashcardPageCompletedButton';
import ReturnLink from '../../components/ui/ReturnLink';
import './FlashcardPageHeader.css';

// Header options for the flashcard show page
const FlashcardPageHeader = props => {
    const { isStudying, setIsStudying, categories, flashcard, numRemaining } = props;

    const cardsRemaining = <CardsRemaining numCards={numRemaining} />;

    const options = (
        <Dropdown categories={categories} svgClassName={"dropdown-svg-big"}>
            <FlashcardOptions 
                {...props} 
                completedButton={<FlashcardPageCompletedButton {...props} />}
            />
        </Dropdown>
    );

    return (
        <div className="flashcard-page-header">
            <ReturnLink 
                setIsStudying={setIsStudying} 
                className="return-link-category" 
                link={`/categories/${flashcard.category}`} 
            />
            {isStudying ? cardsRemaining : options}
        </div>
    )
}

export default FlashcardPageHeader;