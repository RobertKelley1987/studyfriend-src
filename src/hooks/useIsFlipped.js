import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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