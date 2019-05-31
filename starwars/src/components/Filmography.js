import React from 'react';
import '../components/Filmography.scss';

class Filmography extends React.Component {
  render() {
    return (
      <ul>
        <li class='film-title'>{this.props.filmInState.title}</li>
        <li className='film-crawl'>{this.props.filmInState.opening_crawl}</li>
      </ul>
    );
  }
}

export default Filmography;
