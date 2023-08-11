import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Hook to update app state to reflect category id from url
const useCategoryId = setCategoryId => {
    const { categoryId } = useParams();

    // If category id in url changes, update in app state
    useEffect(() => {
        setCategoryId(categoryId);

        return () => setCategoryId('');
    }, [categoryId, setCategoryId]);
}

export default useCategoryId;