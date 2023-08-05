import { useEffect, useState } from 'react';
import { getCategories } from '../services/categories';

// Hook to provide app with user's populated categories and loading status
const useCategories = userId => {
    const [categories, setCategories] = useState([]);
    const [categoriesLoading, setCategoriesLoading] = useState(true);

    useEffect(() => {
        setCategoriesLoading(true);

        const fetchData = async () => {
            const { data } = await getCategories(userId);
            setCategories(data.categories);
            setCategoriesLoading(false);
        }

        if(userId) {
            fetchData();
        }
    }, [userId]);

    return [categories, setCategories, categoriesLoading];
}

export default useCategories;