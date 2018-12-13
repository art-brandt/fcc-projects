import React, { Component } from 'react';
import Keypad from '../Keypad/index.jsx';
import Display from '../Display/index.jsx';

import './clips/kick.ogg';
import './clips/glitch.ogg';
import './clips/HH.ogg';
import './clips/pianoChord1.ogg';
import './clips/pianoChord2.ogg';
import './clips/pianoChord3.ogg';
import './clips/snare.ogg';
import './clips/scratch.ogg';
import './clips/string.ogg';

import './images/background.jpg';

import './style.scss';

const bank = [
  { keyCode: 81,
    name: 'kick',
    key: 'Q',
    src: './clips/kick.ogg',
  },
  { 
    keyCode: 87,
    name: 'snare',
    key: 'W',
    src: './clips/snare.ogg',
  },
  { 
    keyCode: 69,
    name: 'HH',
    key: 'E',
    src: './clips/HH.ogg'
  },
  { 
    keyCode: 65,
    name: 'scratch',
    key: 'A',
    src: './clips/scratch.ogg'
  },
  { 
    keyCode: 83,
    name: 'glitch',
    key: 'S',
    src: './clips/glitch.ogg'
  },
  { 
    keyCode: 68,
    name: 'pianoChord1',
    key: 'D',
    src: './clips/pianoChord1.ogg'
  },
  { 
    keyCode: 90,
    name: 'pianoChord2',
    key: 'Z',
    src: './clips/pianoChord2.ogg'
  },
  {
    keyCode: 88,
    name: 'pianoChord3',
    key: 'X',
    src: './clips/pianoChord3.ogg'
  },
  { 
    keyCode: 67,
    name: 'stringFX',
    key: 'C',
    src: './clips/string.ogg'
  }
]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
    };
    this.displayClipName = this.displayClipName.bind(this);
  }

  displayClipName(name) {
    this.setState({ display: name });
  }

  render(){
    return (
      <div id="drum-machine">
        <Display playingClip = { this.state.display }/>
        <Keypad bank = { bank } updateDisplay = { this.displayClipName }/>
      </div>
    );
  };
}