import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import AuthHints from './AuthHints';

// Form used for user log in and sign up
const AuthForm = ({ title, authFn, setErrorMessage, setUserId, includeHints }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [insideForm, setInsideForm] = useState(false);
    const navigate = useNavigate();

    const showHints = includeHints && insideForm

    const handleSubmit = async (e, email, password) => {
        e.preventDefault();
        setSubmitting(true);
        
        const { userId, errorMessage } = await authFn(email, password);
        if(errorMessage) {
            setSubmitting(false);
            setErrorMessage(errorMessage);
        } else {
            setUserId(userId);
            navigate('/categories');
        }
    }

    const isValidated = () => email.trim().length && password.trim().length >= 8;

    return (
        <div className="form-wrapper" onFocus={() => setInsideForm(true)} onBlur={() => setInsideForm(false)}>
            {showHints && <AuthHints email={email} password={password} />} 

            <h2 className="form-heading">{title}</h2>
            <Form 
                handleSubmit={e => handleSubmit(e, email, password)} 
                isValidated={isValidated}
                submitting={submitting}
            >
                <input 
                    onChange={e => setEmail(e.target.value)} 
                    value={email} 
                    type="text"
                    placeholder="Email"
                    className="form-input"
                />
                <input 
                    onChange={e => setPassword(e.target.value)} 
                    value={password} 
                    type="password"
                    placeholder="Password"
                    className="form-input"
                />
            </Form>
        </div>
    );
}

export default AuthForm;