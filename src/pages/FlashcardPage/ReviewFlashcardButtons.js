import StudyModeCompletedButton from './StudyModeCompletedButton';
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
    const { flashcard, isFlipped, setIsFlipped, nextCardId, isStudying } = props;

    console.log(nextCardId);

    // Button to show answer
    const flipButton = <FlipCardButton isFlipped={isFlipped} setIsFlipped={setIsFlipped} format="long" />;
    
    // Buttons to move to next flahcard, with or without marking card completed 
    const reviewButtons = (
        <div className="review-flashcard-buttons">
            <StudyModeCompletedButton {...props} redirectLink={renderNextLink(flashcard.category, nextCardId)} />
            <ContinueButton {...props} className="button" nextLink={renderNextLink(flashcard.category, nextCardId)} />
        </div>
    );

    return (isFlipped && isStudying) ? reviewButtons : flipButton;
}

export default ReviewFlashcardButtons;