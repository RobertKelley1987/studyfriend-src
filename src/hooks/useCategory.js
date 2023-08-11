import { useState, useEffect } from 'react';
import { getCategory } from '../services/categories';

// Hook to find a category and provide its related flashcards
const useCategory = (userId, categoryId) => {
    const [name, setName] = useState('');
    const [loadingCategory, setLoadingCategory] = useState(true);

    useEffect(() => {
        setLoadingCategory(true);
        
        const findCategory = async () => {
            const { data: { category } } = await getCategory(userId, categoryId);
            const { name } = category;
            setName(name);
            console.log('here');
            setLoadingCategory(false);
        }

        console.log(categoryId);
        console.log(userId);

        if(categoryId && userId) {
            findCategory();
        }
    }, [categoryId, userId]);

    console.log(loadingCategory);

    return { name, loadingCategory };
}

export default useCategory;