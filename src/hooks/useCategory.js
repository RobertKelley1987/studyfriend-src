import { useState, useEffect } from 'react';
import { getCategory } from '../services/categories';

// Hook to find a category and provide its related flashcards
const useCategory = (userId, categoryId) => {
    const [name, setName] = useState('');
    const [completed, setCompleted] = useState([]);
    const [notCompleted, setNotCompleted] = useState([]);
    const [loadingCategory, setLoadingCategory] = useState(false);

    const flashcards = { completed, notCompleted };
    const setFlashcards = (({ completed, notCompleted }) => {
        setCompleted(completed);
        setNotCompleted(notCompleted);
    });

    const category = { _id: categoryId, name, flashcards }

    useEffect(() => {
        setLoadingCategory(true);
        const findCategory = async () => {
            const { data: { category } } = await getCategory(userId, categoryId);
            const { name, flashcards } = category;
            setName(name);
            setCompleted(flashcards.completed);
            setNotCompleted(flashcards.notCompleted);
        }

        if(categoryId && userId) {
            findCategory();
            setLoadingCategory(false);
        }
    }, [categoryId, userId]);

    return { category, loadingCategory, setFlashcards };
}

export default useCategory;