import React from 'react';
import './style.less';

export default function QuoteBottomMenu(props) {

  const colorBg = { backgroundColor: props.colorButton };
  
  const tweetReq = `http://twitter.com/intent/tweet?text="${props.text}" ${props.author}`;

  return (
    <div className="bottom">
      <div className="bottom__left">
        <a href={tweetReq} id="tweet-quote" style={colorBg}></a>
      </div>
      <div className="bottom__rigth">
        <button id="new-quote" onClick={props.newQuoteHandler} style={colorBg}>New Quote</button>
      </div>
    </div>
  );

}