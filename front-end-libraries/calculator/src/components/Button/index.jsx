import React, { Component } from 'react';

import './style.scss';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button className='calculator__buttons' id={this.props.id} onClick={this.props.handleClick}>
      { this.props.content }
    </button>
  }
}