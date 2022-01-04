import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    let whatToDo;
    if (fiftyFifty === true) {
      whatToDo = <h1>Tonight I'm going out WOOO</h1>
    } else {
      whatToDo = <h1>Tonight I'm going to bed WOOO</h1>
    }

    return whatToDo;
  }
}

ReactDOM.render(
  <TonightsPlan />,
  document.getElementById('app')
);

// it should print the return of the variable whatToDo based on the random const fiftyFifty
