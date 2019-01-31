import React, { Component } from 'react';

import svgDec from './images/arrow-circle-down-solid.svg';
import svgInc from './images/arrow-circle-up-solid.svg';

import './style.scss';

class LengthController extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
    <div className="length-controller">
      <h2 className="length-controller__label" 
          id={`${this.props.id}-label`}>{ this.props.label }</h2>
      <div className="row">
        <button className="length-contoller__button"
             id={`${this.props.id}-increment`}
             dangerouslySetInnerHTML={{__html: svgInc}}
             onClick={ this.props.handleIncrement }/>
        <div className="length-contoller__value"
             id={`${this.props.id}-length`}>{ this.props.value }</div>
        <button className="length-contoller__button"
             id={`${this.props.id}-decrement`}
             dangerouslySetInnerHTML={{__html: svgDec}} 
             onClick={ this.props.handleDecrement } />
      </div>
    </div>
    );
  }
}

export default LengthController;