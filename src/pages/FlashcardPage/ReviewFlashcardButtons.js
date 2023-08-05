import { useParams } from 'react-router-dom';
import CompletedButton from '../../components/flashcard/CompletedButton';
import ContinueButton from './ContinueButton';
import FlipCardButton from '../../components/flashcard/FlipCardButton';
import './ReviewFlashcardButtons.css';

// Helper function that returns where button will redirect user
const renderNextLink = (categoryId, cardId) => {
    if(!cardId) {
        return `/categories/${categoryId}/completed`;
    } else {
        return `/categories/${categoryId}/flashcards/${cardId}`;
    }
}

// Buttons below flashcard content on flashcard show page / study mode
const ReviewFlashcardButtons = props => {
    const { categoryId } = useParams();
    const { isFlipped, setIsFlipped, nextCardId, isStudying } = props;

    // Button to show answer
    const flipButton = <FlipCardButton isFlipped={isFlipped} setIsFlipped={setIsFlipped} format="long" />;
    
    // Buttons to move to next flahcard, with or without marking card completed 
    const reviewButtons = (
        <div className="review-flashcard-buttons">
            <CompletedButton {...props} className="button" redirectLink={renderNextLink(categoryId, nextCardId)} />
            <ContinueButton {...props} className="button" nextLink={renderNextLink(categoryId, nextCardId)} />
        </div>
    );

    return (isFlipped && isStudying) ? reviewButtons : flipButton;
}

export default ReviewFlashcardButtons;