import React from 'react';

const NavbarCanvas = ({ type }) => {
    

    return (
        <div className='canvas-container'>
            {type == "homepage" ? <p>Homepage</p> : null}
            {type == "minecraft-clash" ? <img className='canvas-image' src={require("../img/mc.webp")} /> : null}
            {type == "dnd" ? <img className='canvas-image' src={require("../img/dnd.png")} /> : null}
        </div>
    );
};

export default NavbarCanvas;