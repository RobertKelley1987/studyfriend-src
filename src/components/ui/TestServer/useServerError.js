import { useEffect, useState } from 'react';
import { api } from '../../../services/api';

// Hook to confirm app can connect to server and provide error state
const useServerError = () => {
    const [serverError, setServerError] = useState(false);

    useEffect(() => {
        const pingServer = async () => {
            try {
                const { data } = await api.get('/test');
                if(data.successMessage === 'OK') {
                    setServerError(false);
                } else {
                    setServerError(true);
                }
            } catch (e) {
                e && setServerError(true);
            }
        }

        pingServer();
    }, []);

    return [serverError, setServerError];
}

export default useServerError;