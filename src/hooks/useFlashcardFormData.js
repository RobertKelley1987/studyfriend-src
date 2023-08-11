import { useState, useEffect } from 'react';

// Hook to provide state for flashcard form. Also inits values for an edit form.
const useFlashcardFormData = (flashcardToEdit) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState(''); 

    useEffect(() => {
        // INITIAL RENDER ONLY
        // If a flashcard is provided for editing, init values for flashcard edit form
        if(flashcardToEdit) {
            setQuestion(flashcardToEdit.question);
            setAnswer(flashcardToEdit.answer);
        }
    }, []);

    // Return combined state with and set methods
    return [question, answer, setQuestion, setAnswer];
}

export default useFlashcardFormData;