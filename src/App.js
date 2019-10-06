import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Progress from "react-progress-2";
import "react-progress-2/main.css"

import PortfolioPage from "./Portfolio/PortfolioPage";
import {projects} from "./ProjectPages/ProjectPages";

function App() {
    return (
        <React.Fragment>
            <Progress.Component thumbStyle={{background: 'rgb(75,75,179)'}}/>

            <Router>
                <Switch>
                    { projects.map((project) => (
                        <Route path={ project.path } component={ project.component } />
                    )) }

                    <Route path="/" component={ PortfolioPage } />
                </Switch>
            </Router>

        </React.Fragment>
    );
}

export default App;
