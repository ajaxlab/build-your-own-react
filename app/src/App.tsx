import React from 'react';
import './App.css';

class App extends React.Component {

  render() {
    const hello = this._getHello();
    console.info('hello', hello);
    return (
      <div className='App'>
        {hello}
      </div>
    );
  }

  private _getHello() {
    return (
      <span>hello</span>
    );
  }
}

export default App;
