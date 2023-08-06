import './ErrorPage.css';

// Page to display in case of server disconnection or unrecoverable error
const ErrorPage = () => {
    return (
        <div className="error-page center-content">
            <p>We're having some technical difficulties. Try us again in a few minutes.</p>
        </div>
    );
}

export default ErrorPage;