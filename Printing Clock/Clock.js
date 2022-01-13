import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  render() {
    return (
      <div>{this.state.date.toLocaleTimeString()}</div>
    );
  }
}

//this will print the local hour into the screen
ReactDOM.render(<Clock />, document.getElementById('app'));
