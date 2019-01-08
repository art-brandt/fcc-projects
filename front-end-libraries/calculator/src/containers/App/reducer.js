import { ENTRY_OPERATOR, EQUALS, CLEARE, ENTRY_NUMBER, ENTRY_DECIMAL} from './constants';

const initialState = {
  display: '',
  entriesField: '',
  entriesHaveOperator: false,
  entriesIsNumber: false,
  entriesEndHaveDecimal: false,
  displayHaveResult: false,
  lastResult: null
};

function appReducer(state = initialState, action) {
  const newState = {};
  Object.assign(newState, state);

  let display = state.display;
  let entriesField = state.entriesField;
  let entriesHaveOperator = state.entriesHaveOperator;
  let entriesEndHaveDecimal = state.entriesEndHaveDecimal;
  let entriesIsNumber = state.entriesIsNumber;
  let displayHaveResult = state.displayHaveResult;
  let lastResult = state.lastResult;

  switch (action.type) {
    case ENTRY_NUMBER:
      let number = action.number;

      if (number !== '0' && !entriesHaveOperator) {
        newState.display = display.concat(number);
        newState.entriesField = entriesField.concat(number);
        newState.entriesIsNumber = true;
        newState.entriesHaveOperator = false;
        newState.entriesEndHaveDecimal = false;
        return newState;
      } else if (number === '0' && entriesField !== '' && !entriesHaveOperator){
        newState.display = display.concat(number);
        newState.entriesField = entriesField.concat(number);
        newState.entriesIsNumber = true;
        newState.entriesHaveOperator = false;
        newState.entriesEndHaveDecimal = false;
        return newState;
      } else if (entriesHaveOperator){
        newState.display = display.concat(number);
        newState.entriesField = number;
        newState.entriesIsNumber = true;
        newState.entriesHaveOperator = false;
        newState.entriesEndHaveDecimal = false;
        return newState;
      } else {
        return state;
      }
    case ENTRY_OPERATOR:
      let operator = action.operator;

      if (!entriesHaveOperator && entriesField !== '' && !entriesEndHaveDecimal && !displayHaveResult) {
        newState.display = display.concat(operator);
        newState.entriesField = operator;
        newState.entriesHaveOperator = true;
        newState.entriesIsNumber = false;
        return newState;
      } else if (entriesEndHaveDecimal && !displayHaveResult) {
        newState.display = display.concat(operator).replace('.', '');
        newState.entriesField = operator;
        newState.entriesHaveOperator = true;
        newState.entriesIsNumber = false;
        return newState;
      } else if (displayHaveResult) {
        console.log(lastResult, operator);
        newState.display = lastResult.concat(operator);
        newState.entriesField = operator;
        newState.entriesHaveOperator = true;
        newState.entriesIsNumber = false;
        newState.displayHaveResult = false;
        newState.lastResult = null;
        return newState
      } else {
        return state;
      };
    case ENTRY_DECIMAL:
      if (entriesIsNumber && !entriesEndHaveDecimal && !entriesHaveOperator) {
        newState.display = display.concat('.');
        newState.entriesField = entriesField.concat('.')
        newState.entriesEndHaveDecimal = true;
        return newState;
      } else {
        return state;
      }
    case CLEARE:
      return initialState;
    case EQUALS:
      function doOperation(a, b, operation) {
        switch(operation) {
          case '+': return a + b;
          case '-': return a - b;
          case '*': return a * b;
          case '/': return a / b;
        }
      }
      const numbers = state.display.split(/\/|\*|\+|\-/).map(item => Number(item));;
      const operators = state.display.split(/\d+/).filter(item => item !== '')
      
      do {
        let result = doOperation(numbers[0], numbers[1], operators[0]);
        for (let i = 0; i <= 1; i++) {
          numbers.shift();
        }
        operators.shift();
        numbers.unshift(result);

      } while (operators.length > 0);

      let [result] = numbers;

      newState.display = display.concat(`=${result}`);
      newState.entriesField = result.toString();
      newState.displayHaveResult = true;
      newState.lastResult = result.toString();
      return newState;
    default:
      return state;
  }
}

export default appReducer;