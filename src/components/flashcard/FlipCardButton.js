const CONTENT = {
    "short": {
        question: "Flip",
        answer: "Flip"
    },
    "long": {
        question: "Show Answer",
        answer: "Return To Question"
    }
}

// Button used to toggle question and answer both in grid cards and on show page for flashcard
const FlipCardButton = ({ isFlipped, setIsFlipped, format }) => {
    const { question, answer } = CONTENT[format];

    const handleClick = e => {
        e.preventDefault(); // Do not trigger link to show page if button is in a flashcard element
        setIsFlipped(prev => !prev);
    }
    
    return <button className="button" onClick={handleClick}>{!isFlipped ? question : answer}</button>
}

export default FlipCardButton;