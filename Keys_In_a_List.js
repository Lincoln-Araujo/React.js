import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];
  // using a double argument with map you can access every item in the provided list
const peopleLis = people.map((person, i) =>
  // this is how you can put a different key for every item in a list/array
  <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));
