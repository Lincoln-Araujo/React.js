import React from 'react';
import ReactDOM from 'react-dom';

//In case you forget to provide a props name for some instance, 
//you can set a defaultProps that will return a text instead a error message or blank content

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text: 'I am a button'};

ReactDOM.render(
  <Button />, 
  document.getElementById('app')
);
