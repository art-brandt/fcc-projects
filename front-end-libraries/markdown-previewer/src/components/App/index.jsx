import React, { Component } from 'react';
import marked from 'marked';

import "./style.sass";

import compress from './icon/compress-solid.svg';
import expand from './icon/expand-solid.svg';

marked.setOptions({
  headerIds: false,
  breaks: true
});

const placeholder = "# This title H1\n" +
  "## This sub-title H2\n" + 
  "This link to freecodecamp [links](https://www.freecodecamp.com)\n" +
  "> This is quote\n\n" +
  "This is block code `<div></div>`\n\n" +
  "```\n" +
  "///This code else:\n\n" +
  "function someFunction(){\n__some_operation__\n}\n" +
  "```\n" +
  "List with 3 level:\n" +
  "- list 1-level\n" +
  " - list 2-level\n" +
  "   - list 3-level\n\n" +
  "**Numeric** list:\n" +
  "1. list\n" +
  "1. list\n" +
  "1. list\n\n" +
  "![React Logo w/ Text](https://i.gifer.com/1wnG.gif)"
  ;

export default class App extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
      markdown: placeholder,
      html: marked(placeholder),
      markdownFull: false,
      htmlFull: false
    }
    this.handleHTML = this.handleHTML.bind(this);
    this.markdownDoFullScreen = this.markdownDoFullScreen.bind(this);
    this.htmlDoFullScreen = this.htmlDoFullScreen.bind(this);
  }

  handleHTML() {
    this.setState({ html: marked(event.target.value), markdown: event.target.value});
  }

  markdownDoFullScreen() {
    this.setState({ markdownFull: !this.state.markdownFull });
  }

  htmlDoFullScreen() {
    this.setState({ htmlFull: !this.state.htmlFull });
  }




  render() {
    const styleSideHtml = () => {
      if (this.state.htmlFull) {
        return { width: "100%" }
      } else if (this.state.markdownFull) {
        return { width: "0%", paddingLeft: "0" , paddingRight: "0" } 
      }
    };

    const styleSideMarkdown = () => {
      if (this.state.markdownFull ) {
        return { width: "100%" }
      } else if (this.state.htmlFull) {
        return { width: "0%", paddingLeft: "0" , paddingRight: "0" }
      } 
    };

    const iconButton = () => {
      if (this.state.markdownFull || this.state.htmlFull) {
        return {__html: compress }
      } else {
        return {__html: expand }
      } 
    }

    return(
      <div className="container">
        <div className="side" style={ styleSideMarkdown() }>
          <header>
            <h2>Editor (Markdown)</h2>
            <button className="btnToFullScreen" 
              onClick={ this.markdownDoFullScreen }
              dangerouslySetInnerHTML={ iconButton() }>
            </button>
          </header>
          <textarea value={ this.state.markdown } id="editor" onChange={ this.handleHTML }></textarea >
        </div>
        <div className="side" style={ styleSideHtml() }>
          <header>
            <h2>Previewer (HTML)</h2>
            <button className="btnToFullScreen" 
              onClick={ this.htmlDoFullScreen }
              dangerouslySetInnerHTML={ iconButton() }>
            </button>
          </header>
          <div id="preview" dangerouslySetInnerHTML={{ __html: this.state.html }} />
        </div>
      </div>
    );
  }
}