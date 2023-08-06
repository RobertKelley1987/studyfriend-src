import { useParams } from 'react-router-dom';
import useNextCardId from './useNextCardId';
import useIsFlipped from '../../hooks/useIsFlipped';
import { findCategory, findFlashcard } from '../../utils';
import FlashcardContent from '../../components/flashcard/FlashcardContent';
import FlashcardPageHeader from './FlashcardPageHeader';
import ReviewFlashcardButtons from './ReviewFlashcardButtons';
import FlashcardStatus from './FlashcardStatus';
import './FlashcardPage.css';

// Flashcard show page, also used to show flascards in study mode 
const FlashcardPage = props => {
    const { categories, isStudying } = props;
    const [isFlipped, setIsFlipped] = useIsFlipped();
    const { categoryId, flashcardId } = useParams();
    const category = findCategory(categories, categoryId);
    const flashcard = findFlashcard(category, flashcardId);
    const { nextCardId } = useNextCardId(category);

    return (
        <div className="page flashcard-page">
            <FlashcardPageHeader {...props} categories={categories} category={category} flashcard={flashcard} />
            <div className="center-content">
                <div className="flashcard-wrapper">
                    <FlashcardContent 
                        isFlipped={isFlipped} 
                        flashcard={flashcard} 
                        className="flashcard-content flashcard-content-big" 
                    />
                    <ReviewFlashcardButtons 
                        {...props} 
                        flashcard={flashcard}
                        isFlipped={isFlipped}
                        setIsFlipped={setIsFlipped}
                        nextCardId={nextCardId}
                    />
                </div>
            </div>
            {!isStudying && <FlashcardStatus flashcard={flashcard} />}
        </div>
    );
}

export default FlashcardPage;