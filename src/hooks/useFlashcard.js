import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFlashcard } from '../services/flashcards';

const useFlashcard = userId => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [completed, setCompleted] = useState(false);
    const { categoryId, flashcardId } = useParams();

    const flashcard = { _id: flashcardId, question, answer, completed };

    const setFlashcard = (question, answer, completed) => {
        setQuestion(question);
        setAnswer(answer);
        if(typeof(completed) === 'boolean') {
            setCompleted(completed);
        }
    }

    useEffect(() => {
        setFlashcard('', ''); // Clear prev values

        const findFlashcard = async () => {
            const { data: { flashcard } } = await getFlashcard(userId, categoryId, flashcardId);
            const { question, answer, completed } = flashcard;
            setFlashcard(question, answer, completed);
        }

        if(userId && categoryId && flashcardId) {
            findFlashcard();
        }
    }, [flashcardId, categoryId, userId]);

    return flashcard;
}

export default useFlashcard;