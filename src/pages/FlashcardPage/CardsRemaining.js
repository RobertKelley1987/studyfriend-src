import './CardsRemaining.css';

// Display cards remaining in study mode
const CardsRemaining = ({ numCards }) => {
    const renderAttrText = () => numCards === 1 ? " flashcard remaining" : " flashcards remaining";

    return (
        <p className="cards-remaining">
            {numCards} 
            <span data-text={renderAttrText()} className="cards-remaining-text">
                {/* " flashcards remaining" or " remaining" inserted by css based on screen size*/}
            </span>
        </p>
    );
}

export default CardsRemaining;