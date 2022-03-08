import React from 'react';
import { camera } from './images';
import {Clock} from './Clock';
import './styles.css';

const black = '#151414';
const white = '#FFFFFF';

export class TopMenu extends React.Component {  
  
  render() {
      
      return (
        <div className='topMenu'>

                            <Clock />

                            <div>{camera}</div>

                            <div className="rigthIcons">

                              <span class="icon-connection"></span>
                              <span class="icon-bars_icon"></span>
                              100%
                              <span class="icon-battery_icon"></span>           
                                                                
                            </div>

                        </div>
      );
    }
  }

  export class Footer extends React.Component {
        
    render () {

          return (
                <div className='footer'>
                    <span class="icon-navigation_icon"></span>
                    <span class="icon-checkbox-unchecked"></span>
                    <span class="icon-back_icon"></span>
                </div>
        )
    }
};

export class DarkButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: white,
                  status: false,
    };
    this.changeColor = this.changeColor.bind(this);   
  }

  changeColor() {
    const newColor = this.state.color === black ? white : black;
    const newStatus = this.state.status === true ? false : true;    
    this.setState({ color: newColor, status: newStatus});
    console.log(newStatus)
  }  

  render() {

    let color;
    if (!this.state.status) {
      color = "darkColor";
    } else {
      color = "lightColor"
    }

    let buttonColor;
    if (!this.state.status) {
      buttonColor = "icon-paw_icon_light"
    } else {
      buttonColor = "icon-paw_icon_dark"
    }

    return (
      <div className='background' style={{background: this.state.color}}>
        <button 
          className={this.state.status ? "screenColorLight" : "screenColorDark" }
          onClick={this.changeColor}
        >         
            <span class={buttonColor}></span>        

        </button>

        <div className={color}>
          <div className="PetBookTopMenu">
            <TopMenu />
          </div>
          <div className="PetBookFooter">
            <Footer />
          </div>          
        </div>
        
      </div>
    );
  }
}