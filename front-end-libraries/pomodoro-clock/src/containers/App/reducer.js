import { BREAK_DECREMENT, BREAK_INCREMENT, SESSION_DECREMENT,
  SESSION_INCREMENT, START_STOP, TICK, RESET } from './constants';

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  timer: '25:00',
  timerIsStarted: false
};

const limitLength = 60;

function appReducer(state = initialState, action) {
  const newState = Object.assign(state);
  switch(action.type) {
    case BREAK_DECREMENT:
      if (!timerIsStarted && state.breakLength < limitLength) {
        newState.breakLength = state.breakLength + 1;
      }
      return newState;
    case BREAK_INCREMENT:
      if (!timerIsStarted && state.breakLength > 0) {
        newState.breakLength = state.breakLength - 1;
      }
      return newState;
    case SESSION_DECREMENT:
      if (!timerIsStarted && state.sessionLength < limitLength) {
        newState.sessionLength = state.sessionLength + 1;
      }
      return newState;
    case SESSION_INCREMENT:
      if (!timerIsStarted && state.sessionLength > 0) {
        newState.sessionLength = state.sessionLength - 1;
      }
      return newState;
    case START_STOP:
    case TICK:
    case RESET: return initialState;
    default: return newState;
  }
}

export default appReducer;