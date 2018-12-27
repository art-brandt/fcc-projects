import React, { Component } from 'react';

import './style.scss';

export default class Display extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="calculator__display" id="display">
        <p>{this.props.firstRow}</p>
        <p>{this.props.secondRow}</p>
      </div>
    );

  }
}