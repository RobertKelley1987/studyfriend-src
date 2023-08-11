import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useNextCardId from './useNextCardId';
import useIsFlipped from '../../hooks/useIsFlipped';
import useFlashcard from '../../hooks/useFlashcard';
import useFlashcards from '../../hooks/useFlashcards';
import FlashcardContent from '../../components/flashcard/FlashcardContent';
import FlashcardPageHeader from './FlashcardPageHeader';
import ReviewFlashcardButtons from './ReviewFlashcardButtons';
import FlashcardStatus from './FlashcardStatus';
import Loading from '../../components/ui/Loading';
import './FlashcardPage.css';

// Flashcard show page, also used to show each flashcard in study mode 
const FlashcardPage = props => {
    const { userId, isStudying } = props;
    const { categoryId } = useParams();
    const { flashcard, setFlashcard } = useFlashcard(userId);
    const { flashcards, setFlashcards } = useFlashcards(userId, categoryId);
    const { nextCardId } = useNextCardId(flashcards);
    const [isFlipped, setIsFlipped] = useIsFlipped();
    const [updatingStatus, setUpdatingStatus] = useState(false);

    return (

        <div className="page flashcard-page">
            <FlashcardPageHeader 
                {...props} 
                flashcard={flashcard}
                setFlashcard={setFlashcard} 
                numRemaining={flashcards.notCompleted.length} 
                updatingStatus={updatingStatus}
                setUpdatingStatus={setUpdatingStatus}
            />

            <Loading 
                isLoading={(updatingStatus && isStudying)|| !flashcard._id} 
                loadingEl={<div className="page center-content">Loading...</div>}
            >
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
                            updatingStatus={updatingStatus}
                            setUpdatingStatus={setUpdatingStatus}
                            setFlashcards={setFlashcards}
                            setFlashcard={setFlashcard} 
                        />
                    </div>
                </div>

                {!isStudying && <FlashcardStatus updatingStatus={updatingStatus} flashcard={flashcard} />}
            </Loading>
        </div>
    );
}

export default FlashcardPage;