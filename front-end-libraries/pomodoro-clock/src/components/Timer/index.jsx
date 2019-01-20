import React from 'react';
import { connect, Provider } from 'react-redux';

import './style.scss';

import TimerController from '../TimerController/index.jsx';

export default function Timer(props) {
  return (
    <div className="timer" id="timer">
      <h2 className="timer__label" id="timer-label">{ props.label }</h2>
      <div className="timer__left" id="time-left">{ props.time }</div>
      <TimerController timerIsStarted={ props.timerIsStarted }
                       handleStartStopBtn={ props.handleStartStopBtn }
                       handleResetBtn={ props.handleResetBtn }/>
    </div>
  );
}