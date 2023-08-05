import { Fragment } from 'react';
import CompletedButton from './CompletedButton';
import EditFlashCardLink from './EditFlashcardLink';
import DeleteFlashcardLink from './DeleteFlashcardLink';

// CRUD options displayed on flashcard dropdowns and show page for flashcards.
const FlashcardOptions = props => {
    const { flashcard, categoryId, className } = props;

    return (
        <Fragment>
            <EditFlashCardLink categoryId={categoryId} flashcardId={flashcard._id} />
            <DeleteFlashcardLink categoryId={categoryId} flashcardId={flashcard._id} />
            <CompletedButton {...props} className={className} />
        </Fragment>
    )
}

export default FlashcardOptions;