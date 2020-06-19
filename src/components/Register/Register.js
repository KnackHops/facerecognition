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
            },
            panelRoute: "",
            firstLabel: "",
            secondLabel: "",
            labelType: ""
        };
    }

    componentDidMount(){
        this.setState({
            panelRoute: "first",
            firstLabel: "Name",
            secondLabel: "Email",
            labelType: "emails"
        })
    }

    firstInputChange = (event) =>{
        if(this.statementForPanel()){
            this.setState({regName: event.target.value})
        }else{
            this.setState({regUsername: event.target.value})
        }
    }

    secondInputChange = (event) =>{
        if(this.statementForPanel()){
            this.setState({regEmail: event.target.value})
        }else{
            this.setState({regPassword: event.target.value})
        }
    }

    onButtonSubmit = () =>{
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

    onButtonBack = () =>{

    }

    statementForPanel =()=>{
        if(this.state.panelRoute==="first"){
            return true;
        } else{
            return false;
        }
    }

    render(){
        const { firstLabel, secondLabel, labelType } = this.state;
        return (
            <div className="bigCard center">
                <div className="formCard center">
                    <p className="titleHead">Register!</p>
                    <p className="labelIn">{firstLabel}</p>
                    <input type="text"
                    onChange={this.firstInputChange}
                    ></input>
                    <p className="labelIn">{secondLabel}</p>
                    <input type={labelType}></input>
                    <div className="btns">
                        <p className="signBtn" onClick={this.onButtonSubmit}><label className="signLabel">Register</label></p>
                        <p className="signBtn" onClick={this.onButtonSubmit}><label className="signLabel">Back</label></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;