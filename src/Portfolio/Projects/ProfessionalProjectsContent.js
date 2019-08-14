import React from 'react';

import ContentContainer from "../../components/ContentContainer";
import ProjectCard from "./components/ProjectCard";

import "./ProjectsContent.scss";
import {MDBBtn, MDBCol, MDBCollapse, MDBContainer, MDBIcon, MDBRow} from "mdbreact";

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
                                      <span>Professional Projects</span>
                                      <MDBBtn size="sm" className="rounded-circle float-right m-0 expand-projects-btn"
                                              onClick={ () => this.setState((state) => { return {expandProjects: !state.expandProjects} }) }
                                      >
                                          <MDBIcon icon="angle-down" />
                                      </MDBBtn>
                                  </React.Fragment>
                              ) } >
                    <div className="d-flex flex-wrap justify-content-start">

                        <MDBCol lg="6" className="animated fadeIn">
                            <ProjectCard imgAlt=""
                                         title="Testing Title">
                                Some super duper amazing card text.

                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut
                            </ProjectCard>
                        </MDBCol>

                        <MDBCol lg="6" className="animated fadeIn">
                            <ProjectCard imgAlt=""
                                         title="Testing Title">
                                Some super duper amazing card text.

                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut
                            </ProjectCard>
                        </MDBCol>

                        <MDBCol md="6" xl="4" className="animated fadeIn">
                            <ProjectCard imgAlt=""
                                         title="Testing Title">
                                Some super duper amazing card text.

                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut
                            </ProjectCard>
                        </MDBCol>

                        <MDBCol md="6" xl="4" className="animated fadeIn">
                            <ProjectCard imgAlt=""
                                         title="Testing Title">
                                Some super duper amazing card text.

                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut
                            </ProjectCard>
                        </MDBCol>

                        <MDBCol md="6" xl="4" className="extra-project-md">
                            <ProjectCard imgAlt=""
                                         title="Testing Title">
                                Some super duper amazing card text.

                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut
                            </ProjectCard>
                        </MDBCol>

                        <MDBCol md="6" xl="4" className="extra-project">
                            <ProjectCard imgAlt=""
                                         title="Testing Title">
                                Some super duper amazing card text.

                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut
                            </ProjectCard>
                        </MDBCol>

                        <MDBCol md="6" xl="4" className="extra-project">
                            <ProjectCard imgAlt=""
                                         title="Testing Title">
                                Some super duper amazing card text.

                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut
                            </ProjectCard>
                        </MDBCol>

                        <MDBCol md="6" xl="4" className="extra-project">
                            <ProjectCard imgAlt=""
                                         title="Testing Title">
                                Some super duper amazing card text.

                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut
                            </ProjectCard>
                        </MDBCol>

                    </div>

            </ContentContainer>
        );
    }
}