import React from 'react';

class Example extends React.Component {
  constructor(props) {
  	super(props);
    // the states
    this.state = {
      mood:   'great',
      hungry: false
    };
    // when we have a component class method that uses this,
    // we ne to bind that method inside of the constructor too
    // that's why we use the code above:
    this.changingState = this.changingState.bind(this);
  }
  
  // setting a method that will change a state value
  changingState() {
    this.setState({ hungry: true });  
  }
  
  render() {
    return <div></div>;
  }
}

<Example />
