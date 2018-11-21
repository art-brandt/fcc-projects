import React from 'react';

import './main.less';
import QuoteBottomMenu from '../QuoteBottomMenu/index.jsx';
import Quote from '../Quote/index.jsx';

export default function QuoteBox(props) {


    return (
    <div id="quote-box">
      <Quote colorTxt = { props.colorStyle } 
             text = { props.quoteText } 
             author = { props.quoteAuthor } /> 
      <QuoteBottomMenu colorButton = { props.colorStyle }
                        text = { props.quoteText } 
                        author = { props.quoteAuthor }
                        newQuoteHandler = { props.newQuoteHandler }/>
    </div>
    );
}