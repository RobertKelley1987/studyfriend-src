import './FlashcardStatus.css';

// Displays whether card was mark completed by user on the flashcard show page
const FlashcardStatus = ({ flashcard }) => {
    const status = flashcard.completed ? "Completed" : "Not Completed";
    return (
        <p className="flashcard-status">Status: {status}</p>
    );
}

export default FlashcardStatus;