import React from "react";

import ProjectPage from "../components/ProjectPage";
import {ProjectInfoTable} from "../components/InfoTables";
import ProjectStartLayout from "../components/ProjectStartLayout";
import {ContributionHighlights} from "../components/ContributionHighlights";
import {WorkItemWithCarousel} from "../components/WorkItem";

import image from "../../content/bursting-barrel/images/main-face.png";
import brandImage from "../../content/bursting-barrel/images/main-face-brand.png";
import video from "../../content/bursting-barrel/videos/bursting-barrel-trailer.mp4";

export default function BurstingBarrelProject() {
    return (
        <ProjectPage
            title="Bursting Barrel"
            imageURL={image}
            brandImageURL={brandImage}
            brandClassName="bursting-barrel-brand"
            // videoID="U-mC90Tu5SM"
            videoSource={[
                {src: video, type: "video/mp4"}
            ]}
        >
            Bursting barrel is a party game where the goal is to stop the barrel from leaking and the octopus from escaping by using the physical, keg shaped custom controller.

            <ProjectStartLayout>
                <ContributionHighlights>
                    <li>Custom Controller</li>
                    <li>Custom Controller Programming.</li>
                    <li>Gameplay implementation.</li>
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
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg",
                ]}
            >
                <p>
                    One of the tasks I worked on in this project was the creation of our custom controller.
                </p>
                <p>
                    The gameplay we designed required to have buttons around a barrel, in our case a trash can. I
                    attached every button on the controller and soldered everything together according to the electronic
                    design I made beforehand. With the limitations of the TeencyLC, which is our controller board, I
                    hooked the buttons and gyro sensors up.
                </p>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                title="Custom Controller Programming"
                carouselBefore
                sources={[
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg",
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
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