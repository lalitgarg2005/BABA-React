import React,{Component} from 'react';

import MainComponent from './containers/MainComponent'

import Routes from './routes'
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
   name = "BABA"
   version = "1.0"
   render(){
  return (
    <div className="App">
     {/* <MainComponent name={this.name}>
     </MainComponent> */}
     <Routes />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  )}
}

//const appObj = new App();
////console.log (appObj)
export default App;
