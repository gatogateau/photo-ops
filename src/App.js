import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Camshit from './verifycamComponent';
import Enrollcam from './enrollcamComponent';
import fuckshit from './textured-camera-icon.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button className="profilepic" onClick={this._onButtonClick}>Add Profile Picture</button>
        {this.state.showComponent ?
          <Enrollcam /> :
          null
        }
        <button onClick={this._onButtonClick}><img className="cambutt" alt="campic" src={fuckshit} /></button>
        {this.state.showComponent ?
          <Camshit /> :
          null
        }
      </div>
    );
  }
}

export default App;
