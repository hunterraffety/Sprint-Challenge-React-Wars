import React from 'react';
import './Characters.scss';

class Characters extends React.Component {
  render() {
    return (
      <div className='char-card'>
        <p className='char-name'>{this.props.charInState.name}</p>
        <ul>
          <li className='char-stat'>Gender: {this.props.charInState.gender}</li>
          <li className='char-stat'>
            Eye color: {this.props.charInState.eye_color}
          </li>
          <li className='char-stat'>
            Birth year: {this.props.charInState.birth_year}
          </li>
        </ul>
      </div>
    );
  }
}

export default Characters;
