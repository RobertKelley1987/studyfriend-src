import './FlashcardStatus.css';

const FlashcardStatus = ({ flashcard }) => {
    const status = flashcard.completed ? "Completed" : "Not Completed";
    return (
        <p className="flashcard-status">Status: {status}</p>
    );
}

export default FlashcardStatus;