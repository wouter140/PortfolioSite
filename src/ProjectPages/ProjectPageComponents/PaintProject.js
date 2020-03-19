import * as React from "react";

import image from "../../content/paint/images/main_face.png";

import ProjectPage from "../components/ProjectPage";

// import video from "../../content/videos/bit-buster/bit-buster-trailer.mp4";
import {ProjectInfoTable} from "../components/InfoTables";

export default function PaintProject(props) {
    return (
        <ProjectPage
            title="P.A.I.N.T."
            imageURL={image}
            // videoID="U-mC90Tu5SM"
            // videoSource={[
            //     {src: video, type: "video/mp4"}
            // ]}
        >
            P.A.I.N.T. is a comedic, paintball inspired, shooter where you defeat the evil corporations that are trying to suppress color.

            <ProjectInfoTable
                engine="Unreal Engine 4"
                developmentTime="40 Weeks"
                teamSize="25 People (5 Programmer, 9 Designers, 7 Artists and a Producer)"
                roles="Scrum Master, Engine Programmer, Tools Programmer and Gameplay Programmer"
                languages="C++, Blueprints & Python"
                targetPlatforms="PC (Steam) and PS4"
                release={(
                    "Preparation for release on Steam"
                )}
            />

            <h4 className="text-white primary-color p-3">My Work</h4>

            <h5 className="mt-4 font-weight-normal">Scrum Master</h5>
            <p className="mb-2">
                As a scrum master, I managed a multidisciplinary feature team.
            </p>

            <h5 className="mt-4 font-weight-normal">Dynamic Split-Screen</h5>
            <p>

            </p>

            <h5 className="mt-4 font-weight-normal">Input Detection to add players</h5>
            <p>

            </p>

        </ProjectPage>
    )
}