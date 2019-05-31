import React from 'react';
import './Characters.scss';

class Characters extends React.Component {
  render() {
    return (
      <div className='char-card'>
        <p className='char-name'>{this.props.charInState.name}</p>
        <p className='char-gender'>Gender: {this.props.charInState.gender}</p>
      </div>
    );
  }
}

export default Characters;
