import React from 'react';
import './App.scss';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    };
  }

  componentDidMount() {
    this.getDogs('https://dog.ceo/api/breeds/image/random/1');
  }

  getDogs = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ dogs: data.message, isLoading: true });
      })
      .catch(err => {
        throw new Error(`f`, err);
      });
  };

  newDog = e => {
    console.log(e);
    e.preventDefault();
    fetch('https://dog.ceo/api/breeds/image/random/1')
      .then(res => res.json())
      .then(data => this.setState({ dogs: data.message }))
      .catch(err => {
        throw new Error(`uh oh a-aron`, err);
      });
  };

  render() {
    return (
      <div className='App'>
        <h1 className='Header'>Dogs</h1>
        <div className='dog-img'>
          {this.state.dogs.map(dog => (
            <img src={dog} />
          ))}
        </div>
        <form>
          <button onClick={this.newDog} alt='random dooooog'>
            Gimme a new one
          </button>
        </form>
      </div>
    );
  }
}

export default App;
