import React from 'react';

//exporting our class function 
export class List extends React.Component {
  render() {
    // this variable will define the title we wanna show on the screen
    let titleText = `Favorite ${this.props.type}`;
    // this conditional will check how many children the class function has and add a 's' in the end of title if it has more than one
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}
