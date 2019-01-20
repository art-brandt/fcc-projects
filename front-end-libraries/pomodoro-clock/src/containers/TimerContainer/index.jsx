import React, { Component, Fragment } from 'react';
import { reset, startTimer, stopTimer, switchTimerMode} from '../../redux/actions.js';;
import { connect } from 'react-redux';

import './wav/alarm.wav';

import Timer from '../../components/Timer/index.jsx';

class TimerContainer extends Component {
  constructor(props) {
    super(props);
    this.startStopTimer = this.startStopTimer.bind(this);
    this.alarm = this.alarm.bind(this);
    this.reset = this.reset.bind(this);
  }

  startStopTimer() {
    if (!this.props.timerIsStarted) {
      this.props.startTimer();
    } else if (this.props.timerIsStarted) {
      this.props.stopTimer();
    }
  }

  componentWillUpdate(){
    if (this.props.time === '00:00'){
      this.props.switchTimerMode();
      this.alarm();
    };
  }

  alarm() {
    const beep = document.getElementById('beep');
    beep.play();
  }

  reset() {
    const beep = document.getElementById('beep');
    this.props.reset();
    beep.pause();
    beep.currentTime = 0;
  }

  render() {
    const timerLabel = this.props.timerMode
    return (
      <Fragment>
        <Timer label={timerLabel}
              timerIsStarted={this.props.timerIsStarted}
              handleStartStopBtn={this.startStopTimer}
              handleResetBtn={this.reset}
              time={this.props.time}/>
        <audio id="beep" src='wav/alarm.wav'></audio>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    timerIsStarted: state.timerIsStarted,
    time: state.timer,
    timerMode: state.timerMode

  }),
  dispatch => ({
    startTimer: () => {
      dispatch(startTimer());
    },
    stopTimer: () =>{
      dispatch(stopTimer());
    },
    reset: () => {
      dispatch(reset());
    },
    switchTimerMode: () => {
      dispatch(switchTimerMode())
    }
  })
)(TimerContainer);
