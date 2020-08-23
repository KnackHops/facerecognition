import React,{ Component } from 'react';
import '../Signin/Signin.css';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            regTest: "",
            profile: {
                regUsername: "",
                regEmail: "",
                regName: "",
                regPassword: ""
            },
            panelRoute: "",
            firstLabel: "",
            secondLabel: "",
            labelType: "",
            btnClass: "",
            btnReg: "",
            btnLabel: "",
            errInStatus: "",
            errInClass: ""
        };
    }

    componentDidMount(){
        this.setState({
            panelRoute: "first",
            firstLabel: "Name",
            secondLabel: "Email",
            labelType: "email",
            btnReg: "Proceed",
            errInClass: "errMess"
        })
    }

    firstInputChange = (event) =>{
        event.persist();
        if(this.statementForPanel()){
            Object.assign(this.state.profile, {regName: event.target.value});
        }else{
            Object.assign(this.state.profile, {regUsername: event.target.value});
        }
    }

    secondInputChange = (event) =>{
        event.persist();
        if(this.statementForPanel()){
            Object.assign(this.state.profile, {regEmail: event.target.value});
        }else{
            Object.assign(this.state.profile, {regPassword: event.target.value});
        }
    }

    onButtonSubmit = () =>{
        if(this.statementForPanel()){
            if(this.state.profile.regName === "" || this.state.profile.regEmail === "")
            {
            this.registerFail("No Empty Field!");
            } 
            else {
            this.onSuccessSubmit();
            }
        }else{
            if(this.state.profile.regUsername === "" || this.state.profile.regPassword === "")
            {
            this.registerFail("No Empty Field!");
            } 
            else {
            this.onSuccessSubmit();
            }
        } 
    }

    onSuccessSubmit = ()=>{
        const { regUsername, regEmail, regName, regPassword} = this.state.profile;
        if(this.statementForPanel()){
            this.statementForState();
            this.clearText();
        } else {
            fetch('http://localhost:3000/register', {
                method: "post",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    username:  regUsername,
                    name: regName,
                    email: regEmail,
                    password: regPassword
            })
            })
            .then(resp=>resp.json())
            .then(data=>{
                if(data.name===regName){
                    this.props.onLoadUser(data);
                    this.props.onRouteChange("home")
                }else{
                    this.registerFail(data);
                }
            })
        }
    }

    onButtonBack = () =>{
        this.statementForState();
        this.clearText();
    }

    clearText = ()=>{
        document.getElementById("clrInput1").value="";
        document.getElementById("clrInput2").value="";
    }

    statementForState = () =>{
        if(this.state.panelRoute==="first"){
            this.setState({
                firstLabel: "Username",
                secondLabel: "Password",
                labelType: "password",
                panelRoute: "second",
                btnClass: "signLabel",
                btnReg: "Register",
                btnLabel: "Back"
            })
        } else{
            this.setState({
                firstLabel: "Name",
                secondLabel: "Email",
                labelType: "email",
                panelRoute: "first",
                btnReg: "Proceed",
                btnClass: "",
                btnLabel: ""
            })
        }
    }

    statementForPanel =()=>{
        if(this.state.panelRoute==="first"){
            return true;
        } else{
            return false;
        }
    }

    registerFail = (logInWhy)=>{
        this.setState({
            errInStatus: logInWhy,
            errInClass: "errMess errMessActive"
        })
        setTimeout(()=>{
            this.setState({
                errInClass: "errMess"
            })
            setTimeout(()=>{
                this.setState({
                    errInStatus: ""
                })
            },100)
        },1500)
    }

    render(){
        const { firstLabel, secondLabel, labelType, btnClass, btnReg, btnLabel, errInClass, errInStatus} = this.state;
        return (
            <div className="bigCard center">
                <div className="formCard center">
                    <p className="titleHead">Register!</p>
                    <p className="labelIn">{firstLabel}</p>
                    <input type="text"
                    id="clrInput1"
                    onChange={this.firstInputChange}
                    ></input>
                    <p className="labelIn">{secondLabel}</p>
                    <input type={labelType}
                    id="clrInput2"
                    onChange={this.secondInputChange}
                    ></input>
                    <div className="btns">
                        <p className="signBtn" 
                        onClick={this.onButtonSubmit}>
                            <label className="signLabel">{btnReg}</label>
                        </p>
                        <p className="signBtn" onClick={this.onButtonBack}>
                            <label className={btnClass}>{btnLabel}</label>
                        </p>
                    </div>
                </div>
                <div className="errCard center">
                    <p className={errInClass}>{errInStatus}</p>
                </div>
            </div>
        )
    }
}

export default Register;