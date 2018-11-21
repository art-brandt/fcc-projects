import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import QuoteBox from './components/QuoteBox/index.jsx';

import rnmColor from './script/colorPicker';

import './less/main.less';

const getQuote = function (handleResponse) {
  $.ajax({
    url: 'http://api.forismatic.com/api/1.0/',
    jsonp: 'jsonp',
    dataType: 'jsonp',
    data: {
      method: 'getQuote',
      format: 'jsonp',
      lang: 'ru',
    },
    success: (response) => {
      handleResponse({quote: response.quoteText, author: response.quoteAuthor});
    }
  });
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorApp: '',
      quoteText: '',
      quoteAuthor: '',
    }
    this.newQuote = this.newQuote.bind(this);
  }

  componentDidMount() {
    getQuote(response => {
        this.setState(
          {
            quoteText: response.quote, 
            quoteAuthor: response.author, 
            colorApp: rnmColor()
          });
    });
  }

  newQuote() {
    getQuote(response => {
      this.setState(
        {
          quoteText: response.quote, 
          quoteAuthor: response.author, 
          colorApp: rnmColor()
        });
    });
  }
  
  render () {
    document.getElementById('App').style.backgroundColor = this.state.colorApp;

    return < QuoteBox 
      colorStyle = {this.state.colorApp}
      quoteText = {this.state.quoteText}
      quoteAuthor = {this.state.quoteAuthor}
      newQuoteHandler = {this.newQuote}
    />
  }

}

ReactDOM.render(< App />, document.getElementById('App'));