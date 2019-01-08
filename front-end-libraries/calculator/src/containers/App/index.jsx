import React, { Component } from 'react';
import { connect } from 'react-redux';
import { entryNumber, cleare, entryOperator, entryDecimal, equals } from './actions';

import './style.scss';

import Display from '../../components/Display/index.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.entryNumber = this.entryNumber.bind(this);
    this.cleare = this.cleare.bind(this);
    this.entryOperator = this.entryOperator.bind(this);
    this.entryDecimal = this.entryDecimal.bind(this);
    this.equals = this.equals.bind(this);
  };

  entryNumber(event) {
    this.props.onEntrynumber(event.target.innerText);
  }

  cleare() {
    this.props.onCleare();
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
        <button className='calculator__btn' id="clear" onClick={this.cleare}>AC</button>
        <button className='calculator__btn' id="equals" onClick={this.equals}>=</button>
        <button className='calculator__btn' id="zero" onClick={this.entryNumber}>0</button>
        <button className='calculator__btn' id="one" onClick={this.entryNumber}>1</button>
        <button className='calculator__btn' id="two" onClick={this.entryNumber}>2</button>
        <button className='calculator__btn' id="three" onClick={this.entryNumber}>3</button>
        <button className='calculator__btn' id="four" onClick={this.entryNumber}>4</button>
        <button className='calculator__btn' id="five" onClick={this.entryNumber}>5</button>
        <button className='calculator__btn' id="six" onClick={this.entryNumber}>6</button>
        <button className='calculator__btn' id="seven" onClick={this.entryNumber}>7</button>
        <button className='calculator__btn' id="eigth" onClick={this.entryNumber}>8</button>
        <button className='calculator__btn' id="nine" onClick={this.entryNumber}>9</button>
        <button className='calculator__btn' id="add" onClick={this.entryOperator}>+</button>
        <button className='calculator__btn' id="substract" onClick={this.entryOperator}>-</button>
        <button className='calculator__btn' id="multiply" onClick={this.entryOperator}>*</button>
        <button className='calculator__btn' id="divide" onClick={this.entryOperator}>/</button>
        <button className='calculator__btn' id="decimal" onClick={this.entryDecimal}>.</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    expression: state.display,
    entries: state.entriesField,
  }),
  dispatch => ({
    onEntrynumber: (number) => {
      dispatch(entryNumber(number));
    },
    onCleare: () => {
      dispatch(cleare());
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