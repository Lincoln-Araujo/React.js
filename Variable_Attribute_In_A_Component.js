import React from 'react';
import ReactDOM from 'react-dom';

// variable that contains some attributes
const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

// getting the variable attributes
class Owl extends React.Component {
  render () {
    return (
      <div>
        <h1>{owl.title}</h1>
        <img 
          src= {owl.src}
          alt= {owl.title}
        />
      </div>
    );
  }
}

//rendering the instance of the variable
ReactDOM.render(
  <Owl />,
  document.getElementById('app') 
);

//it should print a title and an image 
