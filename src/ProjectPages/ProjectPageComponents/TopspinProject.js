import * as React from "react";

import {Link} from "react-scroll";

import ProjectPage from "../components/ProjectPage";
import {ProjectInfoTable} from "../components/InfoTables";
import ProjectStartLayout from "../components/ProjectStartLayout";
import {ContributionHighlights} from "../components/ContributionHighlights";
import {WorkItem, WorkItemWithCarousel,} from "../components/WorkItem";

import image from "../../content/topspin/images/Wimbledon.png";
import brandImage from "../../content/topspin/images/brand-image.png";

export default function TopSpinProject(props) {
    return (
        <ProjectPage
            title="TopSpin 2K25"
            // videoID="yu0j4dBDjCA"
            imageURL={image}
            brandImageURL={brandImage}
            brandClassName="paint-brand"
        >
            <p>
                TopSpin 2K25 is a tennis simulation game featuring tennis legends and your MyPlayer. You can play solo and online in cross-play multiplayer.
            </p>

            <ProjectStartLayout>
                <ContributionHighlights>
                    <li><Link to="scrum-master" href="#scrum-master" smooth={true} offset={-100} duration={500}>Scrum Master</Link></li>
                    <li><Link to="optimizations" href="#optimizations" smooth={true} offset={-100} duration={500}>Responsible for the majority of game and network optimizations</Link></li>
                    <li><Link to="gameplay" href="#gameplay" smooth={true} offset={-100} duration={500}>Player Gameplay and code</Link></li>
                    <li><Link to="gameplay" href="#gameplay" smooth={true} offset={-100} duration={500}>Weapons Functionality</Link></li>
                    <li><Link to="gameplay" href="#gameplay" smooth={true} offset={-100} duration={500}>Pickups System</Link></li>
                    <li><Link to="gameplay" href="#gameplay" smooth={true} offset={-100} duration={500}>Gameplay Networking</Link></li>
                    <li><Link to="tools" href="#tools" smooth={true} offset={-100} duration={750}>Tools used by the entire team</Link></li>
                    <li><Link to="presence" href="#presence" smooth={true} offset={-100} duration={750}>Online Rich Presence</Link></li>
                    <li><Link to="dynamic-split-screen" href="#dynamic-split-screen" smooth={true} offset={-100} duration={750}>Dynamic Split-Screen Research</Link></li>
                    <li><Link to="audio" href="#audio" smooth={true} offset={-100} duration={750}>Audio Systems</Link></li>
                </ContributionHighlights>

                <ProjectInfoTable
                    engine="Custom Engine"
                    languages="C/C++, C# and Python"
                    targetPlatforms="PlayStation 4, PlayStation 5, Xbox One, Xbox Series & PC"
                    release={(
                        <a href="https://topspin.2k.com/2k25/buy/" target="_blank" rel="noopener noreferrer"
                           style={{color: "#007bff"}}>
                            Released on all platforms
                        </a>
                    )}
                    trailer={(
                        <a href="https://www.youtube.com/watch?v=E13jqZUaTrE" target="_blank" rel="noopener noreferrer"
                           style={{color: "#007bff"}}>
                            Launch Trailer
                        </a>
                    )}
                />
            </ProjectStartLayout>

            <h4 className="text-white primary-color mt-5 p-3">My Work</h4>
            <WorkItem
                id="scrum-master"
                title="Scrum Master"
            >
                <p>
                    During half of the project I worked as a scrum master and had my own feature team.<br/>
                    Some of my responsibilities while I had the role of scrum master:
                </p>
                <ul>
                    <li>Planning sprints</li>
                    <li>Prioritize work in the sprints</li>
                    <li>Lead a multidisciplinary team of around 5</li>
                    <li>Review the work of the scrum team</li>
                    <li>Present teams progress</li>
                </ul>
            </WorkItem>

            <WorkItemWithCarousel
                id="optimizations"
                title="Profiling and Optimizations"
                carouselBefore
                sources={[

                ]}
            >
                <p>
                    During the project I have worked on optimizing the game and networking performance.<br/>
                    For most of the performance issues I started with profiling the point in the game where the issue lies.
                </p>
                <p>
                    For the networking performance issues, I used the Unreal network profiler to find the places in our
                    game that cause the network issues. From the profiling I found various issues in the game regarding
                    our networking and focused on fixing these issues from the places that had the biggest impact to the
                    lower ones. After optimizing our network performance, we saw a huge improvement in-game and this
                    reflected back in the network profiler data.
                    From improving the network performance I also learned more best-practices regarding networking in Unreal.
                </p>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                id="gameplay"
                title="Gameplay"
                sources={[

                ]}
            >
                <p>
                    During the development of our game, I worked on various gameplay elements of the game.<br/>
                    One of these gameplay aspects is the Player. I implemented the player movement and dashing
                    functionality according to the design specifications. I implemented various visual and audio effects
                    to the player and I massively improved the player code structure. Some of the player functionality
                    also required to be replicate across the multiplayer session and I also integrated this.
                </p>
                <p>
                    I also worked on the functionality of the weapons. I worked on the weapons system with shooting,
                    aiming, reloading and any other effects that were required by the design specification. I also
                    implemented the networking aspects of the weapon. For example I implemented the networking side of
                    the shooting of the weapon, making sure the server has authority over what the client does, without
                    having a negative impact on the client. The reloading also needed to be networked properly as the
                    server has authority over the amount of ammo for example, and other players should see and hear the
                    reloading effects on that player in their game.
                </p>
                <p>
                    Another system I worked on is the pickups system. The pickups system I developed has functionality
                    so the pickup only works for 1 player, so every player can pick it up, or one of the player can pick
                    it up. This was according to the design specifications of the pickups we designed for the game.
                    Unfortunately in the final product we only used the health pickup as a pickup in the game.
                </p>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                id="tools"
                title="Discord Meeting Tool"
                carouselBefore
                sources={[

                ]}
            >
                <p>
                    The development team uses Discord as our teams communication platform.
                    To ease parts of our communication workflow in Discord I created a bot that simplifies making meetings
                    and manages the inviting and attendance of attendees.
                </p>
                <p>
                    The meeting tool has a workflow in Discord to create and manage meetings in the team and has the
                    following features:
                </p>
                <ul>
                    <li>Easily create a Google Calendar event from inside Discord.</li>
                    <li>Add attendees to the meeting through Discord mentions or emails.</li>
                    <li>Invitees are able to respond to the meeting, both in Discord and externally in Google and both
                        platforms will update the event state with attendees and their response status.
                    </li>
                    <li>Team members are able to add or remove themselves from the meeting inside Discord.</li>
                    <li>As the meeting is in Google Calendar, responding to the event with attending, adds the event
                        in that users' Google calendar, which syncs with their phone, Windows and other places.
                    </li>
                    <li>Reminders are send through Google before the meeting starts.</li>
                </ul>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                title="Discord Steam Versioning and Branching Tool"
                carouselBefore
                sources={[

                ]}
            >
                <p>
                    To simplify the release and Steam versioning workflow, I developed another tool in the Discord
                    bot. The Steam versioning tool has the following features:
                </p>
                <ul>
                    <li>View all the current build versions uploaded to the Steam servers.</li>
                    <li>View which build is on each Steam branch.</li>
                    <li>Change the current build per Steam branch</li>
                    <li>Support our QA and release workflow to upgrade builds from one Steam branch to the
                        next.
                    </li>
                </ul>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                id="presence"
                title="Online Rich Presence"
                sources={[

                ]}
            >
                <p>
                    I integrated Steam rich presence into our game. Unreal still used outdated parts of the Steam SDK
                    that make the rich presence work. This meant I went through the Steam SDK and the Unreal Engine source
                    to find the current implementation, how it's supposed to work and make changes to the Unreal Engine
                    source code to update the Unreal Steam Rich presence to use the features of the latest SDK.
                    In-game we now show what the player is doing in the level and with how many people they are playing.
                </p>
                <p>
                    I have also integrated Discord rich presence into our game. Unlike Steam rich presence, there was no
                    support for Discord functionality in the Unreal Engine. I developed a Unreal plugin that implements
                    Discord's game SDK features into Unreal. Currently in our game we use this to update the player's
                    status to show what they are doing in-game and with how many people they are playing.
                </p>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                id="dynamic-split-screen"
                title="Split-Screen"
                carouselBefore
                sources={[

                ]}
            >
                <p>
                    As a partly coop game, I investigated other ways of implementing split-screen.
                    I researched some different split-screen implementations to find the best functioning and performing
                    option.
                    The different types of split-screen I researched are:
                </p>
                <ul>
                    <li>Voronoi split-screen</li>
                    <li>Dynamic split-screen</li>
                    <li>Simple split-screen</li>
                </ul>
                <p>
                    Unfortunately due to time constraints and performance reasons, split-screen did not end up in the
                    final product.
                </p>
            </WorkItemWithCarousel>

            <WorkItem
                id="audio"
                title="Audio"
                sources={[

                ]}
            >
                <p>
                    Due to a general lack of audio knowledge in our team, I worked on learning about and implementing
                    the Unreal audio features. Some of the features of Unreal audio I implemented into our game are:
                </p>
                <ul>
                    <li>Setting up the sound system</li>
                    <li>Added support for audio volume controls</li>
                    <li>Setup Audio Attenuation</li>
                    <li>Added Reverb effects to the world</li>
                </ul>
            </WorkItem>


        </ProjectPage>
    )
}