import React, { Component } from 'react';

import BreakContainer from '../../containers/BreakContainer/index.jsx';
import SessionContainer from '../../containers/SessionContainer/index.jsx';
import TimerContainer from '../../containers/TimerContainer/index.jsx';

import './style.scss';

class App extends Component {
  render() {
    return (
      <div className="pomodoro-clock">
        <h1 className="title">Pomodoro Clock</h1>
        <div className="row">
          <BreakContainer />
          <TimerContainer />
          <SessionContainer/>
        </div>
      </div>
    );
  }
}

export default App;