import React, { useState } from 'react';
import ToggleIcon from './ToggleIcon';

const Section = ({ id, title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id={id} className="section">
            <h2 onClick={toggleSection}>
                <ToggleIcon isOpen={isOpen} /> {title}
            </h2>
            {isOpen && <div className="section-content">{children}</div>}
        </div>
    );
};

export default Section;
