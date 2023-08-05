import { useEffect, useState } from 'react';

const usePositionDropdown = (optionsRef, dropdownVisible) => {
    const [xPixels, setXPixels] = useState(0);
    const [yPixels, setYPixels] = useState(0);
    const [calculating, setCalculating] = useState(true);

    useEffect(() => {
        setCalculating(true);

        if(optionsRef.current) {
            // Calculate position of dropdown on window
            const { x, width, bottom, height } = optionsRef.current.getBoundingClientRect();
            const rightBorderLocation = x + width;
            
            let translateX = 0, translateY = 0; // Amount to move dropdown if overflow occurrs

            // Test if dropdown's right edge will overflow window 
            if(rightBorderLocation > window.innerWidth) {
                translateX = Math.round(width - 5);
            } 

            // Test if dropdown's bottom will overflow window
            if(bottom > window.innerHeight) {
                translateY = Math.round(height);
            } 

            setXPixels(translateX);
            setYPixels(translateY);
            setCalculating(false);
        }
    }, [dropdownVisible, optionsRef]);

    const style = { 
        opacity: calculating ? "0" : "1",
        transform: !calculating && `translate(-${xPixels}px, -${yPixels}px)` 
    }

    return { style };
}

export default usePositionDropdown;