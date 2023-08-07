import CloseSVG from '../SVGs/CloseSVG';
import './ErrorMessage.css';

const ErrorMessage = ({ message, setErrorMessage }) => {
    const messageExists = message !== '' && message !== null;
    return messageExists && (
        <p className="error-message">
            <span>{message}</span>
            <CloseSVG handleClick={() => setErrorMessage('')}/>
        </p>
    );
}

export default ErrorMessage;