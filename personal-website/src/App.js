import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
// import logo from './logo.svg';
import PrivateRoute from './components/PrivateRoute'
import SignInSide from './components/login/SignInSlide';
import Blog from './components/blog/Blog';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={SignInSide} />
        <Route path="/" component={Blog} />
        <PrivateRoute path="/onlyAuthorizedAllowedHere/" />
      </Switch>
    </Router>
    // <SignInSide/>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
