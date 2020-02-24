import React, {Component} from 'react';

import {Helmet} from "react-helmet";

import PortfolioNavBar from "./components/NavBar";
import Footer from "./components/Footer";

import LandingPageContent from "./LandingPage/LandingPageContent";
import AboutContent from "./About/AboutContent";
import ProfessionalProjectsContent from "./Projects/ProfessionalProjectsContent";
import PersonalProjectsContent from "./Projects/PersonalProjectsContent";
import ContactContent from "./Contact/ContactContent";

import ProfilePicture from "../images/profilepicture.jpg";

import "./PortfolioGeneral.scss"

export default class PortfolioPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            position: { x: 0, y: 0},
            size: { width: 0, height: 0},
            imageURL: "",
            containerStyle: {},

            projectOverlayTransition: false
        }
    }

    startOverlay(pos, size, image) {
        this.setState({
            position: pos,
            size: size,
            imageURL: image,
            projectOverlayTransition: true
        });
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Wouter Grutter - Game Developer | Portfolio</title>

                    <meta name="keywords" content="portfolio, woutergrutter, games, gamedeveloper, developer, code, c++, tech,
                        technologies, tools, gameplay, python, javascript, css, c#, react, scrum, leader, teamwork, unrealengine, unity, console, playstation" />
                    <meta name="subject" content="Portfolio of Wouter Grutter, a Game Developer" />
                    <meta name="description" content="Welcome to my portfolio site! Here you will find some of my professional and personal work and projects, my resumé and contact information!" />

                    <meta name="topic" content="Portfolio" />
                    <meta name="summary" content="Portfolio of Wouter Grutter, a Game Developer" />

                    <meta property="og:title" content="Wouter Grutter - Portfolio" />
                    <meta property="og:description" content="Welcome to my portfolio site! Here you will find some of my professional and personal work and projects, my resumé and contact information!" />
                    <meta property="og:url" content="WouterGrutter.com" />
                    <meta property="og:image" content={ProfilePicture} />

                    <meta name="twitter:card" content="Portfolio of Wouter Grutter, a Game Developer" />
                    <meta name="twitter:title" content="Wouter Grutter - Portfolio" />
                    <meta name="twitter:description" content="Welcome to my portfolio site! Here you will find some of my professional and personal work and projects, my resumé and contact information!" />
                    <meta name="twitter:url" content="WouterGrutter.com" />
                    <meta name="twitter:image" content={ProfilePicture} />
                </Helmet>

                <header>
                    <PortfolioNavBar />

                    <LandingPageContent />
                </header>

                <AboutContent />

                <ProfessionalProjectsContent openOverlay={ this.startOverlay.bind(this) } />
                <PersonalProjectsContent openOverlay={ this.startOverlay.bind(this) } />

                <ContactContent />

                <Footer/>

            </React.Fragment>
        );
    }
}