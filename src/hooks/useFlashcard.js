import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFlashcard } from '../services/flashcards';
import { DEFAULT_FLASHCARD } from '../utils';

const useFlashcard = userId => {
    const [_id, setId] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [completed, setCompleted] = useState(false);
    const [category, setCategory] = useState('');
    const { categoryId, flashcardId } = useParams();

    const setFlashcard = flashcard => {
        const { _id, question, answer, completed, category } = flashcard;
        setId(_id);
        setQuestion(question);
        setAnswer(answer);
        setCompleted(completed);
        setCategory(category);
    }

    useEffect(() => {
        setFlashcard(DEFAULT_FLASHCARD); // Clear prev values

        const findFlashcard = async () => {
            const { data: { flashcard } } = await getFlashcard(userId, categoryId, flashcardId);
            setFlashcard(flashcard);
        }

        if(userId && categoryId && flashcardId) {
            findFlashcard();
        }
    }, [flashcardId, categoryId, userId]);

    return { flashcard: { _id, question, answer, completed, category }, setFlashcard };
}

export default useFlashcard;