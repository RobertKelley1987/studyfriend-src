import useServerError from './useServerError'
import ErrorPage from '../../../pages/ErrorPage';

// Component to confirm server is running before displaying app
const TestServer = ({ children }) => {
    const [serverError] = useServerError();

    return serverError ? <ErrorPage /> : children; 
}

export default TestServer;