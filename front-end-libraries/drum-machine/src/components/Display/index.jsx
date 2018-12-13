import React, { Component } from 'react';
import './style.scss';

export default class Display extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return <div id="display"> <span>{this.props.playingClip}</span> </div>
  }
}