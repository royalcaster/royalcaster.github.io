import React from 'react';

const ToggleIcon = ({ isOpen }) => {
    return <span className="toggle-icon">{isOpen ? '▼' : '►'}</span>;
};

export default ToggleIcon;
