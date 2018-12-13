import React, { Component } from 'react';

import './style.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playingClipName: '',
      playingClipKey: ''
    };
    this.playClip = this.playClip.bind(this);
  }

  playClip() {
    let pad = document.getElementById(playingClipKey);
    pad.play();
  }

  render(){
    const bank = [
      { keyCode: 1,
        name: '',
        key: 'Q',
        src: './clips',
      },
      { 
        keyCode: 1,
        name: '',
        key: 'W',
        src: './clips',
      },
      { 
        keyCode: 1,
        name: '',
        key: 'E',
        src: './clips'
      },
      { 
        keyCode: 1,
        name: '',
        key: 'A',
        src: './clips'
      },
      { 
        keyCode: 1,
        name: '',
        key: 'S',
        src: './clips'
      },
      { 
        keyCode: 1,
        name: '',
        key: 'D',
        src: './clips'
      },
      { 
        keyCode: 1,
        name: '',
        key: 'Z',
        src: './clips'
      },
      {
        keyCode: 1,
        name: '',
        key: 'X',
        src: './clips'
      },
      { 
        keyCode: 1,
        name: '',
        key: 'C',
        src: './clips'
      }
    ]
    return (
      <div id="drum-machine">
        { bank.map(clip => {
          return(
            <div key={ clip.key } className="drum-pad" onClick={ this.playClip }>
                <span>{ clip.key }</span>
                <audio className="clip" src= { clip.src } id = { clip.key }></audio>
            </div>
          ) 
        }) }
        <div id="display"> {this.state.playingClip} </div>
      </div>
    );
  };
}