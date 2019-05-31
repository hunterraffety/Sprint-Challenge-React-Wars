import React from 'react';

class Dogs extends React.Component {
  constructor() {
    super();
    this.state = {
      dogImg: this.props.puppy;
    };
  }
  render() {
    return (
      <div className='dogs'>
        <img src='this.props.message' alt='dog' />
      </div>
    );
  }
}

export default Dogs;
