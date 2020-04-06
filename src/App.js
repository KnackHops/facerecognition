import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import InputRecognition from './components/InputRecognition/InputRecognition';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';


const app = new Clarifai.App({
  apiKey: '70d84c2185f745b3bcfe966feaadf1a6'
})

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      inputURL: ""
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({inputURL: this.state.input})

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        console.log(response.rawData.outputs[0].data.regions[0].region_info.bounding_box)
      },
      function(err) {
        console.log(err)
      }
    );
  }

  render() {
    return (
      <div>
        <Particles className={classNameForParticool} params={paramsForParticool}/>
        <Navigation />
        <Logo />
        <Rank />
        <InputRecognition onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition inputURL={this.state.inputURL}/>
      </div>
    )
  }
}

export default App;
