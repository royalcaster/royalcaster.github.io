import { NavLink } from 'react-router-dom';

// Example of using Link in a component
function Navbar() {
    return (
        <nav className='navbar'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>Home</NavLink>
            <NavLink to="/minecraft-clash" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
                Minecraft Clash
            </NavLink>
        </nav>
    );
}

export default Navbar;