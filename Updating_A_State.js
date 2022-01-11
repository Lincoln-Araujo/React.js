import React from 'react';

class Example extends React.Component {
  constructor(props) {
  	super(props);
    // the states
    this.state = {
      mood:   'great',
      hungry: false
    };
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
