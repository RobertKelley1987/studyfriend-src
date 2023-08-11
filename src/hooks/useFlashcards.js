import { useState, useEffect } from 'react';
import { getFlashcards } from '../services/flashcards';

// Hook to find a provide flashcards, loading status and to reset values on category change
const useFlashcards = (userId, categoryId) => {
    const [completed, setCompleted] = useState([]);
    const [notCompleted, setNotCompleted] = useState([]);
    const [loadingFlashcards, setLoadingFlashcards] = useState(false);

    const setFlashcards = flashcards => {
        setCompleted(flashcards.completed);
        setNotCompleted(flashcards.notCompleted);
    }

    // If category id or user id changes in url, fetch flashcards for category and reset loading status
    useEffect(() => {
        setLoadingFlashcards(true);
        setFlashcards({ completed: [], notCompleted: [] }); // Reset so user does not see previous values

        const findFlashcards = async () => {
            const { data: { flashcards } } = await getFlashcards(userId, categoryId);
            setFlashcards(flashcards);
            setLoadingFlashcards(false);
        }

        if(categoryId && userId) {
            findFlashcards();
        }
    }, [categoryId, userId]);

    return { flashcards: { completed, notCompleted }, setFlashcards, loadingFlashcards };
}

export default useFlashcards;