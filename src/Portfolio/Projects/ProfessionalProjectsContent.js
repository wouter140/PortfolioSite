import React from 'react';

import {MDBBtn, MDBCol, MDBIcon} from "mdbreact";

import ContentContainer from "../../components/ContentContainer";
import ProjectCard from "./components/ProjectCard";

import "./ProjectsContent.scss";
import "./ProjectSpecific.scss";

import testImage from '../../images/img (118).jpg';

import bitBusterImage from "../../images/projects/bit-buster/main-face.png";

export default class ProfessionalProjectsContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expandProjects: false
        }
    }

    render() {
        let containerClasses = "projects responsive-text-size";
        if(this.state.expandProjects)
            containerClasses += " expanded";

        return (
            <ContentContainer id="professional-projects-page" className={ containerClasses }
                    contentTitle={ (
                        <React.Fragment>
                            <span>Professional <strong>Projects</strong></span>
                        </React.Fragment>
                    ) }
            >

                <div className="d-flex flex-wrap justify-content-start container">

                    <MDBCol lg="6" className="animated fadeIn">
                        <ProjectCard src={ testImage } alt="" title="P.A.I.N.T."
                                     location="/Paint"
                                     badges={[
                                         {name: 'Engine', content: 'Unreal Engine 4', title: "Engine"},
                                         {name: 'Languages', content: 'C++ & Python', title: "Used Languages"},
                                         {name: 'Platforms', content: 'PC & PS4', title: "Target Platforms"},
                                         {name: 'Team Size', content: '25 Person Team', title: "Project Team Size"},
                                         {name: 'Duration', content: '40 Weeks', title: "Project Duration"}
                                     ]}
                        >
                            This project is currently in development.<br/>
                            More will come soon!
                        </ProjectCard>
                    </MDBCol>

                    <MDBCol lg="6" className="animated fadeIn">
                        <ProjectCard src={ bitBusterImage } alt="Bit-Buster Project" title="Bit-Buster" className="bit-buster"
                                     location="/Bit-Buster"
                                     badges={[
                                         {name: 'Engine', content: 'Custom Engine'},
                                         {name: 'Languages', content: 'C++'},
                                         {name: 'Platforms', content: 'PC'},
                                         {name: 'Team Size', content: '25 Person Team'},
                                         {name: 'Duration', content: '8 Weeks'}
                                     ]}
                        >
                            Bit-buster is a local multiplayer co-op game, in which you have to pass a disk around to kill all the evil spirits.
                            The entire game is made out of voxels to allow for mayhem and destruction of the enemies and the level!
                            The voxels also have physics support to allow for partial voxel objects to fall and break for example.<br/>
                        </ProjectCard>
                    </MDBCol>

                    <MDBCol md="6" xl="4" className="animated fadeIn">
                        <ProjectCard src={ testImage } alt="" title="Testing Title"
                                     location="/TestProject"
                                     badges={[{name: 'Languages', content: 'Primary'}, {name: 'Engine', content: 'Secondary'}, {name: 'Platforms', content: 'Danger'}]}
                        >
                            Some super duper amazing card text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                            In enim justo, rhoncus ut
                        </ProjectCard>
                    </MDBCol>

                    <MDBCol md="6" xl="4" className="animated fadeIn">
                        <ProjectCard src={ testImage } alt="" title="Testing Title"
                                     location="/TestProject"
                                     badges={[{name: 'Languages', content: 'Primary'}, {name: 'Engine', content: 'Secondary'}, {name: 'Platforms', content: 'Danger'}]}
                        >
                            Some super duper amazing card text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                            In enim justo, rhoncus ut
                        </ProjectCard>
                    </MDBCol>

                    <MDBCol md="6" xl="4" className="extra-project-md">
                        <ProjectCard src={ testImage } alt="" title="Testing Title"
                                     location="/TestProject"
                                     badges={[{name: 'Languages', content: 'Primary'}, {name: 'Engine', content: 'Secondary'}, {name: 'Platforms', content: 'Danger'}]}
                        >
                            Some super duper amazing card text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                            In enim justo, rhoncus ut
                        </ProjectCard>
                    </MDBCol>

                    <MDBCol md="6" xl="4" className="extra-project">
                        <ProjectCard src={ testImage } alt="" title="Testing Title"
                                     location="/TestProject"
                                     badges={[{name: 'Languages', content: 'Primary'}, {name: 'Engine', content: 'Secondary'}, {name: 'Platforms', content: 'Danger'}]}
                        >
                            Some super duper amazing card text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                            In enim justo, rhoncus ut
                        </ProjectCard>
                    </MDBCol>

                    <MDBCol md="6" xl="4" className="extra-project">
                        <ProjectCard src={ testImage } alt="" title="Testing Title"
                                     location="/TestProject"
                                     badges={[{name: 'Languages', content: 'Primary'}, {name: 'Engine', content: 'Secondary'}, {name: 'Platforms', content: 'Danger'}]}
                        >
                            Some super duper amazing card text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                            In enim justo, rhoncus ut
                        </ProjectCard>
                    </MDBCol>

                    <MDBCol md="6" xl="4" className="extra-project">
                        <ProjectCard src={ testImage } alt="" title="Testing Title"
                                     location="/TestProject"
                                     badges={[{name: 'Languages', content: 'Primary'}, {name: 'Engine', content: 'Secondary'}, {name: 'Platforms', content: 'Danger'}]}
                        >
                            Some super duper amazing card text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                            In enim justo, rhoncus ut
                        </ProjectCard>
                    </MDBCol>

                    <MDBCol className="d-flex flex-center">
                        <MDBBtn color="indigo" className="m-0 expand-projects-btn"
                                onClick={ () => this.setState((state) => { return {expandProjects: !state.expandProjects} }) }
                        >
                            { this.state.expandProjects ? (
                                <span>Hide extra</span>
                            ) : (
                                <span>Show More</span>
                            )}
                            <MDBIcon icon="angle-down ml-2" />
                        </MDBBtn>
                    </MDBCol>

                </div>

            </ContentContainer>
        );
    }
}