import NavbarCanvas from './NavbarCanvas';
import NavBarItem from './NavBarItem';
import { useState } from 'react';

const Navbar = () => {

    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <div className='navbar-wrapper'>
            <nav className='navbar'>
                <NavBarItem 
                    title='Über mich'
                    route='/homepage'
                    image={require('../img/mc.webp')}
                    description={"Informationen, Kontakt und Lebenslauf"}
                    onHover={() => setHoveredItem('homepage')}
                />
                <NavBarItem 
                    title='Minecraft Clash'
                    route='/minecraft-clash'
                    image={require('../img/logo.png')}
                    description={"Mein eigenes Minecraft-Modpack"}
                    onHover={() => setHoveredItem('minecraft-clash')}
                />
                <NavBarItem 
                    title='DnD Material'
                    route='/dnd'
                    image={require('../img/dnd_logo.png')}
                    description={"Nützliches Material für meine DnD-Gruppe"}
                    onHover={() => setHoveredItem('dnd')}
                />
                <NavbarCanvas type={hoveredItem}/>

            </nav>
        </div>
    );
}

export default Navbar;