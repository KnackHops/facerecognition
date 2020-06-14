import React from 'react';
import './Signin.css';

class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            logInUsername: "",
            logInPassword: ""
        }
    }

    onUserInput = event => {
        this.setState({logInUsername:event.target.value});
    }

    onPassInput = event => {
        this.setState({logInPassword:event.target.value});
    }

    onButtonSubmit = () =>{
        fetch('http://localhost:3000/signin',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.logInUsername,
                password: this.state.logInPassword
            })
        })
        .then(resp=>resp.json())
        .then(data=>{
            if(data==="success"){
                this.props.onRouteChange("home");
            }
        } 
        )
        
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

