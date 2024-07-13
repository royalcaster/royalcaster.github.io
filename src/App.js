import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Your HomePage component
import './index.css';
import Navbar from './components/Navbar';
import ModpackPage from './components/ModpackPage';

function App() {
    return (
            <div className="app-wrapper">
                <div className='app-container'>
                    <Navbar />
                    <div style={{height: "2em"}}></div>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/minecraft-clash" element={<ModpackPage />} />
                    </Routes>
                </div>
            </div>
    );
}

export default App;