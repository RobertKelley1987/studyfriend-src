import { useEffect } from 'react';
import { logInUser } from "../../services/users";
import AuthForm from '../../components/forms/AuthForm';
import DemoUserButton from './DemoUserButton';
import './LoginPage.css';

// User login page
const LoginPage = ({ setUserId, setErrorMessage }) => {
    // Clear prev error messages before unmount
    useEffect(() => {
        return () => setErrorMessage('');
    }, [setErrorMessage]);

    return (
        <div className="page login-page">
            <main className="login-page-wrapper">
                <AuthForm 
                    title="Log In" 
                    authFn={logInUser} 
                    setErrorMessage={setErrorMessage}
                    setUserId={setUserId} 
                    includeHints={false}
                />
                <p>Or</p>
                <DemoUserButton setErrorMessage={setErrorMessage} setUserId={setUserId} />
            </main>
        </div>
    );
}

export default LoginPage;