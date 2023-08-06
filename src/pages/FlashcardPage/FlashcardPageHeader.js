import Dropdown from '../../components/ui/Dropdown';
import CardsRemaining from './CardsRemaining';
import FlashcardOptions from '../../components/flashcard/FlashcardOptions';
import ReturnLink from '../../components/ui/ReturnLink';
import './FlashcardPageHeader.css';

// Header options for the flashcard show page
const FlashcardPageHeader = props => {
    const { isStudying, setIsStudying, categories, category } = props;

    const cardsRemaining = <CardsRemaining category={category} />;
    const options = (
        <Dropdown categories={categories} svgClassName={"dropdown-svg-big"}>
            <FlashcardOptions {...props} categoryId={category._id} className="link" />
        </Dropdown>
    );

    return (
        <div className="flashcard-page-header">
            <ReturnLink className="button" setIsStudying={setIsStudying} />
            {isStudying ? cardsRemaining : options}
        </div>
    )
}

export default FlashcardPageHeader;