let React = import React from 'react';
let ReactDOM = import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() { // everything in between these curly-braces is instructions for how to build components
  
    return <h1>Hello world</h1>;
  }
}

// component goes here:
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
)
