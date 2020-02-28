import * as React from "react";

import image from "../../images/projects/pinball-bash/main-face.png";

import ProjectPage from "../components/ProjectPage";

import video from "../../content/videos/pinball-bash/pinball-bash-trailer.mp4";
import {ProjectInfoTable} from "../components/InfoTables";

export default function PinballBashProject(props) {
    return (
        <ProjectPage
            title="Pinball Bash"
            imageURL={image}
            // videoID="yu0j4dBDjCA"
            videoSource={[
                {src: video, type: "video/mp4"}
            ]}
        >
            Pinball Bash is a 4 player co-op game based on bomberman.<br/>
            In Pinball Bash you try to defeat the others by having deadly pin balls hit them.
            You can deflect these by making walls come up from the floor.

            <ProjectInfoTable
                engine="Unreal Engine 4"
                developmentTime="8 Weeks"
                teamSize="9 People (2 Programmer, 2 Designers and 5 Artists)"
                roles="Gameplay Programmer"
                languages="Unreal Blueprints"
                targetPlatforms="PC"
            />

            <h4 className="text-white primary-color p-3">My Work</h4>

            <h5 className="mt-4 font-weight-normal">The Pinball</h5>
            <p className="mb-2">

            </p>

        </ProjectPage>
    )
}