import { useState } from 'react';
import { signUpUser } from "../../services/users";
import AuthForm from "../../components/forms/AuthForm";
import ErrorMessage from '../../components/ui/ErrorMessage';

const SignupPage = ({ setUserId }) => {
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className="page">
            <ErrorMessage message={errorMessage}/>
            <div className="center-content">
                <AuthForm 
                    title="Sign Up" 
                    authFn={signUpUser}
                    setErrorMessage={setErrorMessage}
                    setUserId={setUserId}
                    includeHints={true} 
                />
            </div>
        </div>
    );
}

export default SignupPage;
