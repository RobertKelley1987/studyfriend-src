import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Finds the id of the next flashcard in a category based on card
// the card currently displayed
const useNextCardId = category => {
    const [nextCardId, setNextCardId] = useState('');
    const { flashcardId } = useParams(); // ID of flashcard currently shown to user

    useEffect(() => {
        if(category) {
            // Find all cards marked as not completed, i.e. need to be reviewed
            const cardsToReview = category.flashcards.filter(flashcard => !flashcard.completed);
            // Find index of the desired flashcard
            const cardIndex = cardsToReview.findIndex(flashcard => flashcard._id === flashcardId);
            // If there is a card after the desired flashcard, return it, otherwise return 1st card in array. 
            const nextCard = cardsToReview[cardIndex + 1] || cardsToReview[0];
            // If this is the last flashcard, set next card state to empty string, otherwise set next card's id
            !cardsToReview[1] ? setNextCardId('') : setNextCardId(nextCard._id)
        }
        
    }, [category, flashcardId]);

    return { nextCardId }
}

export default useNextCardId;