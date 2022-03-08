import React from 'react';
import ReactDOM from 'react-dom';
import './LoginScreen.css';
import './styles.css';
import {petBookIcon} from './images';
import {PetBook} from './PetBook';
import {TopMenu} from './colorChange';
import {Footer} from './colorChange';

export class PetBookScreen extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        username: 'otter',
        password: 'otter123',
        authorized: false
      };
      this.authorize = this.authorize.bind(this);
   }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {

    const login = (
      <form action="#" onSubmit={this.authorize}>
         <input type="username" placeholder="username" className="loginButton"/> 
         <input type="password" placeholder="password" className="passwordButton"/>
         <input type="submit"   placeholder="login" className="submitButton" />
      </form>
    );

    let body;
    if (this.state.authorized) {
      body = (
        <PetBook />
      );
    } else {
      body = (
        <div className="Background-LoginScreen ">
          <div className="petBookLoginScreen">
          <div className="boxLogo">
            <div className="title">
              <h1 className="BigLogoPetBook">PetBook</h1>
              {petBookIcon}
            </div>              
              <h2 className="subtitlePetBook">A place to meet your buddies</h2>
          </div>
          {login}
        </div>
        </div> 
      );
    }

    return(
      <div className="App">
        <TopMenu />
        <Footer />              
        <div className="lightContainer"> 
          
          
          <main className="background">
            
             <main>{body}</main>            
          </main>
          
        </div>

      </div>          
    );
  }
   
}

ReactDOM.render(<PetBookScreen />, document.getElementById('app'));