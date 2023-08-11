import { Fragment } from 'react';
import EditFlashCardLink from './EditFlashcardLink';
import DeleteFlashcardLink from './DeleteFlashcardLink';

// CRUD options displayed on flashcard dropdowns and show page for flashcards.
// Completed button must be provided by parent
const FlashcardOptions = ({ flashcard, completedButton }) => {
    return (
        <Fragment>
            <EditFlashCardLink flashcard={flashcard} />
            <DeleteFlashcardLink flashcard={flashcard} />
            {completedButton}
        </Fragment>
    )
}

export default FlashcardOptions;