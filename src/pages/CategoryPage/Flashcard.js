import { useState } from 'react';
import { Link } from 'react-router-dom';
import FlashcardOptions from '../../components/flashcard/FlashcardOptions';
import FlashcardContent from '../../components/flashcard/FlashcardContent';
import FlipCardButton from '../../components/flashcard/FlipCardButton';
import Dropdown from '../../components/ui/Dropdown';
import './Flashcard.css';

// Flashcard element displayed in grid on category page
const Flashcard = props => {
    const [isFlipped, setIsFlipped] = useState(false);
    const { flashcard, categoryId } = props;

    return (
        <Link to={`/categories/${categoryId}/flashcards/${flashcard._id}`} className="flashcard">
            <FlashcardContent 
                isFlipped={isFlipped} 
                flashcard={flashcard} 
                className="flashcard-content flashcard-content-small" 
            />
            <div className="flashcard-buttons">
                <FlipCardButton isFlipped={isFlipped} setIsFlipped={setIsFlipped} format="short" />
                <Dropdown {...props} >
                    <FlashcardOptions {...props} className="link" />
                </Dropdown>
            </div>
        </Link>
    );
}

export default Flashcard;