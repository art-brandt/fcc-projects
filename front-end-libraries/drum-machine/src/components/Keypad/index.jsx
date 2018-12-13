import React, { Component } from 'react';
import Pad from '../Pad/index.jsx';
import './style.scss';

export default class Keypad extends Component {
  constructor(props){
    super(props);

  }

  render() {
    let bank = this.props.bank;
    return(
      <div className = 'keypad'>
      { bank.map(clip => { 
        return <Pad key = { clip.key } 
                    src = { clip.src }
                    keyBoard = { clip.key } 
                    keyCode = { clip.keyCode }
                    updateDisplay = { this.props.updateDisplay }
                    clipName = { clip.name }
                /> 
      }) }
      </div>
    );
  }
}