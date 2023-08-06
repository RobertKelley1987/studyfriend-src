import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Hook to track whether a card displays its question or answer.
// If isFlipped is true, answer is displayed
const useIsFlipped = () => {
    const [isFlipped, setIsFlipped] = useState(true); 
    const { flashcardId } = useParams();

    // Reset flipped status when show page renders new flashcard
    useEffect(() => {
        setIsFlipped(false);
    }, [flashcardId])

    return [isFlipped, setIsFlipped];
}

export default useIsFlipped;