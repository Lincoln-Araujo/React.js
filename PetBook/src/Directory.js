import React from 'react';
import { Userlist } from './Userlist';
import './styles.css'
import './profile.css';

export function Directory(props) {
  
    return (
      <div>
        <h2 className="subtitle">My place</h2>
        <div className="userProfile">
          <img className="MyProfile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM_SeUFdycgz923vkv2_iAOKHMS2Srcf60S5gTE8ajYhrWhk2WuLZfOf_OlFnQx0y3ulM&usqp=CAU" />
          <div className="Paragraph">
            <p>Who’s the good boy?</p>
            <p className="nameUser">YOU,  WALTER OTTER !</p>
            <p className="idUser">@otter</p>
          </div>          
        </div>  
        <div className="line"></div>
        <div className="buddiesList">
          <Userlist 
            usernames={['dog', 'cat', 'komodo']}
            onChoose={props.onChoose}            
          />
        </div>        
      </div>
    );
}

