import React, { Component } from 'react';
import { breakDecrement, breakIncrement } from '../../redux/actions.js';
import { connect } from 'react-redux';

import LengthController from '../../components/LengthController/index.jsx';

class BreakContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LengthController label="Break Length"
                        id="break"
                        value={ this.props.breakLength } 
                        handleDecrement={ this.props.onBreakDecrement }
                        handleIncrement={ this.props.onBreakIncrement }/>
    );
  }
}

const mapStateToProps = store => {
  return {
    breakLength: store.breakLength
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onBreakDecrement: () => {
      dispatch(breakDecrement());
    },
    onBreakIncrement: () => {
      dispatch(breakIncrement());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreakContainer);

  