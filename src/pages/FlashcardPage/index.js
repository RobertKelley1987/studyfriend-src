import useNextCardId from './useNextCardId';
import useIsFlipped from '../../hooks/useIsFlipped';
import useCategory from '../../hooks/useCategory';
import useFlashcard from './useFlashcard';
import FlashcardContent from '../../components/flashcard/FlashcardContent';
import FlashcardPageHeader from './FlashcardPageHeader';
import ReviewFlashcardButtons from './ReviewFlashcardButtons';
import FlashcardStatus from './FlashcardStatus';
import Loading from '../../components/ui/Loading';
import './FlashcardPage.css';

// Flashcard show page, also used to show flascards in study mode 
const FlashcardPage = props => {
    const { userId, categories, isStudying } = props;
    const [isFlipped, setIsFlipped] = useIsFlipped();
    const flashcard = useFlashcard(userId);
    const { nextCardId } = useNextCardId(category);

    return (
        <Loading 
            isLoading={!category.name || !flashcard.question} 
            loadingEl={<div className="page center-content">Loading...</div>}
        >
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
                            setFlashcards={setFlashcards}
                            flashcard={flashcard}
                            isFlipped={isFlipped}
                            setIsFlipped={setIsFlipped}
                            nextCardId={nextCardId}
                        />
                    </div>
                </div>
                {!isStudying && <FlashcardStatus flashcard={flashcard} />}
            </div>
        </Loading>
    );
}

export default FlashcardPage;