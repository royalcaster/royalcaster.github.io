import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBarItem = ({ title, route, image, description, onHover }) => {

    const navigate = useNavigate();

    return (
        <div className='navbaritem-container' onClick={() => navigate(route)} onMouseEnter={onHover}>
            <img className='navbaritem-image' src={image} alt={title} />
            <div style={{height: "3em"}}></div>
            <p className='navbaritem-title'>{title}</p>
            <p className='navbaritem-description'>{description}</p>
        </div>
    );
};

export default NavBarItem;