import "./Form.css";

// Reusable form component to control disabling of submit button
const Form = ({ children, handleSubmit, submitting, isValidated }) => {
    return (
        <form className="form" onSubmit={handleSubmit}>
            {children}
            <button className="button" type="submit" disabled={!isValidated() || submitting}>Submit</button>
        </form>
    );
}

export default Form;