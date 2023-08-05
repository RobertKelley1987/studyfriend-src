const CardsRemaining = ({ isStudying, category }) => {
    const numCardsRemaining = category.flashcards.filter(flashcard => !flashcard.completed);
    return <p>{numCardsRemaining.length} flashcards remaining</p>;;
}

export default CardsRemaining;