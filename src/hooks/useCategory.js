import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCategory } from '../services/categories';

// Hook to find a category and provide its related flashcards
const useCategory = userId => {
    const [name, setname] = useState('');
    const [completed, setCompleted] = useState([]);
    const [notCompleted, setNotCompleted] = useState([]);
    const { categoryId } = useParams();

    const flashcards = { completed, notCompleted };
    const setFlashcards = (({ completed, notCompleted }) => {
        setCompleted(completed);
        setNotCompleted(notCompleted);
    });

    const category = { _id: categoryId, name, flashcards }

    useEffect(() => {
        const findCategory = async () => {
            const { data: { category } } = await getCategory(userId, categoryId);
            const { name, flashcards } = category;
            setname(name);
            setCompleted(flashcards.completed);
            setNotCompleted(flashcards.notCompleted);
        }

        if(categoryId && userId) {
            findCategory();
        }
    }, [categoryId, userId]);

    return [category, setFlashcards];
}

export default useCategory;