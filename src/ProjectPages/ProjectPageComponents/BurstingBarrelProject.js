import React from "react";

import ProjectPage from "../components/ProjectPage";
import {ProjectInfoTable} from "../components/InfoTables";
import ProjectStartLayout from "../components/ProjectStartLayout";
import {ContributionHighlights} from "../components/ContributionHighlights";
import {WorkItemWithCarousel} from "../components/WorkItem";

import image from "../../content/bursting-barrel/images/main-face.png";
import brandImage from "../../content/bursting-barrel/images/main-face-brand.png";
import video from "../../content/bursting-barrel/videos/bursting-barrel-trailer.mp4";

import controllerDiagram from "../../content/bursting-barrel/images/diagram.png";
import controllerInside from "../../content/bursting-barrel/images/controller-inside.png";
import controllerOutside from "../../content/bursting-barrel/images/controller-outside.png";

export default function BurstingBarrelProject() {
    return (
        <ProjectPage
            title="Bursting Barrel"
            imageURL={image}
            brandImageURL={brandImage}
            brandClassName="bursting-barrel-brand"
            videoSource={[
                {src: video, type: "video/mp4"}
            ]}
        >
            Bursting barrel is a party game where the goal is to stop the barrel from leaking and the octopus from
            escaping by using the physical, keg shaped custom controller, to plug all the holes and force the octopus
            back into the barrel.

            <ProjectStartLayout>
                <ContributionHighlights>
                    <li>Custom controller</li>
                    <li>Custom controller programming.</li>
                    <li>Gameplay implementation.</li>
                    <li>HUD implementation</li>
                </ContributionHighlights>

                <ProjectInfoTable
                    engine="Unreal Engine 4"
                    developmentTime="2.5 Weeks"
                    teamSize="9 People (2 Programmer, 2 Designers, 4 Artists and a Producer)"
                    roles="Gameplay and Tools programmer & hardware developer"
                    languages="C and Blueprints"
                    targetPlatforms="PC"
                />
            </ProjectStartLayout>

            <h4 className="text-white primary-color mt-5 p-3">My Work</h4>
            <WorkItemWithCarousel
                title="Custom Controller"
                sources={[
                    controllerInside,
                    controllerDiagram,
                    controllerOutside
                ]}
            >
                <p>
                    One of the tasks I worked on in this project was the creation of our custom controller.
                </p>
                <p>
                    The gameplay we designed required to have buttons around a barrel, in our case a simple trash can. I
                    attached every button on the controller and soldered everything together according to the electronic
                    design I made. With the limitations of the controller board, the TeencyLC, I hooked the buttons and
                    gyro sensors up according to our design diagram so the programming could be worked on at the same
                    time.
                </p>
                <p>
                    For the gameplay, I also implemented the controller calibration since we require the controller to
                    be in a specific rotation for the gameplay to make sense.
                </p>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                title="Custom Controller Programming"
                carouselBefore
                sources={[
                    controllerOutside,
                    video
                ]}
            >
                <p>
                    Next to the creation of the controller, I worked together with the other programmer to program the
                    connection flow from the controller board to the PC. <br/>
                    I also developed the receiving-end connection in our game engine to understand and use the
                    controllers' data in the game.
                </p>
            </WorkItemWithCarousel>

        </ProjectPage>
    )
}