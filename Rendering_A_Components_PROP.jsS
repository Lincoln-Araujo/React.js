import React from 'react';
import ReactDOM from 'react-dom';

//a class that returns a message with a props component set in the instance in React.render()
class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

//here we give the attribute for the instance of our Class, then this will be returned on the screen
ReactDOM.render(
  <Greeting firstName='Groberta' />, 
  document.getElementById('app')
);
