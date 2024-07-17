import React from "react";

import ProjectPage from "../components/ProjectPage";
import {ProjectInfoTable} from "../components/InfoTables";

import image from "../../content/cook-dont-look/images/background.png";
import brandImage from "../../content/cook-dont-look/images/main-face-brand.png";
import video from "../../content/cook-dont-look/videos/cook-dont-look-trailer.mp4";
import {ContributionHighlights} from "../components/ContributionHighlights";
import ProjectStartLayout from "../components/ProjectStartLayout";

export default function CookDontLookProject(props) {
    return (
        <ProjectPage
            title="Cook Don't Look"
            imageURL={image}
            brandImageURL={brandImage}
            brandClassName="cook-dont-look-brand"
            // videoID="U-mC90Tu5SM"
            videoSource={[
                {src: video, type: "video/mp4"}
            ]}
        >
            Cook Don't Look is Gear VR game where the player has to prepare food and make it perfect quality. To cook the food you look away from it, but have to make sure it does not overcook!

            <ProjectStartLayout>
                <ContributionHighlights>
                    <li>GearVR integration</li>
                    <li>Gameplay</li>
                </ContributionHighlights>

                <ProjectInfoTable
                    engine="Unity3D"
                    developmentTime="2 Weeks"
                    teamSize="9 People (2 Programmer, 2 Designers, 4 Artists and a Producer)"
                    roles="Gameplay programmer"
                    languages="C#"
                    targetPlatforms="Gear VR"
                />
            </ProjectStartLayout>


            <h4 className="text-white primary-color p-3">My Work</h4>

            <h5 className="mt-4 font-weight-normal">Gear VR</h5>
            <p className="mb-2">

            </p>

        </ProjectPage>
    )
}