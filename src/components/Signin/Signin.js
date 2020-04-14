import React from 'react';
import './Signin.css';

const  Signin = ({onRouteChange}) => {
    return (
        <div className="center">
            <div className="formCard center">
                <p className="titleHead">Welcome!</p>
                <p className="labelIn">Email</p>
                <input type="email"></input>
                <p className="labelIn">Password</p>
                <input type="password"></input>
            <p className="signBtn signMargin" onClick={()=>onRouteChange("home")}><label className="signLabel">Sign In</label></p>
            </div>
        </div>
    )
}

export default Signin;

