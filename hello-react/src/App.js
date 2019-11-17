import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomepageImage from './components/HomepageImage'
// TODO check propper order for importing
// 1st import external
// 2nd react stuff
// 3rd stuff I developed

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <HomepageImage />
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
      </header>
    </div>
  );
}

export default App;
