import React from 'react';

import ProfilePicture from "../../images/profilepicture.png";

import "./LandingPageContent.scss";

export default class LandingPageContent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="landing-page" className="page-content-container w-100">
                    <canvas className="w-100 h-100 position-relative" />

                    <div className="inner-page-content">

                        <div id="landing-page-profile-picture" className="d-inline-block">
                            <img src={ ProfilePicture } alt="Wouter Grutter - Software Developer" />
                        </div>
                        <div id="landing-page-name-title" className="d-inline-block align-top">
                            <h1 id="landing-page-name" className="mb-1">Wouter Grutter</h1>
                            <h2 id="landing-page-title">Software Developer</h2>
                        </div>

                    </div>

                    <span className="scroll-indicator clickable" />
                </div>
            </React.Fragment>
        );
    }
}