import React from 'react';
import './Signin.css';

class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    onUserInput = event => {
        this.setState({username:event.target.value});
    }

    onPassInput = event => {
        this.setState({password:event.target.value});
    }

    onButtonSubmit = () =>{
        fetch("http://localhost:3000/signin");
        this.props.onRouteChange("home");
    }

    render(){
        return (
            <div className="center">
                <div className="formCard center">
                    <p className="titleHead">Welcome!</p>
                    <p className="labelIn">User</p>
                    <input 
                    type="text"
                    onChange={this.onUserInput}
                    ></input>
                    <p className="labelIn">Password</p>
                    <input 
                    type="password"
                    onChange={this.onPassInput}
                    ></input>
                <p className="signBtn signMargin" onClick={this.onButtonSubmit}><label className="signLabel">Sign In</label></p>
                </div>
            </div>
        )
    }
}

export default Signin;

