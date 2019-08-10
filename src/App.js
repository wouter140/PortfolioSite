import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Progress from "react-progress-2";
import "react-progress-2/main.css"

import PortfolioPage from "./Portfolio/PortfolioPage";

function App() {
    return (
        <React.Fragment>
            <Progress.Component thumbStyle={{background: 'rgb(75,75,179)'}}/>

            <Router>
                <Switch>
                    {/* TODO: Other paths */}

                    <Route path="/" component={ PortfolioPage } />
                </Switch>
            </Router>

        </React.Fragment>
    );
}

/*
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
 */

export default App;
