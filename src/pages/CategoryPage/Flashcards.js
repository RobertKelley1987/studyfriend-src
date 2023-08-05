import Flashcard from './Flashcard';
import Grid from '../../components/layout/Grid';

const Flashcards = props => {
    const { flashcards } = props;

    const flashcardsGrid = (
        <Grid>
            {flashcards.map(flashcard => <Flashcard {...props} key={flashcard._id} flashcard={flashcard} />)}
        </Grid>
    );

    return !flashcards.length ? <p>No cards to display</p> : flashcardsGrid; 
}

export default Flashcards;