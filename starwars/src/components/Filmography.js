import React from 'react';
import '../components/Filmography.scss';
import TextTruncate from 'react-text-truncate';
class Filmography extends React.Component {
  render() {
    return (
      <div class='single-film'>
        <li class='film-title'>{this.props.filmInState.title}</li>
        <TextTruncate
          className='text-truncate'
          line={1}
          truncateText='…'
          text={this.props.filmInState.opening_crawl}
          textTruncateChild={
            <p className='read-more'>
              <a href='#'>Read more...</a>
            </p>
          }
        />
        <li className='film-crawl' />
      </div>
    );
  }
}

export default Filmography;
