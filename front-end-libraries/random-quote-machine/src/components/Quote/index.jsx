import React from 'react';
import './style.less';


export default function Quote(props) {
  const colorTxt = {color: props.colorTxt};
  
  return (
    <blockquote>
      <p id="text" style={colorTxt}>{props.text}</p>
      <p id="author" style={colorTxt}>{props.author}</p>
    </blockquote>
  );
}

