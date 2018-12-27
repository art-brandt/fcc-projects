import React, { Component } from 'react';

import './style.scss';

import Button from '../Button/index.jsx';
import Display from '../Display/index.jsx';

const regExpOperators = /\/|\+|\*|-/g;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNum: '',
      expression: ''
    };

    this.handleEquals = this.handleEquals.bind(this);
    this.handleZero = this.handleZero.bind(this);
    this.handleOne = this.handleOne.bind(this);
    this.handleTwo = this.handleTwo.bind(this);
    this.handleThree = this.handleThree.bind(this);
    this.handleFour = this.handleFour.bind(this);
    this.handleFive = this.handleFive.bind(this);
    this.handleSix = this.handleSix.bind(this);
    this.handleSeven = this.handleSeven.bind(this);
    this.handleEigth = this.handleEigth.bind(this);
    this.handleNine = this.handleNine.bind(this);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubstract = this.handleSubstract.bind(this);
    this.handleMultiply = this.handleMultiply.bind(this);
    this.handleDivide = this.handleDivide.bind(this);

    this.handleDecimal = this.handleDecimal.bind(this);

    this.handleClear = this.handleClear.bind(this);
  }

  handleEquals() {
    console.log('equals');
  };

  handleAdd() {
    const exp = regExpOperators.test(this.state.currentNum);
    if(this.state.expression !== '' || exp) {
      this.setState({ 
        currentNum: '+',
        expression: this.state.expression.concat(' + ')
      });
    };
  };

  handleSubstract() {
    const exp = regExpOperators.test(this.state.currentNum);
    if(this.state.expression !== '' || exp) {
      this.setState({ 
        currentNum: '-',
        expression: this.state.expression.concat(' - ')
      });
    };
  };

  handleMultiply() {
    const exp = regExpOperators.test(this.state.currentNum);
    if(this.state.expression !== '' || exp) {
      this.setState({ 
        currentNum: '*',
        expression: this.state.expression.concat(' * ')
      });
    };
  };

  handleDivide() {
    const exp = regExpOperators.test(this.state.currentNum);
    if(this.state.expression !== '' || exp) {
      this.setState({ 
        currentNum: '/',
        expression: this.state.expression.concat(' / ')
      });      
    };
  }

  handleClear() {
    this.setState({
      expression: '',
      currentNum: ''
    });
  };

  handleZero() {
    const exp = regExpOperators.test(this.state.currentNum);
    if (this.state.currentNum !== '') {
      this.setState({ 
        currentNum: exp ? '0' : this.state.currentNum.concat('0'),
        expression: this.state.expression.concat('0')
      });
    };
  };

  handleOne() {
    const exp = regExpOperators.test(this.state.currentNum);
    this.setState({ 
      currentNum: exp ? '1' : this.state.currentNum.concat('1'),
      expression: this.state.expression.concat('1')
    });
  };

  handleTwo() {
    const exp = regExpOperators.test(this.state.currentNum);
    this.setState({
      currentNum: exp ? '2' : this.state.currentNum.concat('2'),
      expression: this.state.expression.concat('2')
    });
  };

  handleThree() {
    const exp = regExpOperators.test(this.state.currentNum);
    this.setState({
      currentNum: exp ? '3' : this.state.currentNum.concat('3'),
      expression: this.state.expression.concat('3')
    });
  };

  handleFour() {
    const exp = regExpOperators.test(this.state.currentNum);
    this.setState({
      currentNum: exp ? '4' : this.state.currentNum.concat('4'),
      expression: this.state.expression.concat('4')
    });
  };

  handleFive() {
    const exp = regExpOperators.test(this.state.currentNum);
    this.setState({
      currentNum: exp ? '5' : this.state.currentNum.concat('5'),
      expression: this.state.expression.concat('5')
    });
  };

  handleSix() {
    const exp = regExpOperators.test(this.state.currentNum);
    this.setState({
      currentNum: exp ? '6' : this.state.currentNum.concat('6'),
      expression: this.state.expression.concat('6')
    });
  };

  handleSeven() {
    const exp = regExpOperators.test(this.state.currentNum);
    this.setState({
      currentNum: exp ? '7' : this.state.currentNum.concat('7'),
      expression: this.state.expression.concat('7')
    });
  };

  handleEigth() {
    const exp = regExpOperators.test(this.state.currentNum);
    this.setState({
      currentNum: exp ? '8' : this.state.currentNum.concat('8'),
      expression: this.state.expression.concat('8')
    });
  };

  handleNine() {
    const exp = regExpOperators.test(this.state.currentNum);
    this.setState({
      currentNum: exp ? '9' : this.state.currentNum.concat('9'),
      expression: this.state.expression.concat('9')
    });
  };

  handleDecimal() {
    this.setState({
      currentNum: this.state.currentNum.concat('.'),
      expression: this.state.expression.concat('.')
    });
  };

  render() {
    return (
      <div className="calculator">
        <Display firstRow={this.state.expression} 
                 secondRow={this.state.currentNum}/>
        <Button id="clear" content="AC" handleClick={this.handleClear}/>
        <Button id="equals" content="=" handleClick={this.handleEquals}/>
        <Button id="zero" content="0" handleClick={this.handleZero}/>
        <Button id="one" content="1" handleClick={this.handleOne}/>
        <Button id="two" content="2" handleClick={this.handleTwo}/>
        <Button id="three" content="3" handleClick={this.handleThree}/>
        <Button id="four" content="4" handleClick={this.handleFour}/>
        <Button id="five" content="5" handleClick={this.handleFive}/>
        <Button id="six" content="6" handleClick={this.handleSix}/>
        <Button id="seven" content="7" handleClick={this.handleSeven}/>
        <Button id="eigth" content="8" handleClick={this.handleEigth}/>
        <Button id="nine" content="9" handleClick={this.handleNine}/>
        <Button id="add" content="+" handleClick={this.handleAdd}/>
        <Button id="substract" content="-" handleClick={this.handleSubstract}/>
        <Button id="multiply" content="*" handleClick={this.handleMultiply}/>
        <Button id="divide" content="/" handleClick={this.handleDivide}/>
        <Button id="decimal" content="." handleClick={this.handleDecimal}/>
      </div>
    );
  }
}