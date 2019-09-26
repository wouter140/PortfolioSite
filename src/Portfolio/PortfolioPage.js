import React, {Component} from 'react';

import PortfolioNavBar from "./components/NavBar";
import Footer from "./components/Footer";

import LandingPageContent from "./LandingPage/LandingPageContent";
import AboutContent from "./About/AboutContent";
import ProfessionalProjectsContent from "./Projects/ProfessionalProjectsContent";
import PersonalProjectsContent from "./Projects/PersonalProjectsContent";
import ContactContent from "./Contact/ContactContent";

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