import React from 'react';
import Section from './Section';

const Content = () => {
    return (
        <div className="content">

            <img src={require("../img/logo.png")} style={{width: "8em", height: "auto"}}></img>

            <Section id="intro" title="Welcome to the Minecraft Modpack">
                <img src="placeholder.png" alt="Artwork" className="artwork" />
                <p>This modpack offers a unique blend of mods that enhance gameplay with new adventures, challenges, and tools.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vehicula, leo vel suscipit placerat, nisi mi volutpat orci, et pharetra nulla ipsum ac odio.</p>
                <img src="placeholder.png" alt="Placeholder Image" className="placeholder" />
            </Section>
            

            <Section id="details" title="Details">
                <p>Here you will find more detailed information about the mods and their features.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vehicula, leo vel suscipit placerat, nisi mi volutpat orci, et pharetra nulla ipsum ac odio.</p>
                <img src="placeholder.png" alt="Placeholder Image" className="placeholder" />
            </Section>
            <Section id="impressum" title="Impressum">
                <p>This is the Impressum section, which contains legal information about the website. Please replace this content with your own legal text as required.</p>
            </Section>
        </div>
    );
};

export default Content;
