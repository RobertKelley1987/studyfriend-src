import useFlashcardFormData from '../../hooks/useFlashcardFormData';
import Form from './Form';

// Form used to create new flashcard or edit a flashcard
const FlashcardForm = ({ flashcardToEdit, title, handleSubmit, submitting }) => {
    const [question, answer, setQuestion, setAnswer] = useFlashcardFormData(flashcardToEdit);

    const isValidated = () => question && answer;

    return (
        <div className="form-wrapper">
            <h2 className="form-heading">{title}</h2>
            <Form 
                handleSubmit={e => handleSubmit(e, { question, answer })} 
                isValidated={isValidated}
                submitting={submitting}
            >
                <input 
                    value={question} 
                    onChange={e => setQuestion(e.target.value)} 
                    type="text" 
                    className="form-input" 
                    placeholder="Question"
                />
                <textarea 
                    value={answer} 
                    onChange={e => setAnswer(e.target.value)} 
                    className="form-textarea" 
                    placeholder="Answer">
                </textarea>
            </Form>
        </div>
    )
}

export default FlashcardForm;