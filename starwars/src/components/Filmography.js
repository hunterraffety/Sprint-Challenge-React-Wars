import React from 'react';
import '../components/Filmography.scss';

class Filmography extends React.Component {
  render() {
    return (
      <div class='single-film'>
        <li class='film-title'>{this.props.filmInState.title}</li>
        <li className='film-crawl'>{this.props.filmInState.opening_crawl}</li>
      </div>
    );
  }
}

export default Filmography;
