import React from 'react';
import '../components/Filmography.scss';
import TextTruncate from 'react-text-truncate';

class Filmography extends React.Component {
  howManyResults = props => {
    console.log(this.props.filmInState);
    // const filmList = this.props.filmInState;
    // const test = [];
    // test.push(filmList);
    // test.slice(0, 2);
    // console.log(`whhhat`, test);
    // test.length >= 3 ? console.log(`3+`) : console.log(`less than 100`);
  };

  render() {
    return (
      <div className='single-film'>
        {this.howManyResults()}
        <li className='film-title'>{this.props.filmInState.title}</li>
        <TextTruncate
          className='text-truncate'
          line={1}
          truncateText='…'
          text={this.props.filmInState.opening_crawl}
          textTruncateChild={
            <p className='read-more'>
              <button href='#'>Read more...</button>
            </p>
          }
        />
        <li className='film-crawl' />
      </div>
    );
  }
}

export default Filmography;
