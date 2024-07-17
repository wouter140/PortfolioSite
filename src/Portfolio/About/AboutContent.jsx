import React from 'react';
import ContentContainer from "../../components/ContentContainer";

import {Link} from "react-scroll";
import {MDBCard, MDBCardBody, MDBCardGroup, MDBCardTitle, MDBContainer} from "mdbreact";
import Tooltip from "@material-ui/core/Tooltip";

import profilepicture from "../../images/profilepicture.jpg";

import cPlusPlusIcon from "../../images/about/languages/c++-icon.svg?react";
import cIcon from "../../images/about/languages/c-icon.svg?react";
import cSharpIcon from "../../images/about/languages/c-sharp-icon.svg?react";
import pythonIcon from "../../images/about/languages/python-icon.svg?react";
import javascriptIcon from "../../images/about/languages/javascript-icon.svg?react";
import unity3DIcon from "../../images/about/languages/unity3d-icon.svg?react";
import unrealEngineIcon from "../../images/about/languages/unrealengine4-icon.svg?react";
import jiraIcon from "../../images/about/languages/jira-icon.svg?react";
import perforceIcon from "../../images/about/languages/perforce-icon.svg?react";
import visualStudioIcon from "../../images/about/languages/visualstudio-icon.svg?react";

import "./AboutPageContent.scss"


function ExperienceIcon(props) {
    const Src = props.src;
    return (
        <div className="col col-12 col-md-6 col-xl-4 d-inline-block mt-4 skills-icon align-top">
            <Tooltip title={props.text} aria-label={props.text} placement="top">
                {typeof props.src === 'string' ? (
                    <img src={props.src} alt={props.text} />
                ) : (
                    <Src />
                ) }
            </Tooltip>
            <div className="text-center">{props.text}</div>
        </div>
    );
}

export default class AboutContent extends React.Component {
    render() {
        return (
            <ContentContainer id="about-page" className="responsive-text-size px-3"
                              contentTitle={<span>About <strong>Me</strong></span>}>

                <MDBContainer>
                    <img src={profilepicture} alt="Wouter Grutter"
                         className="float-left mb-3 d-none d-md-inline-block profile-picture"/>

                    <div>
                        <b>Hey there</b> and welcome to my portfolio! I'm <i>Wouter Grutter</i>, an experienced software engineer working on AAA games with experience in
                        cross-platform and online systems. Passionate about game development,
                        always eager to learn and innovate. I thrive in dynamic team
                        environments, collaborating to create amazing games.
                    </div>

                    <div className="mt-3">
                        I'm a huge enthusiast when it comes to game development and enjoy solving all kinds of problems through code.
                        I work on <Link to="personal-projects-page" href="" smooth={true} offset={-40} duration={500}>personal projects</Link> in my spare time and am always interested and eager to learn and use new technologies.<br/>
                    </div>
                    <div className="mt-1">
                        I am a team-player, serious at my work and always looking to improve.
                    </div>

                    <div className="mt-3">
                        I am currently employed at Hangar 13 Games where I work on TopSpin 2K25. I worked as a systems engineer in the platform and online teams. I
                        focussed on PlayStation as the platform owner, online gameplay and server support
                        </div>
                    <div className="mt-1">
                        Some of my work can be found in the <Link to="professional-projects-page" href="" smooth={true} offset={-40} duration={500}>professional projects</Link> section below with more details.
                    </div>
                </MDBContainer>

                {/*Striped background?*/}
                <MDBContainer className="mt-5 skills-container">
                    <MDBCardGroup>
                        <MDBCard className="z-index-1">
                            <MDBCardBody>
                                <MDBCardTitle tag="h5" className="text-center">Languages</MDBCardTitle>
                                <div className="container d-flex justify-content-center flex-wrap">
                                    <ExperienceIcon src={cPlusPlusIcon} text="C++" />
                                    <ExperienceIcon src={cIcon} text="C" />
                                    <ExperienceIcon src={cSharpIcon} text="C#" />
                                    <ExperienceIcon src={pythonIcon} text="Python" />

                                    <ExperienceIcon src={javascriptIcon} text="JavaScript" />
                                    {/*<ExperienceIcon src={reactIcon} text="React" />*/}
                                    {/*<ExperienceIcon src={webGLIcon} text="WebGL" />*/}
                                    {/*<ExperienceIcon src={htmlIcon} text="HTML" />*/}
                                    {/*<ExperienceIcon src={cssIcon} text="CSS" />*/}
                                    {/*<ExperienceIcon src={phpIcon} text="PHP" />*/}
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="middle-card">
                            <MDBCardBody>
                                <MDBCardTitle tag="h5" className="text-center">Tools</MDBCardTitle>
                                <div className="d-flex justify-content-center flex-wrap">
                                    <ExperienceIcon src={jiraIcon} text="Jira" />
                                    <ExperienceIcon src={perforceIcon} text="Perforce" />
                                    <ExperienceIcon src={visualStudioIcon} text="Visual Studio" />

                                    <ExperienceIcon src={unrealEngineIcon} text="Unreal Engine 4" />
                                    <ExperienceIcon src={unity3DIcon} text="Unity3D" />
                                    {/*<ExperienceIcon src={gitIcon} text="Git / GitHub" />*/}
                                    {/*<ExperienceIcon src={jenkinsIcon} text="Jenkins" />*/}
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                        {/*<MDBCard>*/}
                        {/*    <MDBCardBody>*/}
                        {/*        <MDBCardTitle tag="h5" className="text-center">Tools</MDBCardTitle>*/}
                        {/*        <div className="d-flex justify-content-center flex-wrap">*/}
                        {/*            <ExperienceIcon src={unrealEngineIcon} text="Unreal Engine 4" />*/}
                        {/*            <ExperienceIcon src={unity3DIcon} text="Unity3D" />*/}

                        {/*            <ExperienceIcon src={visualStudioIcon} text="Visual Studio" />*/}
                        {/*            <ExperienceIcon src={phpStormIcon} text="PhpStorm" />*/}
                        {/*            /!*<ExperienceIcon src={autodesk3DSMaxIcon} text="3ds Max" />*!/*/}
                        {/*            /!*<ExperienceIcon src={photoshopIcon} text="Photoshop" />*!/*/}
                        {/*        </div>*/}
                        {/*    </MDBCardBody>*/}
                        {/*</MDBCard>*/}
                    </MDBCardGroup>
                </MDBContainer>

            </ContentContainer>
        );
    }
}