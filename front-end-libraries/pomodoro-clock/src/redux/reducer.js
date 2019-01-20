import { BREAK_DECREMENT, BREAK_INCREMENT, SESSION_DECREMENT,
  SESSION_INCREMENT, START_TIMER, STOP_TIMER, TICK, RESET, SWITCH_TIMER_MODE } from './constants';

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  timer: '25:00',
  timerIsStarted: false,
  timerMode: 'session'
};

const limitLength = 60;
const regExpMinutes = /^\d{1,2}/;
const regExpSeconds = /\d{1,2}$/;

export default function appReducer(state = initialState, action) {
  const newState = {};
  Object.assign(newState, state);

  const timerIsStarted = state.timerIsStarted;
  const timer = state.timer;

  switch(action.type) {
    case BREAK_INCREMENT:
      if (!timerIsStarted && state.breakLength < limitLength) {
        newState.breakLength = state.breakLength + 1;
      }
      return newState;
    case BREAK_DECREMENT:
      if (!timerIsStarted && state.breakLength > 1) {
        newState.breakLength = state.breakLength - 1;
      }
      return newState;
    case SESSION_INCREMENT:
      if (!timerIsStarted && state.sessionLength < limitLength) {
        newState.sessionLength = state.sessionLength + 1;
        newState.timer = state.timer.replace(regExpMinutes, newState.sessionLength.toString());
      }
      return newState;
    case SESSION_DECREMENT:
      if (!timerIsStarted && state.sessionLength > 1) {
        newState.sessionLength = state.sessionLength - 1;
        if (newState.sessionLength >= 10) {
          newState.timer = timer.replace(regExpMinutes, newState.sessionLength.toString());
        } else {
          newState.timer = timer.replace(regExpMinutes, '0' + newState.sessionLength.toString());
        }
      }
      return newState;
    case SWITCH_TIMER_MODE:
      if (state.timerMode === 'session') {
        newState.timerMode = 'break';
        newState.timer = state.breakLength >= 10 ? state.breakLength + ':00' 
                          : '0' + state.breakLength + ':00';
      } else if (state.timerMode === 'break') {
        newState.timerMode = 'session';
        newState.timer = state.sessionLength >= 10 ? state.sessionLength + ':00' 
                          : '0' + state.sessionLength + ':00';
      };
      return newState;
    case START_TIMER:
      newState.timerIsStarted = true;
      return newState;
    case STOP_TIMER:
      newState.timerIsStarted = false;
      return newState;
    case TICK:
      let minutes = regExpMinutes.exec(timer)[0];
      let seconds = regExpSeconds.exec(timer)[0];

      if(timerIsStarted) {
        if (seconds === '00') {
          minutes = Number(minutes) > 10 ? Number(minutes) - 1 : '0' + (Number(minutes) - 1);
          newState.timer = minutes +':59';
        } else {
          seconds = Number(seconds) > 10 ? Number(seconds) - 1 : '0' + (Number(seconds) - 1);
          newState.timer = minutes + ':' + seconds;
        }
        if (minutes === '00' && seconds === '00') {

        }
      }
      return newState;
    case RESET: return initialState;
    default: return newState;
  }
}