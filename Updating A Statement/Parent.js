import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  //this set the initial state of our statement
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this);
    this.state = { name: 'Frarthur' };
  }
  //this function sets our state
  changeName(newName) {
    this.setState({
      name: newName
    });
  }
  //this render calls a a Child Statement and provides props to make possible the statement's update
  render() {
    return <Child name={this.state.name} onChange={this.changeName}/>
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);
