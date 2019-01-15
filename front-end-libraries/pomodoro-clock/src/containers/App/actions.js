import { BREAK_DECREMENT, BREAK_INCREMENT, SESSION_DECREMENT,
          SESSION_INCREMENT, START_STOP, TICK, RESET } from './constants';


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

export function startStop() {
  return { type: START_STOP };
}

export function tick() {
  return { type: TICK };
}

export function reset() {
  return { type: RESET };
}