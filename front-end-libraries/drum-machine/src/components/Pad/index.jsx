import React, { Component } from 'react';
import './style.scss';

export default class Pad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "drum-pad"
    };
    this.playClip = this.playClip.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  playClip() {
    let clip = document.getElementById(this.props.keyBoard);
    this.props.updateDisplay(this.props.clipName);
    clip.play();
  }

  handleKeyDown(event) {
    if (event.keyCode === this.props.keyCode) {
      let clip = document.getElementById(this.props.keyBoard);
      this.setState({ class: "drum-pad drum-pad--active" })
      setTimeout(() => {
        this.setState({ class: "drum-pad" })
      }, 100);
      this.props.updateDisplay(this.props.clipName);
      clip.play();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <button className={ this.state.class } onClick={ this.playClip } id={ this.props.clipName }>
        <span>{ this.props.keyBoard }</span>
        <audio className="clip" src= { this.props.src } id = { this.props.keyBoard }></audio>
      </button>
    );
  }
}