import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Progress from "react-progress-2";
import "react-progress-2/main.css"
import {ParallaxProvider} from "react-scroll-parallax/cjs";

import PortfolioPage from "./Portfolio/PortfolioPage";
import {projects} from "./ProjectPages/ProjectPages";
import ScrollToTop from "./components/ScrollToTop";


function App() {
    return (
        <ParallaxProvider scrollContainer={document.html}>
            <Progress.Component thumbStyle={{background: 'rgb(75,75,179)'}}/>

            <Router>
                <ScrollToTop />
                <Switch>
                    { projects.map((project) => (
                        <Route path={ project.path } component={ project.component } />
                    )) }

                    <Route path="/" component={ PortfolioPage } />
                </Switch>
            </Router>

        </ParallaxProvider>
    );
}

export default App;
