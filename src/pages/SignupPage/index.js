import { useEffect } from 'react';
import { signUpUser } from "../../services/users";
import AuthForm from "../../components/forms/AuthForm";

// User signup page
const SignupPage = ({ setUserId, setErrorMessage }) => {
    // Clear prev error messages before unmount
    useEffect(() => {
        return () => setErrorMessage('');
    }, [setErrorMessage]);

    return (
        <div className="page">
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
