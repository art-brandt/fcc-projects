import { BREAK_DECREMENT, BREAK_INCREMENT, SESSION_DECREMENT, SESSION_INCREMENT, TICK, 
          RESET, START_TIMER, STOP_TIMER, SWITCH_TIMER_MODE } from './constants';


export function breakDecrement() {
  return { type: BREAK_DECREMENT };
}

export function breakIncrement() {
  return { type: BREAK_INCREMENT };
}

export function sessionDecrement() {
  return { type: SESSION_DECREMENT };
}

export function sessionIncrement() {
  return { type: SESSION_INCREMENT };
}

let timer = null;

export function tick() {
  return { type: TICK }
}

export function startTimer() {
  return function (dispatch) {
    clearInterval(timer);
    timer = setInterval(function(){
      dispatch(tick());
    }, 1000);
    dispatch({ type: START_TIMER });
  }
}

export function stopTimer() {
  clearInterval(timer);
  return { type: STOP_TIMER };
}


export function reset() {
  clearInterval(timer);
  return { type: RESET };
}

export function switchTimerMode() {
  return { type: SWITCH_TIMER_MODE };
}