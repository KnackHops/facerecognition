import React from 'react';
import Tilt from 'react-tilt';
import LogoIcon from './LogoIcon.svg';
import './Logo.css';

const Logo = () => {
    return (
            <div className="box">
                <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 200, width: 200 }} >
                    <div className="Tilt-inner"> <img src={LogoIcon} className="App-logo" alt="icon" /> </div>
                </Tilt>
            </div>
    )
}

export default Logo;