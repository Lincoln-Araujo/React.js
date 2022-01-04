import React from 'react';
import ReactDOM from 'react-dom';

// in this example we have an array with some objects as elements and we wanna take them using a class function
const example = [
  {
    title: "text here",
    src: "image here"
  },
  {
    title: "text here",
    src: "image here"
  },
  {
    title: "text here",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

// this is our class function to get the element
class Example extends React.Component {
  render() {
    // First, some logic that must happen before rendering:
    const takingAnExample = example[0];
    // Next, a return statement using that logic:
    return (<div>
        <h1>{takingAnExample.title}</h1>
        <img src={takingAnExample.src}/>      
      </div>
    );
  }
}

// lastly, we render the instance
ReactDOM.render(
  <Example />,
  document.getElementById('app')
);
