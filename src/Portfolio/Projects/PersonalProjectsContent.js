import React from 'react';

import {MDBBtn, MDBCol, MDBIcon} from "mdbreact";

import ContentContainer from "../../components/ContentContainer";
import ProjectCard from "./components/ProjectCard";

import "./ProjectsContent.scss";
import "./ProjectSpecific.scss";

import burstingBarrelImage from "../../content/bursting-barrel/images/main-face.png";
import discordPresenceImage from "../../content/discord-presence-plugin/images/main-face.png";
import cookDontLookImage from "../../content/cook-dont-look/images/main-face.jpg";

export default class PersonalProjectsContent extends React.Component {

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
            <ContentContainer id="personal-projects-page" className={ containerClasses }
                    contentTitle={ (
                        <React.Fragment>
                            <span>Side <strong>Projects</strong></span>
                        </React.Fragment>
                    ) }
            >

                <div className="d-flex flex-wrap justify-content-start container">
                    <MDBCol md="6" xl="4" className="animated fadeIn">
                        <ProjectCard src={ discordPresenceImage } alt="Discord Rich Presence Unreal Plugin" title="Discord Rich Presence Plugin"
                                     location="/DiscordPresencePlugin"
                                     badges={[
                                         {name: 'Engine', content: 'Unreal Engine 4'},
                                         {name: 'Languages', content: 'C++ & Blueprints'},
                                         {name: 'Platforms', content: 'PC with Discord'}
                                     ]}
                                     inProgress
                        >
                            I developed a plugin to integrate Discord rich presence into any Unreal project.
                            With this plugin it is simple to update the current game presence for the current user.
                        </ProjectCard>
                    </MDBCol>


                    <MDBCol md="6" xl="4" className="animated fadeIn">
                        <ProjectCard src={ burstingBarrelImage } alt="Bursting Barrel Project" title="Bursting Barrel"
                                     location="/BurstingBarrel"
                                     badges={[
                                         {name: 'Engine', content: 'Unreal Engine 4'},
                                         {name: 'Languages', content: 'C & Blueprints'},
                                         {name: 'Platforms', content: 'PC'},
                                         {name: 'Team Size', content: '9 Person Team'},
                                         {name: 'Duration', content: '2.5 Weeks'}
                                     ]}
                        >
                            Bursting barrel is a party game where the goal is to stop the barrel from leaking and the octopus from escaping by using the physical, keg shaped custom controller.
                        </ProjectCard>
                    </MDBCol>

                    {/*<MDBCol md="6" xl="4" className="extra-project-md">*/}
                    {/*    <ProjectCard src={ cookDontLookImage } alt="Cook Don't Look Project" title="Cook Don't Look"*/}
                    {/*                 location="/CookDontLook"*/}
                    {/*                 badges={[*/}
                    {/*                     {name: 'Engine', content: 'Unity3D'},*/}
                    {/*                     {name: 'Languages', content: 'C#'},*/}
                    {/*                     {name: 'Platforms', content: 'Gear VR'},*/}
                    {/*                     {name: 'Team Size', content: '9 Person Team'},*/}
                    {/*                     {name: 'Duration', content: '2 Weeks'}*/}
                    {/*                 ]}*/}
                    {/*    >*/}
                    {/*        Cook Don't Look is Gear VR game where the player has to prepare food and make it perfect quality. To cook the food you look away from it, but have to make sure it does not overcook!*/}
                    {/*    </ProjectCard>*/}
                    {/*</MDBCol>*/}

                    {/*<MDBCol md="6" xl="8" className="extra-project">*/}
                    {/*</MDBCol>*/}

                    {/*<MDBCol md="6" xl="4" className="extra-project-md">*/}
                    {/*    <ProjectCard src={ rocketRampageImage } alt="Rocket Rampage Project" title="Rocket Rampage"*/}
                    {/*                 location="/RocketRampage"*/}
                    {/*                 badges={[*/}
                    {/*                     {name: 'Engine', content: 'Unreal Engine 4'},*/}
                    {/*                     {name: 'Languages', content: 'Blueprints'},*/}
                    {/*                     {name: 'Platforms', content: 'PC'},*/}
                    {/*                     {name: 'Team Size', content: '9 Person Team'},*/}
                    {/*                     {name: 'Duration', content: '2 Weeks'}*/}
                    {/*                 ]}*/}
                    {/*    >*/}
                    {/*        Rocket Rampage is a game where your try to survive to Mars.*/}
                    {/*        You have to manage your resources inside the space ship, react to incoming threads and survive until you reach Mars!*/}
                    {/*    </ProjectCard>*/}
                    {/*</MDBCol>*/}

                    {/*<MDBCol className="d-xl-none d-flex flex-center">*/}
                    {/*    <MDBBtn color="indigo" className="m-0 expand-projects-btn"*/}
                    {/*            onClick={ () => this.setState((state) => { return {expandProjects: !state.expandProjects} }) }*/}
                    {/*    >*/}
                    {/*        { this.state.expandProjects ? (*/}
                    {/*            <span>Hide extra</span>*/}
                    {/*        ) : (*/}
                    {/*            <span>Show More</span>*/}
                    {/*        )}*/}
                    {/*        <MDBIcon icon="angle-down ml-2" />*/}
                    {/*    </MDBBtn>*/}
                    {/*</MDBCol>*/}

                </div>
            </ContentContainer>
        );
    }
}