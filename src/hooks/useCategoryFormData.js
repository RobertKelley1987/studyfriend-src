import { useState, useEffect } from 'react';

// Hook to provide state for new/edit category form.
const useCategoryFormData = nameToEdit => {
    const [categoryName, setCategoryName] = useState('');

    useEffect(() => {
        // If a flashcard category is provided, init value for flashcard edit form
        if(nameToEdit) {
            setCategoryName(nameToEdit);
        }
    }, [nameToEdit]);

    return [categoryName, setCategoryName];
}

export default useCategoryFormData;