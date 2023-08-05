import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../../../services/users';

// Button in header used to log out user
const LogoutButton = ({ setErrorMessage, setUserId, setCategories }) => {
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleClick = async e => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await logOutUser();
            setUserId('');
            setCategories([]);
            navigate('/login');
        } catch (e) {
            setSubmitting(false);
            e && setErrorMessage("Failed to logout. Please try again.")
        }
    }

    return <button className="link" disabled={submitting} onClick={handleClick}>Log Out</button>;
}

export default LogoutButton;