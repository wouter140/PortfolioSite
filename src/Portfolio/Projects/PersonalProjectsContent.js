import React from 'react';

import ContentContainer from "../../components/ContentContainer";

import "./ProjectsContent.scss";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import ProjectCard from "./components/ProjectCard";

export default class PersonalProjectsContent extends React.Component {
    render() {
        return (
            <ContentContainer id="personal-projects-page" className="projects responsive-text-size"
                              contentTitle="Personal Projects" >

                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6" xl="4">
                            <ProjectCard imgAlt=""
                                         title="Testing Title">
                                Some super duper amazing card text.

                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut
                            </ProjectCard>
                        </MDBCol>

                        <MDBCol md="6" xl="4">
                            <ProjectCard imgAlt=""
                                         title="Testing Title">
                                Some super duper amazing card text.

                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut
                            </ProjectCard>
                        </MDBCol>

                        <MDBCol md="8" xl="4" style={{margin: "0 auto"}}>
                            <ProjectCard imgAlt=""
                                         title="Testing Title">
                                Some super duper amazing card text.

                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut
                            </ProjectCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </ContentContainer>
        );
    }
}