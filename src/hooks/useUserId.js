import { useState, useEffect } from 'react';
import { getSession } from '../services/users';

// Hook to get userId on render and provide state / loading state to app
const useUserId = () => {
    const [userId, setUserId] = useState('');
    const [loadingUserId, setLoadingId] = useState(true);

    useEffect(() => {
        const findSession = async () => {
            const { data } = await getSession();
            setUserId(data.userId);
            setLoadingId(false);
        }

        findSession();
    }, []);

    return [userId, setUserId, loadingUserId];
}

export default useUserId;