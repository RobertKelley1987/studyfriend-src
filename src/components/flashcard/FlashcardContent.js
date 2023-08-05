import { formatText } from '../../utils';
import './FlashcardContent.css';

// Content from flashcard used in grid cards and show page for flashcard
const FlashcardContent = ({ isFlipped, flashcard, className }) => {
    const selected = !isFlipped ? "question" : "answer";

    return (
        <p className={className}>
            <span className="flashcard-content-title">{selected}: </span>
            {formatText(flashcard[selected])}        
        </p>
    )
}

export default FlashcardContent;