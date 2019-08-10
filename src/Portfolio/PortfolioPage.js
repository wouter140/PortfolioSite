import React from 'react';

import Footer from "./components/Footer";

import LandingPageContent from "./LandingPage/LandingPageContent";
import AboutContent from "./About/AboutContent";
import ProfessionalProjectsContent from "./Projects/ProfessionalProjectsContent";
import PersonalProjectsContent from "./Projects/PersonalProjectsContent";
import ContactContent from "./Contact/ContactContent";

import "./PortfolioGeneral.scss"

export default class PortfolioPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <LandingPageContent />

                <AboutContent />

                <ProfessionalProjectsContent />
                <PersonalProjectsContent />

                <ContactContent />

                <Footer />
            </React.Fragment>
        );
    }
}