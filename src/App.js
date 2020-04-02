import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import InputRecognition from './components/InputRecognition/InputRecognition';
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

function App() {
  return (
    <div>
      <Particles className={classNameForParticool} params={paramsForParticool}/>
      <Navigation />
      <Logo />
      <Rank />
      <InputRecognition />
    </div>
  );
}

export default App;
