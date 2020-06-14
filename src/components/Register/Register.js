import React from 'react';
import '../Signin/Signin.css';

const  Signin = ({onRouteChange}) => {
    return (
        <div className="center">
            <div className="formCard regCard center">
                <p className="titleHead">Register!</p>
                <p className="labelIn">Name</p>
                <input type="text"></input>
                <p className="labelIn">Email</p>
                <input type="email"></input>
                <p className="labelIn">Password</p>
                <input type="password"></input>
            <p className="signBtn" onClick={()=>onRouteChange("home")}><label className="signLabel">Register</label></p>
            </div>
        </div>
    )
}

export default Signin;