import * as React from "react";

import image from "../../content/pinball-bash/images/main-face.png";

import ProjectPage from "../components/ProjectPage";

import {ProjectInfoTable} from "../components/InfoTables";
import {ContributionHighlights} from "../components/ContributionHighlights";
import ProjectStartLayout from "../components/ProjectStartLayout";
import {WorkItemWithCarousel} from "../components/WorkItem";
import {Link} from "react-scroll";

import video from "../../content/pinball-bash/videos/pinball-bash-trailer.mp4";
import effects from "../../content/pinball-bash/videos/pinball-bash-effects.mp4";
import gameplay from "../../content/pinball-bash/videos/pinball-bash-gameplay.mp4";
import littleGameplay from "../../content/pinball-bash/videos/pinball-bash-little-gameplay.mp4";
import playerAnimations from "../../content/pinball-bash/videos/pinball-bash-player-animations.mp4";
import walls from "../../content/pinball-bash/videos/pinball-bash-walls.mp4";

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

            <ProjectStartLayout>
                <ContributionHighlights>
                    <li>Prototyping</li>
                    <li><Link to="player" href="#player" smooth={true} offset={-100} duration={500}>Created the Player</Link></li>
                    <li><Link to="pinball" href="#pinball" smooth={true} offset={-100} duration={500}>Developed pinball movement system</Link></li>
                    <li><Link to="level" href="#level" smooth={true} offset={-100} duration={500}>Implementing Animations</Link></li>
                    <li><Link to="level" href="#level" smooth={true} offset={-100} duration={500}>Implementing Effects</Link></li>
                </ContributionHighlights>

                <ProjectInfoTable
                    engine="Unreal Engine 4"
                    developmentTime="8 Weeks"
                    teamSize="3 - 9 People (2 Programmer, 2 Designers and 5 Artists)"
                    roles="Gameplay Programmer"
                    languages="Unreal Blueprints"
                    targetPlatforms="PC"
                />
            </ProjectStartLayout>

            <h4 className="text-white primary-color mt-5 p-3">My Work</h4>
            <WorkItemWithCarousel
                id="player"
                title="Player"
                sources={[
                    playerAnimations,
                    gameplay,
                    effects
                ]}
            >
                <p>
                    During the project, I developed and iterated on the player.<br/>
                    In the player, I worked on and implemented the following features:
                </p>
                <ul>
                    <li>Implement movement</li>
                    <li>Integrate animations</li>
                    <li>Integrate effects and particles</li>
                    <li>Implement the HUD</li>
                </ul>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                id="pinball"
                title="Pinball"
                carouselBefore
                sources={[
                    littleGameplay
                ]}
            >
                <p>
                    In the project I created the pinball fairly early on in development, and proved to become the
                    integral element of our gameplay. I iterated multiple times on it's implementation to get to the
                    final state.
                </p>
                <p>
                    I implemented the effects on the pinball like freeze and accelerate when hitting a bumper to make
                    the bumper feel more powerful.<br/>
                    I also worked on the player being able to pick the ball up and throw it back in a new direction.
                </p>
                <p>
                    I also worked on other subtle effect on the pinball like the reflection when hitting a wall. The
                    ball does not reflect perfectly which helps the gameplay by preventing the ball from getting stuck
                    while bouncing between 2 walls.
                </p>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                id="level"
                title="Level"
                sources={[
                    walls,
                    gameplay
                ]}
            >
                <p>
                    A big part of our levels are the walls and bumpers that move up and down inside the level. I
                    developed the systems behind the walls and the tools to create sequences where the walls move up
                    on their own during the game.
                </p>
                <p>
                    The walls are also controlled by the player. The player is able to move the walls up in the
                    direction they are facing. When they do this, the walls they move up also become their color.
                </p>
                <p>
                    The bumper wall, also has an animation when it has moved in the up state and is the only wall type
                    that can accelerate the pinball when hit.
                </p>
                <p>
                    Before the walls move up on their own, there is an effect on the light intensity on the edges of
                    the wall, to signal they will change to the player. The player able to use this effect to their
                    advantage.
                </p>
            </WorkItemWithCarousel>

        </ProjectPage>
    )
}