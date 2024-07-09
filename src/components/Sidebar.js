import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar" id="sidebar">
            <div style={{ height: '100px' }}></div>
            <ul>
                <li><a href="#intro">Introduction</a></li>
                <li><a href="#modlist">Mod List</a></li>
                <li><a href="#details">Details</a></li>
                <li><a href="#impressum">Impressum</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
