import React from 'react';

import {Link} from "react-scroll/modules";

import ProfilePicture from "../../images/profilepicture.jpg";
import InlineVideo from "../../components/InlineVideo";

import video from "../../content/bit-buster/videos/BitBuster-Trailer.mp4";

import "./LandingPageContent.scss";

export default class LandingPageContent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="landing-page" className="page-content-container w-100 overflow-hidden">
                    <InlineVideo className="project-video position-relative w-100 h-100 d-flex"
                        sources={[
                            {src: video, type: "video/mp4"}
                        ]}
                    />

                    <div className='inner-page-content-container py-4'>
                        <div className="inner-page-content">

                            <div id="landing-page-profile-picture" className="d-inline-block">
                                <img itemProp="image" src={ ProfilePicture } alt="Wouter Grutter - Software Developer" />
                            </div>
                            <div id="landing-page-name-title" className="d-inline-block align-top">
                                <h1 itemProp="name" id="landing-page-name" className="mb-1">Wouter Grutter</h1>
                                <h2 id="landing-page-title">Software Developer</h2>
                                <h5>Looking for Internship, starting September 2020</h5>
                            </div>

                        </div>
                    </div>

                    <Link to="about-page" smooth={true} offset={-80} duration={1000}>
                        <span className="scroll-indicator clickable" />
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}