import { useEffect, useState } from 'react';

const useToggleDropdown = optionsRef => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        function clickOutsideToClose(e) {
            if(!optionsRef.current || optionsRef.current.contains(e.target)) {
                return
            }

            setDropdownVisible(false);
        }
        document.body.addEventListener('mousedown', clickOutsideToClose);

        return () => document.body.removeEventListener('mousedown', clickOutsideToClose);
    }, [optionsRef]);

    return [dropdownVisible, setDropdownVisible];
}

export default useToggleDropdown;