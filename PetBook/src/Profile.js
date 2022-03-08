import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';
import './profile.css';
import './styles.css';

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userData: null}
  }

  loadUserData() {
    this.setState({ userData: null });
    this.fetchId = fetchUserData(this.props.username, (userData) => {
      this.setState({ userData });
    });
  } 
  
  
  render() {
    const isLoading = this.state.userData === null;
    
   

    let name;
    if (isLoading) {
      name = 'Loading...';
    } else {
      name = this.state.userData.name;
    }

    let className = 'Profile';
    if (isLoading) {
      className += ' loading';
    }
    
    let bio;
    if (isLoading) {
      bio = 'Loading...';
    } else {
      bio = this.state.userData.bio;
    }

    let friends;
    if (isLoading) {
      friends = [];
    } else {
      friends = this.state.userData.friends;
    }
    
    return (
      <div>
        <h2 className="subtitle">{this.props.username}'s place</h2>
        <div className="profile-head">
          {!isLoading && (
            <img className="buddyPicture" src={this.state.userData.profilePictureUrl} alt="" />
          )}
          <div className="buddyInfoProfile">
            <p className="buddyName">{name}</p>
            <p className="idBuddy">@{this.props.username}</p>
            <p className="bio">{bio}</p>
          </div>          
        </div>
        <div className="line"></div>
        <div className="profile-body">          
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  } 

  componentDidMount() {
    this.loadUserData()
  }

  componentWillUnmmount() {
    cancelFetch(this.fetchID);
  }

  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      cancelFetch(this.fetchID);
      this.loadUserData();
    }
  }  

}