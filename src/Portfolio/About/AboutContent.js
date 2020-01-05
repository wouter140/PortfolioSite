import React from 'react';
import ContentContainer from "../../components/ContentContainer";

import "./AboutPageContent.scss"

import profilepicture from "../../images/profilepicture.png";
import {Link} from "react-scroll";
import {MDBCard, MDBCardBody, MDBCardGroup, MDBCardText, MDBCardTitle, MDBContainer} from "mdbreact";

export default class AboutContent extends React.Component {
    render() {
        return (
            <ContentContainer id="about-page" className="responsive-text-size px-3"
                        contentTitle={ <span>About <strong>Me</strong></span> }>

                <img src={ profilepicture } alt="Profile Picture" className="float-left mr-5 mb-3 d-none d-md-inline-block profile-picture" />

                <div>
                    <b>Hey there</b> and welcome to my portfolio! I'm <i>Wouter Grutter</i> and I am a software developer, focusing on games.<br/>
                    I am currently studying Game Programming at <a href="https://www.buas.nl/opleidingen/creative-media-and-game-technologies" target="_blank">Breda University of Applied Sciences</a>, formerly known as NHTV.<br/>
                    I have previously graduated from ROCA12 with a Game Programmer degree.
                </div>
                <div className="mt-2">
                    I am currently based in Breda, the Netherlands but am able to relocate.
                </div>
                <div className="mt-3">
                    As most in this field do, I love video games and movies which take a significant amount of my free time.<br/>

                    I'm a huge enthusiast when it comes to game development and enjoy solving all kinds of problems through code.<br/>
                    I work on <Link to="personal-projects-page" href="" smooth={true} offset={-40} duration={500}>personal projects</Link> in my spare time and am always interested and eager to learn and use new technologies.<br/>
                </div>

                <div className="mt-3">
                    I am currently employed at Learning Valley where I work on their online video platform, tools, apps and other applications that are used in their products and customers.<br/>
                    With my work I learn new technologies like React, 3D rendering in the browser, integrated tools and authentication.<br/>
                    Some of my work at Leaning Valley can be found in the <Link to="personal-projects-page" href="" smooth={true} offset={-40} duration={500}>personal projects</Link> section below with more details.
                </div>



                <MDBContainer className="mt-5">
                    <MDBCardGroup>
                        <MDBCard className="z-index-1">
                            <MDBCardBody>
                                <MDBCardTitle tag="h5" className="text-center">Languages</MDBCardTitle>
                                <MDBCardText>
                                    As most in this field do, I love video games and movies which take a significant amount of my free time.
                                    I'm a huge enthusiast when it comes to game development and enjoy solving all kinds of problems through code.
                                    I work on personal projects in my spare time and am always interested and eager to learn and use new technologies.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle tag="h5" className="text-center">Engines</MDBCardTitle>
                                <MDBCardText>
                                    As most in this field do, I love video games and movies which take a significant amount of my free time.
                                    I'm a huge enthusiast when it comes to game development and enjoy solving all kinds of problems through code.
                                    I work on personal projects in my spare time and am always interested and eager to learn and use new technologies.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle tag="h5" className="text-center">Tools</MDBCardTitle>
                                <MDBCardText>
                                    As most in this field do, I love video games and movies which take a significant amount of my free time.
                                    I'm a huge enthusiast when it comes to game development and enjoy solving all kinds of problems through code.
                                    I work on personal projects in my spare time and am always interested and eager to learn and use new technologies.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCardGroup>
                </MDBContainer>

            </ContentContainer>
        );
    }
}