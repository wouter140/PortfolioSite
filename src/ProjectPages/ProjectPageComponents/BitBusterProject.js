import * as React from "react";

import {MDBCol, MDBRow} from "mdbreact";

import ProjectPage from "../components/ProjectPage";
import {ProjectInfoTable} from "../components/InfoTables";
import {ContributionHighlights} from "../components/ContributionHighlights";
import {WorkItemWithCarousel} from "../components/WorkItem";

import image from "../../content/bit-buster/images/main-face.png";
import largeTrailer from "../../content/bit-buster/videos/BitBuster-Trailer.mp4";
import smallTrailer from "../../content/bit-buster/videos/BitBuster-Trailer-small.mp4";
import mainMenuVideo from "../../content/bit-buster/videos/BitBuster-MainMenu.mp4";
import splashScreenVideo from "../../content/bit-buster/videos/BitBuster-StartupLogos.mp4";
import sliderToolsVideo from "../../content/bit-buster/videos/BitBuster-SliderTools.mp4";
import uiOptionsExampleVideo from "../../content/bit-buster/videos/BitBuster-UIOptionsExample.mp4";
import controlsMenuImage from "../../content/bit-buster/images/BitBuster-ControlsMenu.png";
import ProjectStartLayout from "../components/ProjectStartLayout";

export default function BitBusterProject() {
    return (
        <ProjectPage
            title="Bit-Buster"
            imageURL={image}
            // videoID="U-mC90Tu5SM"
            videoSource={[
                {src: largeTrailer, type: "video/mp4"}
            ]}
            smallVideoSource={[
                {src: smallTrailer, type: "video/mp4"}
            ]}
        >
            Bit-Buster is a cooperative 2-player (with single-player option) shooter where both players share a single
            projectile to defeat the enemies and complete the objective.<br/>
            In Bit-Buster you get thrown into a steampunk-inspired Japan, that got overrun by yokai - Japanese spirits.
            By passing a deadly disk between each other, you can blaze through any enemy or obstacle that shows up in
            your way.<br/>
            The levels are highly destructible and built completely out of voxels to allow for complete mayhem and
            destruction of the levels and enemies. This, together with physics, makes for dynamic gameplay where every
            action in the game impacts the world in a unique way.

            <ProjectStartLayout>
                <ContributionHighlights>
                    <li>Designed & developed the entire UI systems in the custom C++ Engine.</li>
                    <li>Created in-engine tools for adding, controlling and editing UI elements, using my UI systems.</li>
                    <li>Implemented the designed in-game UI into our game.</li>
                    <li>Contributed to reviewing and fixing bugs from various parts of the engine and gameplay.</li>
                </ContributionHighlights>

                <ProjectInfoTable
                    engine="Custom C++ Voxel Engine (Voxagen)"
                    developmentTime="8 Weeks"
                    teamSize="25 People (9 Programmer, 9 Designers, 7 Artists and a Producer)"
                    roles="Engine Programmer, UI Programmer, Tools Programmer"
                    languages="C++"
                    targetPlatforms="PC (Itch.io)"
                    release={(
                        <a href="https://igad.itch.io/bitbuster" target="_blank" rel="noopener noreferrer"
                           style={{color: "#007bff"}}>
                            Released on Itch.io
                        </a>
                    )}
                />
            </ProjectStartLayout>

            <h4 className="text-white primary-color mt-5 p-3">My Work</h4>
            <WorkItemWithCarousel
                title="UI Systems"
                sources={[
                    uiOptionsExampleVideo,
                    mainMenuVideo,
                ]}
            >
                <p>
                    When I joined the Voxagen engine team we were missing UI systems in the engine.
                    I implemented these systems to allow us to add:
                </p>
                <ul>
                    <li>Text, with options for font and size.</li>
                    <li>Buttons, with callbacks for user interactions and controller navigation support.</li>
                    <li>Images.</li>
                    <li>Sliders, which doubles as a progress bar.
                        The slider has support for a controller to change the value and callbacks for when the
                        value has changed.
                    </li>
                </ul>
                <p>
                    For the buttons and sliders I implemented functionality for navigating through a menu, using a
                    keyboard or controller.
                </p>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                title="UI Tools"
                carouselBefore
                sources={[
                    sliderToolsVideo,
                    uiOptionsExampleVideo,
                ]}
            >
                <p>
                    Voxagen also has a custom build-in editor.
                    I developed the editor tools for adding, controlling and editing the UI systems inside the
                    editor.
                </p>
                <p>
                    My tools make sure to serialize the systems properly, using the existing serializer to save and
                    load the settings and values in the editor and for inside the game.
                </p>
                <p>
                    As with any tool that will is used by others, I worked with my team and UI designers to make
                    sure they were able to properly use my tools.
                    I made sure to explain how everything works, get feedback on the implementations, and iterate on
                    the systems to improve and polish the final version.
                </p>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                title="UI Implementation"
                sources={[
                    mainMenuVideo,
                    splashScreenVideo,
                    controlsMenuImage
                ]}
            >
                <p>
                    For Bit-Buster I partially implemented the UI into the game, using the systems I developed.
                    I worked on the functionality and implementations of the following UI elements and menu's:
                </p>
                <ul>
                    <li>Splash screen.</li>
                    <li>Main Menu, including character and level selection.</li>
                    <li>Controls Menu.</li>
                    <li>Loading Screens.</li>
                    <li>OnBoarding.</li>
                    <li>In Game UI.</li>
                    <li>Pause Menu.</li>
                </ul>
            </WorkItemWithCarousel>

        </ProjectPage>
    )
}