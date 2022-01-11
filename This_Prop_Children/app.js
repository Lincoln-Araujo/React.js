import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

//this class function will print titles and lists on the screen
class App extends React.Component {
  render() {
    return (
      <div>
        //here we call the instance that we've imported from another class function
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>   
          <li>Duncan the Supreme Love</li>       
        </List>
      </div>
    );
  }
}

//rendering the class function App
ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
