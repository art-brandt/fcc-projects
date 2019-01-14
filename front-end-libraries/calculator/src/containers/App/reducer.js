import { ENTRY_OPERATOR, EQUALS, CLEAR, ENTRY_NUMBER, ENTRY_DECIMAL} from './constants';

const initialState = {
  expression: '',
  entriesField: '0',
  entriesFieldIsInitial: true,
  entriesHaveOperator: false,
  expressionHaveResult: false,
  lastResult: null
};

function appReducer(state = initialState, action) {
  const newState = {};
  Object.assign(newState, state);

  let expression = state.expression;
  let entriesField = state.entriesField;

  let entriesHaveOperator = state.entriesHaveOperator;
  let expressionHaveResult = state.expressionHaveResult;
  let lastResult = state.lastResult;
  let entriesFieldIsInitial = state.entriesFieldIsInitial;
  let entriesEndHaveDecimal = entriesField.includes('.');

  switch (action.type) {
    case ENTRY_NUMBER:
      const number = action.number;
      let entriesFieldHaveZero = number === '0' && expression === '0' && entriesField === '0';
      if (entriesFieldIsInitial) {
        newState.expression = expression.concat(number);
        newState.entriesField = number;
        newState.entriesFieldIsInitial = false;
      } else if (entriesHaveOperator && !entriesFieldHaveZero) {
        newState.expression = expression.concat(number);
        newState.entriesField = number;
        newState.entriesHaveOperator = false;
      } else if (!expressionHaveResult && !entriesFieldHaveZero) {
        newState.expression = expression.concat(number);
        newState.entriesField = entriesField.concat(number);
        newState.entriesEndHaveDecimal = false;
      } else if (entriesFieldHaveZero) {
        return newState;
      }
      return newState;
    case ENTRY_OPERATOR:
      const operator = action.operator;
      if (entriesFieldIsInitial && operator === '-') {
        newState.expression = expression.concat(operator);
        newState.entriesField = operator;
        newState.entriesHaveOperator = true;
        newState.entriesFieldIsInitial = false;
      } else if (!entriesHaveOperator && !expressionHaveResult) {
        newState.expression = expression.concat(operator);
        newState.entriesField = operator;
        newState.entriesHaveOperator = true;
      } else if (expressionHaveResult) {
        newState.expression = lastResult.concat(operator);
        newState.entriesField = operator;
        newState.entriesHaveOperator = true;
        newState.expressionHaveResult = false;
      } else if (entriesHaveOperator) {
        const regExpOperator = /\+|\-|\*|\-/g
        newState.expression = expression.replace(regExpOperator, operator);
        newState.entriesField = operator;
      }
      return newState;
    case ENTRY_DECIMAL:
      if (entriesFieldIsInitial) {
        newState.expression = entriesField.concat('.');
        newState.entriesField = entriesField.concat('.');
        newState.entriesFieldIsInitial = false;
      } else if (!entriesEndHaveDecimal && !expressionHaveResult) {
        newState.expression = expression.concat('.');
        newState.entriesField = entriesField.concat('.');
      } else if (entriesEndHaveDecimal) {
        return newState;
      } else if (expressionHaveResult) {
        newState.expression = lastResult.concat('.');
        newState.entriesField = '.';
        newState.expressionHaveResult = false;
      }
      return newState;
    case CLEAR:
      return initialState;
    case EQUALS:
      console.log(result);;
      let result = eval(expression);
      newState.expression = expression.concat(`=${result}`);
      newState.entriesField = result.toString();
      newState.expressionHaveResult = true;
      newState.lastResult = result.toString();
      return newState;
    default:
      return state;
  }
}

export default appReducer;