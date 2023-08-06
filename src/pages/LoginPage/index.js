import { useState } from 'react';
import { logInUser } from "../../services/users";
import AuthForm from '../../components/forms/AuthForm';
import ErrorMessage from '../../components/ui/ErrorMessage';
import DemoUserButton from './DemoUserButton';
import './LoginPage.css';

// User login page
const LoginPage = ({ setUserId }) => {
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className="page login-page">
            <ErrorMessage message={errorMessage}/>
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