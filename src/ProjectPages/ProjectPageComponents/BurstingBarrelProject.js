import React from "react";

import ProjectPage from "../components/ProjectPage";
import {ProjectInfoTable} from "../components/InfoTables";

import image from "../../content/bursting-barrel/images/main-face.png";
import brandImage from "../../content/bursting-barrel/images/main-face-brand.png";
import video from "../../content/bursting-barrel/videos/bursting-barrel-trailer.mp4";

export default function BurstingBarrelProject(props) {
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

            <ProjectInfoTable
                engine="Unreal Engine 4"
                developmentTime="2.5 Weeks"
                teamSize="9 People (2 Programmer, 2 Designers, 4 Artists and a Producer)"
                roles="Gameplay and Tools programmer & hardware developer"
                languages="C and Blueprints"
                targetPlatforms="PC"
            />

            <h4 className="text-white primary-color p-3">My Work</h4>

            <h5 className="mt-4 font-weight-normal">Custom Controller</h5>
            <p className="mb-2">

            </p>

        </ProjectPage>
    )
}