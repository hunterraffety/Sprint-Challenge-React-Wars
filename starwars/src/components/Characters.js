import React from 'react';

class Characters extends React.Component {
  render() {
    return <div className='char-card'>{this.props.charInState.birth_year}</div>;
  }
}

export default Characters;
