import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import Progress from "react-progress-2";
import "react-progress-2/main.css"

import PortfolioPage from "./Portfolio/PortfolioPage";
import {projects} from "./ProjectPages/ProjectPages";
import LocationChangeScrollHandler from "./components/ScrollToTop";

function App() {
    return (
        <React.Fragment>
            <Progress.Component thumbStyle={{background: 'rgb(75,75,179)'}}/>

            <Router>
                <LocationChangeScrollHandler/>
                <Switch>
                    {projects.map((project) => (
                        <Route key={project.path} path={project.path} component={project.component}/>
                    ))}

                    <Route exact path="/" component={PortfolioPage}/>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
