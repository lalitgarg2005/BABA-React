import React, {useState} from 'react';

import MainComponent from './containers/MainComponent'
import Context from './utils/Context'

import Routes from './routes'
//import logo from './logo.svg';
//import './App.css';

const App = () => {
   //name = "BABA"
   //version = "1.0"
   const [stateGlobal, setStateGlobal] = useState(0)

   const incrementGlobalState = () => {
     setStateGlobal(stateGlobal + 1)
   }

   const decrementGlobalState = () => {
    setStateGlobal(stateGlobal - 1)
  }
  return (
    <div className="App">
     {/* <MainComponent name={this.name}>
     </MainComponent> */}
     <Context.Provider
      value={{
        valueGlobalState: stateGlobal,
        addGlobalValue: () => incrementGlobalState(),
        decGlobalValue: () => decrementGlobalState()

      }}>
     <Routes />
     </Context.Provider>
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

//const appObj = new App();
////console.log (appObj)
export default App;
