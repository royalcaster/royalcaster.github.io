import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Your HomePage component
import './index.css';
import Navbar from './components/Navbar';
import ModpackPage from './components/ModpackPage';

function App() {
    return (
        <BrowserRouter>
            <div className='app-container'>
                <Navbar />
                <Routes>
                    <Route path="/" Component={() => <HomePage />} />
                    <Route path="/minecraft-clash" Component={() => <ModpackPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;