import React, { Component } from 'react';
import marked from 'marked';

import "./style.sass";

marked.setOptions({
  headerIds: false,
});

const placeholder = "# This title H1\n" +
  "## This sub-title H2\n" +
  "This link to freecodecamp [links](https://www.freecodecamp.com)\n" +
  "> This is quote\n" +
  "This is block code `<div></div>`\n" +
  "This code else ```function someFunction(){ __some_operation__ }```\n" +
  "- list 1-level\n" +
  " - list 2-level\n" +
  "   - list 3-level\n" +
  "1. list\n" +
  "1. list\n" +
  "1. list\n";

export default class App extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
      markdown: placeholder,
      html: marked(placeholder)
    }
    this.handleHTML = this.handleHTML.bind(this);
  }

  handleHTML() {
    this.setState({ html: marked(event.target.value), markdown: event.target.value});
  }

  render() {
    return(
      <div className="container">
        <div className="textarea-warper">
          <header>
            <div className="hideBtn"></div>
            <h2>Editor (Markdown)</h2>
          </header>
          <textarea value={ this.state.markdown } id="editor" onChange={ this.handleHTML }></textarea >
        </div>
        <div className="textarea-warper">
          <header>
            <div className="hideBtn"></div>
            <h2>Previewer (HTML)</h2>
          </header>
          <div id="preview" dangerouslySetInnerHTML={{ __html: this.state.html }} />
        </div>
      </div>
    );
  }
}