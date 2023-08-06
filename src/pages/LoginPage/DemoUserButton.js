import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logInUser } from '../../services/users';
import ForwardArrowSVG from '../../components/SVGs/ForwardArrowSVG';

// Button to log in as demo user 
const DemoUserButton = ({ setErrorMessage, setUserId }) => {
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleClick = async () => {
        setSubmitting(true);

        const { userId, errorMessage } = await logInUser('demo@mail.com', '12345678');
        if(errorMessage) {
            setSubmitting(false);
            return setErrorMessage(errorMessage);
        } 
        setUserId(userId);
        navigate('/categories');
    }

    return(
        <button className="button" onClick={handleClick} disabled={submitting}>
            Use Demo Account
            <ForwardArrowSVG />
        </button>
    );
}


export default DemoUserButton;