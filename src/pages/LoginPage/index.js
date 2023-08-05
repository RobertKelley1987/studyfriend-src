import { useState } from 'react';
import { logInUser } from "../../services/users";
import AuthForm from '../../components/forms/AuthForm';
import ErrorMessage from '../../components/ui/ErrorMessage';

const LoginPage = ({ setUserId }) => {
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className="page">
            <ErrorMessage message={errorMessage}/>
            <div className="center-content">
                <AuthForm 
                    title="Log In" 
                    authFn={logInUser} 
                    setErrorMessage={setErrorMessage}
                    setUserId={setUserId} 
                    includeHints={false}
                />
            </div>
        </div>
    );
}

export default LoginPage;