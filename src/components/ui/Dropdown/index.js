import { useEffect, useRef } from 'react';
import useToggleDropdown from './useToggleDropdown';
import usePositionDropdown from './usePositionDropdown';
import MoreSVG from '../../SVGs/MoreSVG';
import './Dropdown.css';

/* Component for dropdown menu used within grid elements.
   2 separate refs: One references the element whose visibility is toggled,
   and the other references the wrapper for the svg and dropdown used for the "click 
   outside to close" feature */

const Dropdown = ({ categories, children, svgClassName }) => {
    const options = useRef(null);
    const optionsWrapper = useRef(null);
    const [dropdownVisible, setDropdownVisible] = useToggleDropdown(optionsWrapper);
    const { style } = usePositionDropdown(options, dropdownVisible);

    // When categories updates, make dropdown not visible. Specifically, if this isn't here,
    // if feels very awkward after clicking the "change status" link on the flashcard page.
    useEffect(() => {
        setDropdownVisible(false);
    }, [categories, setDropdownVisible])

    const handleClick = e => {
        e.preventDefault(); // Prevent user from going to show page
        setDropdownVisible(prev => !prev); // Open or close depending on state
    }

    return (
        <div ref={optionsWrapper} className="dropdown-wrapper">
            <MoreSVG className={`dropdown-svg ${svgClassName}`} handleClick={handleClick} />
            {dropdownVisible && <div ref={options} className="dropdown" style={style}>{children}</div>}
        </div>
    );
}

export default Dropdown;