import { useState, useEffect } from 'react';
import { getCategory } from '../services/categories';

// Hook to find a category and provide its related flashcards
const useCategory = (userId, categoryId) => {
    const [name, setName] = useState('');
    const [loadingCategory, setLoadingCategory] = useState(true);

    useEffect(() => {
        setLoadingCategory(true);
        setName('');
        
        const findCategory = async () => {
            const { data: { category } } = await getCategory(userId, categoryId);
            const { name } = category;
            setName(name);
            setLoadingCategory(false);
        }

        if(categoryId && userId) {
            findCategory();
        }
    }, [categoryId, userId]);

    return { name, setName, loadingCategory };
}

export default useCategory;