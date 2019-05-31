import React from 'react';
import './Characters.scss';

class Characters extends React.Component {
  render() {
    return <div className='char-card'>{this.props.charInState.name}</div>;
  }
}

export default Characters;
