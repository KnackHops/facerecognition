import React,{ Component } from 'react';
import '../Signin/Signin.css';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            profile: {
                regUsername: "",
                regEmail: "",
                regName: "",
                regPassword: ""
            } 
        };
    }

    onButtonSubmit = () =>{
        console.log(this.state)
        const { regUsername, regEmail, regName, regPassword} = this.state.profile;
        fetch('http://localhost:3000/register', {
            method: "post",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                username:  regUsername,
                name: regName,
                email: regEmail,
                password: regPassword
            })
        }).then(resp=>resp.json())
        .then(data=>{
            if(data.name===regName){
                console.log(data)
                this.props.onRouteChange("home")
            }else{

            }
        })
    }

    render(){
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
                <p className="signBtn" onClick={this.onButtonSubmit}><label className="signLabel">Register</label></p>
                </div>
            </div>
        )
    }
}

export default Register;