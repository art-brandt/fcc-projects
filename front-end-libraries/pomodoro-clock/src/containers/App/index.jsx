import React, { Component } from 'react';
import { connect } from 'react-redux';
import svgDec from './images/arrow-circle-down-solid.svg';
import svgInc from './images/arrow-circle-up-solid.svg';
//import {} from './actions';

import './style.scss';


class App extends Component {
  constructor(props) {
    super(props);

  };

  render() {
    return (
      <>
        <h1 className="title"></h1>
        <div className="length-controler">
          <h2 className="length-controller__label" id="break-label">Break Length</h2>
          <div className="length-contoller__button" 
               id="break-decrement" 
               dangerouslySetInnerHTML={{__html: svgDec}}/>
          <div className="length-contoller__value"
               id="break-length">{ this.props.breakLength }</div>
          <div className="length-contoller__button"
               id="break-increment"
               dangerouslySetInnerHTML={{__html: svgInc}}/>
        </div>
        <div className="length-controler">
          <h2 classname="length-controller__label" id="session-label">Session Length</h2>
          <div className="length-contoller__button"
               id="session-decrement" 
               dangerouslySetInnerHTML={{__html: svgDec}}/>
          <div className="length-contoller__value"
               id="session-length"> { this.props.sessionLength } </div>
          <div className="length-contoller__button"
               id="session-increment"
               dangerouslySetInnerHTML={{__html: svgInc}}/>
        </div>
        <div className="timer" id="timer">
          <h2 className="timer__label" id="timer-label">Session</h2>
          <div className="timer__left" id="time-left">MM:SS</div>
        </div>
        <div className="timer-controller">
          <button className="timer-controller__start-stop" id="start_stop"></button>
          <button className="timer-controller__reset" id="reset"></button>
        </div>
      </>
    );
    
  }
}

export default connect(
  state => ({
    breakLength: state.breakLength,
    sessionLength: state.sessionLength,
    timer: state.timer,
    timerIsStarted: state.timerIsStarted
  }),
  dispatch => ({

  }))(App);