import React from 'react';
import './styles.css';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return  (
              <div className='Clock'>
                {this.state.date.toLocaleTimeString(
                  navigator.language, {
                    hour: '2-digit',
                    minute: '2-digit'
                  }
                )}
              </div>
            );
  }
  //this is the code we can use to count the seconds
  componentDidMount() {
    const oneSecond = 1000;
    setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
}
