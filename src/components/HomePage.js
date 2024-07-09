import React from 'react';

function HomePage() {
    return (
        <div>
            <h1>About Me</h1>
            <p>Here's some information about me, my career, and my projects.</p>
            <a href="/modpack">Check out my Minecraft Modpack</a>
            {/* If using React Router, replace the above line with:
                <Link to="/modpack">Check out my Minecraft Modpack</Link> */}
        </div>
    );
}

export default HomePage;