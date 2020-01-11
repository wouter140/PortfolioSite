import * as React from "react";

import ProjectPage from "../components/ProjectPage";
import {ProjectInfoTable} from "../components/InfoTables";

import image from "../../images/projects/bit-buster/main-face.png";
import video from "../../content/videos/bit-buster/bit-buster-trailer.mp4";

export default function BitBusterProject(props) {
    return (
        <ProjectPage
            title="Bit-Buster"
            imageURL={image}
            // videoID="U-mC90Tu5SM"
            videoSource={[
                {src: video, type: "video/mp4"}
            ]}
        >
            Bit-Buster is a cooperative 2-player (with singleplayer option) shooter where both players share a single projectile to defeat the enemies and complete the objective.<br/>
            In Bit-Buster you get thrown into a steampunk-inspired japan, that got overrun by yokai - japanese spirits. By passing a deadly disk between each other, you can blaze through any enemy or obstacle that shows up in your way.<br/>
            The levels are highly destructible and built completely out of voxels to allow for complete mayhem and destruction of the levels and enemies. This, together with physics, makes for dynamic gameplay where every action in the game impacts the world in a unique way.

            <ProjectInfoTable
                  engine="Custom C++ Voxel Engine (Voxagen)"
                  developmentTime="8 Weeks"
                  teamSize="25 People (9 Programmer, 9 Designers, 7 Artists and a Producer)"
                  roles="Engine Programmer, UI Programmer, Tools Programmer"
                  languages="C++"
                  targetPlatforms="PC (Itch.io)"
                  release={(
                      <a href="https://igad.itch.io/bitbuster" target="_blank" rel="noopener noreferrer">Released on Itch.io</a>
                  )}
            />

            <h4 className="text-white primary-color p-3">My Work</h4>



        </ProjectPage>
    )
}