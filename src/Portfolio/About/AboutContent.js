import React from 'react';
import ContentContainer from "../../components/ContentContainer";

import {Link} from "react-scroll";
import {MDBCard, MDBCardBody, MDBCardGroup, MDBCardText, MDBCardTitle, MDBContainer} from "mdbreact";

import profilepicture from "../../images/profilepicture.png";

import {ReactComponent as cPlusPlusIcon} from "../../images/about/languages/c++-icon.svg";
import {ReactComponent as cIcon} from "../../images/about/languages/c-icon.svg";
import {ReactComponent as cSharpIcon} from "../../images/about/languages/c-sharp-icon.svg";
import {ReactComponent as pythonIcon} from "../../images/about/languages/python-icon.svg";
import {ReactComponent as javascriptIcon} from "../../images/about/languages/javascript-icon.svg";
import {ReactComponent as webGLIcon} from "../../images/about/languages/webgl-icon.svg";
import {ReactComponent as reactIcon} from "../../images/about/languages/react-icon.svg";
import {ReactComponent as htmlIcon} from "../../images/about/languages/html-icon.svg";
import {ReactComponent as cssIcon} from "../../images/about/languages/css-icon.svg";
import {ReactComponent as phpIcon} from "../../images/about/languages/php-icon.svg";
import {ReactComponent as unity3DIcon} from "../../images/about/languages/unity3d-icon.svg";
import {ReactComponent as unrealEngineIcon} from "../../images/about/languages/unrealengine4-icon.svg";
import {ReactComponent as trelloIcon} from "../../images/about/languages/trello-icon.svg";
import {ReactComponent as jiraIcon} from "../../images/about/languages/jira-icon.svg";
import {ReactComponent as perforceIcon} from "../../images/about/languages/perforce-icon.svg";
import {ReactComponent as gitIcon} from "../../images/about/languages/git-icon.svg";
import {ReactComponent as jenkinsIcon} from "../../images/about/languages/jenkins-icon.svg";
import {ReactComponent as visualStudioIcon} from "../../images/about/languages/visualstudio-icon.svg";
import {ReactComponent as phpStormIcon} from "../../images/about/languages/phpstorm-icon.svg";
import {ReactComponent as autodesk3DSMaxIcon} from "../../images/about/languages/3dsmax-icon.svg";
import {ReactComponent as photoshopIcon} from "../../images/about/languages/photoshop-icon.svg";

import "./AboutPageContent.scss"

function ExperienceIcon(props) {
    const Src = props.src;
    return (
        <div className="col col-12 col-md-6 col-lg-4 d-inline-block mt-4 skills-icon align-top">
            {typeof props.src === 'string' ?
                (<img src={props.src} alt={props.text} />) : <Src />
            }
            <div className="text-center">{props.text}</div>
        </div>
    );
}

export default class AboutContent extends React.Component {
    render() {
        return (
            <ContentContainer id="about-page" className="responsive-text-size px-3"
                              contentTitle={<span>About <strong>Me</strong></span>}>

                <img src={profilepicture} alt="Wouter Grutter"
                     className="float-left mr-5 mb-3 d-none d-md-inline-block profile-picture"/>

                <div>
                    <b>Hey there</b> and welcome to my portfolio! I'm <i>Wouter Grutter</i> and I am a software developer, focusing on games.<br/>
                    I am currently studying Game Programming at
                    <a href="https://www.buas.nl/opleidingen/creative-media-and-game-technologies" target="_blank" rel="noopener noreferrer">Breda University of Applied Sciences</a>,
                    formerly known as NHTV.<br/>
                    I have previously graduated from ROCA12 with a Game Programmer degree.
                </div>
                <div className="mt-2">
                    I am currently based in Breda, the Netherlands but am able to relocate.
                </div>
                <div className="mt-3">
                    As most in this field do, I love video games and movies which take a significant amount of my free time.<br/>

                    I'm a huge enthusiast when it comes to game development and enjoy solving all kinds of problems through code.<br/>
                    I work on <Link to="personal-projects-page" href="" smooth={true} offset={-40} duration={500}>personal projects</Link>
                    in my spare time and am always interested and eager to learn and use new technologies.<br/>
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
                                <MDBCardText className="container ">
                                    <ExperienceIcon src={cPlusPlusIcon} text="C++" />
                                    <ExperienceIcon src={cIcon} text="C" />
                                    <ExperienceIcon src={cSharpIcon} text="C#" />
                                    <ExperienceIcon src={pythonIcon} text="Python" />

                                    <ExperienceIcon src={javascriptIcon} text="Javascript" />
                                    <ExperienceIcon src={reactIcon} text="React" />
                                    <ExperienceIcon src={webGLIcon} text="WebGL" />
                                    <ExperienceIcon src={htmlIcon} text="HTML" />
                                    <ExperienceIcon src={cssIcon} text="CSS" />
                                    <ExperienceIcon src={phpIcon} text="PHP" />
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="middle-card">
                            <MDBCardBody>
                                <MDBCardTitle tag="h5" className="text-center">Production and QA</MDBCardTitle>
                                <MDBCardText>
                                    <ExperienceIcon src={trelloIcon} text="Trello" />
                                    <ExperienceIcon src={jiraIcon} text="Jira" />

                                    <ExperienceIcon src={perforceIcon} text="Perforce" />
                                    <ExperienceIcon src={gitIcon} text="Git / Github" />
                                    <ExperienceIcon src={jenkinsIcon} text="Jenkins" />
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle tag="h5" className="text-center">Tools</MDBCardTitle>
                                <MDBCardText>
                                    <ExperienceIcon src={unrealEngineIcon} text="Unreal Engine 4" />
                                    <ExperienceIcon src={unity3DIcon} text="Unity3D" />

                                    <ExperienceIcon src={visualStudioIcon} text="Visual Studio" />
                                    <ExperienceIcon src={phpStormIcon} text="PhpStorm" />
                                    <ExperienceIcon src={autodesk3DSMaxIcon} text="3ds Max" />
                                    <ExperienceIcon src={photoshopIcon} text="Photoshop" />
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCardGroup>
                </MDBContainer>

            </ContentContainer>
        );
    }
}