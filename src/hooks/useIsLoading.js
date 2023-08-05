import { useState, useEffect } from 'react';

const useIsLoading = loadingState => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        
        if(loadingState) {
            setIsLoading(false);
        }
    }, [loadingState]);

    return [isLoading, setIsLoading];
}

export default useIsLoading;