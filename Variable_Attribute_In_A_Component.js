import React from 'react';
import ReactDOM from 'react-dom';

// variable that contains some attributes
const example = {
  title: 'Title here',
  src: 'image here'
};

// getting the variable attributes
class Example extends React.Component {
  render () {
    return (
      <div>
        <h1>{example.title}</h1>
        <img 
          src= {example.src}
          alt= {example.title}
        />
      </div>
    );
  }
}

//rendering the instance of the variable
ReactDOM.render(
  <Example />,
  document.getElementById('app') 
);

//it should print a title and an image 
