import React from 'react';
import { Profile } from './Profile';
import { Directory } from './Directory';
import './styles.css';
import {coloredLogo} from './images';
import {DarkButton} from './colorChange'

export class PetBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: null,
    };
    this.handleChoose = this.handleChoose.bind(this);
    this.handleReturnToDirectoryClick = this.handleReturnToDirectoryClick.bind(
      this
    );
  }

  handleChoose(newUsername) {
    this.setState({ currentUsername: newUsername });
  }

  handleReturnToDirectoryClick() {
    this.setState({ currentUsername: null });
  }

  render() {
    let body;
    if (this.state.currentUsername) {
      body = (
        <Profile
          username={this.state.currentUsername}
          onChoose={this.handleChoose}
        />
      );
    } else {
      body = <Directory onChoose={this.handleChoose} />;
    }

    return (
                     
        <div className='PetBook'>
              <DarkButton />          
              <header>                         
                  <h1 className="topLogo">PetBook</h1>
                  {coloredLogo}
                  <nav>
                    {this.state.currentUsername && (
                      <button className="Return" onClick={this.handleReturnToDirectoryClick}>
                        Return to My Place
                      </button>                  
                    )}            
                  </nav>              
                </header>
                <main>{body}</main>
          </div>

      
    );
  }
}
