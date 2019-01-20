import React, { Component } from 'react';
import { sessionDecrement, sessionIncrement } from '../../redux/actions.js';
import { connect } from 'react-redux';

import LengthController from '../../components/LengthController/index.jsx';

class SessionContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <LengthController label="Session Length"
                        id="session"
                        value={ this.props.sessionLength } 
                        handleDecrement={ this.props.onSessionDecrement }
                        handleIncrement={ this.props.onSessionIncrement }/>
    );
  }
}

export default connect(
  store => ({
    sessionLength: store.sessionLength
  }),
  dispatch => ({
    onSessionDecrement: () => {
      dispatch(sessionDecrement());
    },
    onSessionIncrement: () => {
      dispatch(sessionIncrement());
    }
  })
)(SessionContainer);

  