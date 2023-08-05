import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, userId }) => {

    console.log("userId is " + userId);

    if(!userId) {
        return <Navigate to="/login" />
    }

    return children;
}

export default ProtectedRoute;