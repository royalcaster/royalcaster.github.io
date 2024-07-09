import { Link } from 'react-router-dom';

// Example of using Link in a component
function Navbar() {
    return (
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/minecraft-clash">Minecraft Clash</Link>
        </nav>
    );
}

export default Navbar;