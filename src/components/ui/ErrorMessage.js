import './ErrorMessage.css';

const ErrorMessage = ({ message }) => {
    return message !== '' && message !== null && <p className="error-message">{message}</p>;
}

export default ErrorMessage;