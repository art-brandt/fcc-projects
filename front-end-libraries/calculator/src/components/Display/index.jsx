import React, { Component } from 'react';

import './style.scss';

export default class Display extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="calculator__display">
        <p id="result">{this.props.firstRow}</p>
        <p id="display">{this.props.secondRow}</p>
      </div>
    );

  }
}