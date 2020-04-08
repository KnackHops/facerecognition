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
      inputURL: "",
      box: {}
    }
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

  displayFaceRecognition = (box) => {
    this.setState({box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({inputURL: this.state.input})

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      (response) => {
        this.displayFaceRecognition(this.calculateDataImage(response.rawData.outputs[0].data.regions[0].region_info.bounding_box))
    }
      ).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Particles className={classNameForParticool} params={paramsForParticool}/>
        <Navigation />
        <Logo />
        <Rank />
        <InputRecognition onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition inputURL={this.state.inputURL} box={this.state.box}/>
      </div>
    )
  }
}

export default App;
