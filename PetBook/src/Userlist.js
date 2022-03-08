import React from 'react';

import './Userlist.css';

export class Userlist extends React.Component {
  constructor(props) {
    super(props);    
    this.handleClick = this.handleClick.bind(this);
  }  

  handleClick(event) {
    this.props.onChoose(event.target.dataset.username);
  }   

  render() {

    return (      
      <ul>
        <h3 className="subtitle">buddies</h3>        
        {this.props.usernames.map((username) => (
          <li key={username}>
            <div className="buddyInfo">
              <button className="buttonUsers" data-username={username} onClick={this.handleClick}>
                {username}
              </button>
              <div className="nameUsers">@{username}</div>
            </div>            
          </li>         
        ))}
      </ul>
    );
  }
 
}