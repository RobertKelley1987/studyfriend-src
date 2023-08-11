import './FlashcardStatus.css';

// Displays whether card was mark completed by user on the flashcard show page
const FlashcardStatus = ({ flashcard, updatingStatus }) => {
    const renderText = () => {
        const status = flashcard.completed ? "Completed" : "Not Completed";
        return updatingStatus ? "Updating..." : `Status: ${status}`;
    }

    return (
        <p className="flashcard-status">{renderText()}</p>
    );
}

export default FlashcardStatus;