import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserIdContext } from '../../../context/UserIdContext';
import LogoutButton from './LogoutButton';
import './UserLinks.css';

// Sign up and log in links in Header component
const UserLinks = props => {
    const userId = useContext(UserIdContext);
    
    const authLinks = (
        <div className="user-links">
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    );

    return !userId ? authLinks : <LogoutButton {...props} />;
}

export default UserLinks;