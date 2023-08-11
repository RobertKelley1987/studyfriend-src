import { useNavigate } from "react-router-dom";

// Button to navigate to Edit Flashcard page.
// Nested links were causing issues in mobile, so I am replacing the
// links required in the Flashcard component with buttons.

/****************************************************** 
NOTE: Cannot access flashcardId with useParams here. 
MUST USE A FLASHCARD PROP PASSED FROM PARENT.
******************************************************/

const EditFlashcardLink = ({ flashcard }) => {
    const flashcardURL = `/categories/${flashcard.category}/flashcards/${flashcard._id}`;
    const navigate = useNavigate();
    
    const handleClick = e => {
        e.preventDefault(); // If inside a link, do not trigger it
        navigate(`${flashcardURL}/edit`);
    }

    return <button className="link" onClick={handleClick}>Edit Flashcard</button>;
}

export default EditFlashcardLink;