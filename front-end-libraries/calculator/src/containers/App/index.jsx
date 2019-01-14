import React, { Component } from 'react';
import { connect } from 'react-redux';
import { entryNumber, clear, entryOperator, entryDecimal, equals } from './actions';

import './style.scss';

import Display from '../../components/Display/index.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.entryNumber = this.entryNumber.bind(this);
    this.clear = this.clear.bind(this);
    this.entryOperator = this.entryOperator.bind(this);
    this.entryDecimal = this.entryDecimal.bind(this);
    this.equals = this.equals.bind(this);
  };

  entryNumber(event) {
    this.props.onEntrynumber(event.target.innerText);
  }

  clear() {
    this.props.onClear();
  }

  entryOperator(event) {
    this.props.onEntryOperator(event.target.innerText);
  }

  entryDecimal() {
    this.props.onEntryDecimal();
  }

  equals(){
    this.props.onEquals();
  }

  render() {
    return (
      <div className="calculator">
        <Display firstRow={this.props.expression} 
                 secondRow={this.props.entries}/>
        <button className='calculator__btn calculator__btn--clear' 
                id="clear" 
                onClick={this.clear}
        >AC</button>
        <button className='calculator__btn calculator__btn--operation'
                id="divide"
                onClick={this.entryOperator}
        >/</button>
        <button className='calculator__btn calculator__btn--operation'
                id="multiply"
                onClick={this.entryOperator}
        >*</button>
        <button className='calculator__btn calculator__btn--operation'
                id="subtract"
                onClick={this.entryOperator}
        >-</button>
        <button className='calculator__btn calculator__btn--number'
                id="seven"
                onClick={this.entryNumber}
        >7</button>
        <button className='calculator__btn calculator__btn--number'
                id="eight"
                onClick={this.entryNumber}
        >8</button>
        <button className='calculator__btn calculator__btn--number'
                id="nine"
                onClick={this.entryNumber}
        >9</button>
        <button className='calculator__btn calculator__btn--operation'
                id="add"
                onClick={this.entryOperator}
        >+</button>
        <button className='calculator__btn calculator__btn--number'
                id="four"
                onClick={this.entryNumber}
        >4</button>
        <button className='calculator__btn calculator__btn--number'
                id="five"
                onClick={this.entryNumber}
        >5</button>
        <button className='calculator__btn calculator__btn--number'
                id="six"
                onClick={this.entryNumber}
        >6</button>
        <button className='calculator__btn calculator__btn--number'
                id="one"
                onClick={this.entryNumber}
        >1</button>
        <button className='calculator__btn calculator__btn--number'
                id="two"
                onClick={this.entryNumber}
        >2</button>
        <button className='calculator__btn calculator__btn--number'
                id="three"
                onClick={this.entryNumber}
        >3</button>
        <button className='calculator__btn calculator__btn--equals'
                id="equals"
                onClick={this.equals}
        >=</button>
        <button className='calculator__btn calculator__btn--number'
                id="zero"
                onClick={this.entryNumber}
        >0</button>
        <button className='calculator__btn calculator__btn--operation'
                id="decimal"
                onClick={this.entryDecimal}
        >.</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    expression: state.expression,
    entries: state.entriesField,
  }),
  dispatch => ({
    onEntrynumber: (number) => {
      dispatch(entryNumber(number));
    },
    onClear: () => {
      dispatch(clear());
    },
    onEntryOperator: (operator) => {
      dispatch(entryOperator(operator));
    },
    onEntryDecimal: () => {
      dispatch(entryDecimal());
    },
    onEquals: () => {
      dispatch(equals());
    }
  }))(App);