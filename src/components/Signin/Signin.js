import React,{ Component } from 'react';
import './Signin.css';

class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            logInUsername: "",
            logInPassword: "",
            logInStatus: "",
            logInClass: ""
        }
    }

    componentDidMount(){
        this.setState({logInClass: "errMess"});
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
            }else{
                this.logInStatFail(data);
            }
        } 
        )
        
    }

    logInStatFail = data =>{
        this.setState({
            logInClass: "errMess errMessActive",
            logInStatus:data
        });
        setTimeout(()=>{
            this.setState({
                logInClass:"errMess"
            });
            setTimeout(()=>{
                this.setState({
                    logInStatus:""
                })
            },100)
        },1500)
    }

    render(){
        const { logInStatus, logInClass } = this.state;
        return (
            <div className="bigCard center">
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
                <div className="btns">
                    <p className="signBtn btnMargin" onClick={this.onButtonSubmit}><label className="signLabel">Sign In</label></p>
                </div>
                </div>
                <div className="errCard center">
                    <p className={logInClass}>{logInStatus}</p>
                </div>
            </div>
        )
    }
}

export default Signin;

