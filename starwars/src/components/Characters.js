import React from 'react';
import Filmography from '../components/Filmography';
import './Characters.scss';

class Characters extends React.Component {
  constructor() {
    super();

    this.state = {
      films: []
    };
  }

  componentDidMount() {
    this.getFilms('https://swapi.co/api/films/');
  }

  getFilms = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ films: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className='char-card'>
        <div class='char-info'>
          <p className='char-name'>{this.props.charInState.name}</p>
          <ul>
            <li className='char-stat'>
              Gender: {this.props.charInState.gender}
            </li>
            <li className='char-stat'>
              Eye color: {this.props.charInState.eye_color}
            </li>
            <li className='char-stat'>
              Birth year: {this.props.charInState.birth_year}
            </li>
            <div className='filmography'>
              <h1 class='filmography-header'>Filmography:</h1>
              {this.state.films.map((film, index) => (
                <Filmography filmInState={film} indexCount={index} />
              ))}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Characters;
