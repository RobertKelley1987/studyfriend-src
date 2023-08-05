// Test if an object is empty, null or undefined 
export const isEmpty = (obj) => {
    return obj === null || obj === undefined || Object.keys(obj).length === 0;
}

// Add a new line before text containing new line chars, 
// ex: multiple part answers: "1. lorem\n 2. ipsum\n..."
export const formatText = text => {
    if(text.includes('\n') && text[0] !== '\n') {
        return '\n' + text;
    } else {
        return text;
    }
}

// Find a specified flashcard in a category and return it
export const findFlashcard = (category = { flashcards: [] }, flashcardId) => {
    return category.flashcards.find(flashcard => flashcard._id === flashcardId);
}

// Find a specified category in the user's categories and return it
export const findCategory = (categories, categoryId) => {
    return categories.find(category => category._id === categoryId);
}