import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import InputRecognition from './components/InputRecognition/InputRecognition';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';

const classNameForParticool = "Particool";

const paramsForParticool = {
  particles: {
    number: {
      value : 5,
      density: {
        enable:true,
        value_area: 20
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    }
  }
}

const initialState = {
  user: {},
  input: "",
  inputURL: "",
  box: {},
  route: "signin",
  isSignedin: false
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  calculateDataImage = ({top_row, left_col, right_col, bottom_row}) => {
    const imageDisplay = document.getElementById("faceDisplay");
    const imHeight = Number(imageDisplay.height);
    const imWidth = Number(imageDisplay.width);
    return {
      topRow: top_row * imHeight,
      leftCol: left_col * imWidth,
      rightCol: imWidth - (right_col * imWidth),
      bottomRow: imHeight - (bottom_row * imHeight)
    }
  }

  displayFaceRecognition = box => {
    this.setState({box});
  }

  onInputChange = event => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({inputURL: this.state.input});

    fetch("http://localhost:3000/imageapi",{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })})
    .then(response => response.json())
    .then(response => {
      if(response){
        fetch("http://localhost:3000/image",{
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(resp => resp.json())
        .then(entryUpdate=> {
          this.setState(prevState => ({
            user: {
              ...prevState.user,
              entries: entryUpdate
            }
          }))
        })
      }
        this.displayFaceRecognition(this.calculateDataImage(response.rawData.outputs[0].data.regions[0].region_info.bounding_box))
    }
      ).catch(err => console.log(err));
  }

  onRouteChange = route => {
    if(route==="home"){
      console.log(this.state.user);
      this.setState({isSignedin: true})
    } else {
      this.setState(initialState)
    }

    this.setState({route});
  }

  onLoadUser = (userProfile) => {
    this.setState({user: {
        id: userProfile.id,
        username: userProfile.username,
        name: userProfile.name,
        email: userProfile.email,
        entries: userProfile.entries,
        joined: userProfile.joined
    }})
    console.log(this.state.user.profile);
  }

  render() {
    const {inputURL, box, route, isSignedin, user } = this.state;
    return (
      <div>
        <Particles className={classNameForParticool} params={paramsForParticool}/>
        <Navigation isSignedin={isSignedin} onRouteChange={this.onRouteChange} route={route} />
        {
        route==="signin" ?
          <Signin onRouteChange={this.onRouteChange} onLoadUser={this.onLoadUser}/>
        : (route==="register" ?
        <Register onRouteChange={this.onRouteChange} onLoadUser={this.onLoadUser}/> :
        <React.Fragment>
        <Logo />
        <Rank name={user.name} entries={user.entries}/>
        <InputRecognition onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition inputURL={inputURL} box={box}/>
      </React.Fragment>
    )
          
      }
      </div>
    )
  }
}

export default App;
