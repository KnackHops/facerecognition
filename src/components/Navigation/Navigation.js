import React from 'react';
import './Navigation.css';

const Navigation = ({ isSignedin, onRouteChange, route }) => {
    return (
        <nav>
            {isSignedin===true ? 
            <p className="boxLink" onClick={()=>onRouteChange("signin")}>Sign Out</p> :
            (route==="signin" ? 
                <div className="signInNav">
                    <p className="inactiveboxLink">Sign In</p>
                    <p className="boxLink" onClick={()=>onRouteChange("register")}>Register</p>
                </div> : 
                <div className="signInNav">
                    <p className="boxLink" onClick={()=>onRouteChange("signin")}>Sign In</p>
                    <p className="inactiveboxLink">Register</p>
                </div>
            )
            }
        </nav>
    )
}

export default Navigation;