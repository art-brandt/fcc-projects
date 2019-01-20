import React, { Component }  from 'react';
import { connect } from 'react-redux';

import './style.scss';

import svgStart from './images/play-solid.svg';
import svgStop from './images/pause-solid.svg';
import svgReset from './images/undo-solid.svg';

export default class TimerController extends Component  {
  constructor(props) {
    super(props);

    this.reset = this.reset.bind(this);
    this.startedStoped = this.startedStoped.bind(this);
  }

  reset() {
    console.log('reset');
  }

  startedStoped() {
    console.log('StartedStoped');
  }

  render() {
    const svgStartStop = this.props.timerIsStarted ? svgStop : svgStart;

    return (
    <div className="timer-controller">
      <div role="button"
           className="timer-controller__start-stop"
           id="start_stop" 
           onClick={ this.props.handleStartStopBtn }
           dangerouslySetInnerHTML={{ __html: svgStartStop }}></div>
      <div role="button"
           className="timer-controller__reset" 
           id="reset"
           onClick={ this.props.handleResetBtn }
           dangerouslySetInnerHTML={{ __html: svgReset }}></div>
    </div>
    );
  }
}