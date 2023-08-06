import './CardsRemaining.css';

// Display cards remaining in study mode
const CardsRemaining = ({ category }) => {
    const numCardsRemaining = category.flashcards.filter(flashcard => !flashcard.completed);
    return (
        <p className="cards-remaining">
            {numCardsRemaining.length} 
            <span className="cards-remaining-text">
                {/* " flashcards remaining" or " remaining" inserted by css based on screen size*/}
            </span>
        </p>
    );
}

export default CardsRemaining;