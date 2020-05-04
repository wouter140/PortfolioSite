import React from "react";

import ProjectPage from "../components/ProjectPage";
import {ProjectInfoTable} from "../components/InfoTables";

import image from "../../content/rocket-rampage/images/background.jpg";
import brandImage from "../../content/rocket-rampage/images/main-face-brand.png";
import video from "../../content/rocket-rampage/videos/trailer.mp4";
import {ContributionHighlights} from "../components/ContributionHighlights";
import ProjectStartLayout from "../components/ProjectStartLayout";

export default function RocketRampageProject(props) {
    return (
        <ProjectPage
            title="Rocket Rampage"
            imageURL={image}
            brandImageURL={brandImage}
            brandClassName="rocket-rampage-brand"
            // videoID="U-mC90Tu5SM"
            videoSource={[
                {src: video, type: "video/mp4"}
            ]}
        >
            Rocket Rampage is a game where your try to survive to Mars.
            You have to manage your resources inside the space ship, react to incoming threads and survive until you reach Mars!

            <ProjectStartLayout>
                <ContributionHighlights>

                </ContributionHighlights>

                <ProjectInfoTable
                    engine="Unreal Engine 4"
                    developmentTime="2 Weeks"
                    teamSize="9 People (2 Programmer, 2 Designers, 4 Artists and a Producer)"
                    roles="Gameplay programmer"
                    languages="Blueprints"
                    targetPlatforms="PC"
                />
            </ProjectStartLayout>


            <h4 className="text-white primary-color p-3">My Work</h4>

            <h5 className="mt-4 font-weight-normal">UI</h5>
            <p className="mb-2">

            </p>

        </ProjectPage>
    )
}