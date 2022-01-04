import React from 'react';
import ReactDOM from 'react-dom';

const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

// getting the const attributes
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

ReactDOM.render(
  <Owl />,
  document.getElementById('app') 
);

//it should print a title and an image 
