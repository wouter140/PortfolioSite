import * as React from "react";

import ProjectPage from "../components/ProjectPage";
import {ProjectInfoTable} from "../components/InfoTables";

import image from "../../content/bit-buster/images/main-face.png";
import video from "../../content/bit-buster/videos/bit-buster-trailer.mp4";

export default function BitBusterProject() {
    return (
        <ProjectPage
            title="Bit-Buster"
            imageURL={image}
            // videoID="U-mC90Tu5SM"
            videoSource={[
                {src: video, type: "video/mp4"}
            ]}
        >
            Bit-Buster is a cooperative 2-player (with single-player option) shooter where both players share a single projectile to defeat the enemies and complete the objective.<br/>
            In Bit-Buster you get thrown into a steampunk-inspired Japan, that got overrun by yokai - Japanese spirits. By passing a deadly disk between each other, you can blaze through any enemy or obstacle that shows up in your way.<br/>
            The levels are highly destructible and built completely out of voxels to allow for complete mayhem and destruction of the levels and enemies. This, together with physics, makes for dynamic gameplay where every action in the game impacts the world in a unique way.

            <ProjectInfoTable
                  engine="Custom C++ Voxel Engine (Voxagen)"
                  developmentTime="8 Weeks"
                  teamSize="25 People (9 Programmer, 9 Designers, 7 Artists and a Producer)"
                  roles="Engine Programmer, UI Programmer, Tools Programmer"
                  languages="C++"
                  targetPlatforms="PC (Itch.io)"
                  release={(
                      <a href="https://igad.itch.io/bitbuster" target="_blank" rel="noopener noreferrer" style={{color: "#007bff"}}>
                          Released on Itch.io
                      </a>
                  )}
            />

            <h4 className="text-white primary-color p-3">My Work</h4>

            <h5 className="mt-4 font-weight-normal">UI Engine System</h5>
            <p className="mb-2">
                In Bit-Buster, I created the UI system inside the custom engine.
                When I joined the team, the custom engine was already quite far in development. However, it was lacking any in-game UI systems.
            </p>
            <p>
                For the UI system, I started creating the backbone that would handle all the input for the UI elements, focus and button presses.
                This system is called the canvas and should be the parent object in the game for all the other UI elements.
                I also implemented a base class that handles most UI element events and actions.
                All the final UI objects eventually inherit from the base UI element to be controlled in-game through the engine.
            </p>

            <h6 className="font-weight-normal">UI Text</h6>
            <p>
                One of the UI elements I created was text. As text is quite important in any game to communicate with the user, this was the first element I created.

            </p>

            <h6 className="font-weight-normal">UI Button</h6>
            <p>
                I also buildt the Button UI element. Buttons are next to text very important to have in any game to be able to have user interaction with menu's.
            </p>

            <h6 className="font-weight-normal">UI Slider</h6>
            <p>
                Another UI element I developed is a Slider. As we had planned to implement settings in our game, a slider would be very useful for settings like audio.
                To optimize the implementation time of the slider, I also made it possible to be a progress bar. These are used in-game in various places like the player HUD.
            </p>

            <h5 className="mt-4 font-weight-normal">UI Development Tools</h5>
            <p>
                For the UI system, I also implemented the in-engine tools for adding, controlling and editing these.
            </p>

            <h5 className="mt-4 font-weight-normal">UI Implementations</h5>
            <p>
                Next to creating the actual UI system in the engine, I also implemented various UI systems and elements in the game.
            </p>

        </ProjectPage>
    )
}