import React, { Component } from 'react';

// importing character component
import Characters from './components/Characters';
import './App.scss';

class App extends Component {
  // setting state
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  // api call ------
  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        console.log(data.previous);
        console.log(data.next);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  // end api call ------

  render() {
    return (
      <div className='App'>
        <h1 className='Header'>React Wars</h1>
        <div className='character-list'>
          {this.state.starwarsChars.map(charBios => (
            <Characters charInState={charBios} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
