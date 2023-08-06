import './CardsRemaining.css';

// Display cards remaining in study mode
const CardsRemaining = ({ category }) => {
    return (
        <p className="cards-remaining">
            {category.flashcards.notCompleted.length} 
            <span className="cards-remaining-text">
                {/* " flashcards remaining" or " remaining" inserted by css based on screen size*/}
            </span>
        </p>
    );
}

export default CardsRemaining;