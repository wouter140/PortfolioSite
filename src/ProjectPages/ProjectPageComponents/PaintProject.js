import * as React from "react";

import image from "../../content/paint/images/main_face.png";

import ProjectPage from "../components/ProjectPage";

// import video from "../../content/videos/bit-buster/bit-buster-trailer.mp4";
import {ProjectInfoTable} from "../components/InfoTables";
import {ContributionHighlights} from "../components/ContributionHighlights";
import {WorkItem, WorkItemWithCarousel} from "../components/WorkItem";
import ProjectStartLayout from "../components/ProjectStartLayout";

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
            P.A.I.N.T. is a comedic, paintball inspired, shooter where you defeat the evil corporations that are trying
            to suppress color.

            <ProjectStartLayout>
                <ContributionHighlights>
                    <li>Scrum Master</li>
                    <li>Player</li>
                    <li>Weapons</li>
                    <li>Pickups</li>
                    <li>Audio</li>
                    <li>Optimizations</li>
                    <li>Online Presence</li>
                    <li>Tools that are used by the entire team</li>
                    <li>Dynamic Split-Screen</li>
                </ContributionHighlights>

                <ProjectInfoTable
                    engine="Unreal Engine 4"
                    developmentTime="40 Weeks"
                    teamSize="~25 People (5-6 Programmer, 7-10 Designers, 6-7 Artists and a Producer)"
                    roles="Scrum Master, Engine Programmer, Tools Programmer and Gameplay Programmer"
                    languages="C++, Blueprints & Python"
                    targetPlatforms="PC (Steam) and PS4"
                    release={(
                        "Preparation for release on Steam"
                    )}
                />
            </ProjectStartLayout>

            <h4 className="text-white primary-color mt-5 p-3">My Work</h4>
            <WorkItem
                title="Scrum Master"
            >
                <p>

                </p>
            </WorkItem>

            <WorkItemWithCarousel
                title="Gameplay"
                carouselBefore
                sources={[
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
                    "https://mdbootstrap.com/img/video/Tropical.mp4",
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"
                ]}
            >
                <p>
                    TODO
                </p>
                <ul>
                    <li>Player Movement</li>
                    <li>Player Effects</li>
                    <li>Weapons</li>
                    <li>Pickups</li>
                </ul>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                title="Audio"
                sources={[
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
                    "https://mdbootstrap.com/img/video/Tropical.mp4",
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"
                ]}
            >
                <p>
                    TODO
                </p>
                <ul>
                    <li>Sound System Setup</li>
                    <li>Volume Controls</li>
                    <li>Attenuation</li>
                    <li>Reverb</li>
                </ul>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                title="Optimizations"
                carouselBefore
                sources={[
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
                    "https://mdbootstrap.com/img/video/Tropical.mp4",
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"
                ]}
            >
                <p>
                    TODO
                </p>
            </WorkItemWithCarousel>


            <WorkItemWithCarousel
                title="Online Presence"
                sources={[
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
                    "https://mdbootstrap.com/img/video/Tropical.mp4",
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"
                ]}
            >
                <p>
                    Steam Presence
                </p>
                <p>
                    Discord Presence
                </p>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                title="Discord Meeting Tool"
                carouselBefore
                sources={[
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
                    "https://mdbootstrap.com/img/video/Tropical.mp4",
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"
                ]}
            >
                <p>
                    Our development team uses discord as our team communication platform.
                    To ease parts of our communication workflow in discord I created a bot that implements
                    an easy way to create meetings.
                </p>
                <p>
                    The meeting tool has a workflow in Discord to create and manage meetings in the team.
                    The meeting tool has the following features:
                </p>
                <ul>
                    <li>Simple way to create Google Calendar event.</li>
                    <li>Add members to the meeting through Discord mentions or emails.</li>
                    <li>Invitees are able to respond to the meeting, both in Discord and externally in Google and both
                        platforms will update the event state.
                    </li>
                    <li>Team members are able to add or remove themselves from the meeting inside Discord</li>
                    <li>As the meeting is in Google Calendar, responding to the event with attending, adds the event
                        in that users' Google calendar, which syncs with their phone, windows and other places
                    </li>
                    <li>Reminders are send through Google before the meeting starts.</li>
                </ul>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                title="Discord Steam Versioning and Branching Tool"
                sources={[
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
                    "https://mdbootstrap.com/img/video/Tropical.mp4",
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"
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
                    <li>Support our release and testing workflow to upgrade builds from one Steam branch to the
                        next in our workflow.
                    </li>
                </ul>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                title="Split-Screen"
                carouselBefore
                sources={[
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
                    "https://mdbootstrap.com/img/video/Tropical.mp4",
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"
                ]}
            >
                <p>
                    As a partly coop game, we investigated other ways of implementing split-screen.
                    I researched some different split-screen implementations to find the best functioning and performing
                    option.
                    The different types of split-screen I researched are:
                </p>
                <ul>
                    <li>Voronoi split-screen</li>
                    <li>Dynamic split-screen</li>
                    <li>Simple split-screen</li>
                </ul>
            </WorkItemWithCarousel>

            <WorkItemWithCarousel
                title="Input Device Detection"
                sources={[
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
                    "https://mdbootstrap.com/img/video/Tropical.mp4",
                    "https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"
                ]}
            >
                <p>
                    With coop gameplay in mind during the development of our game, I worked on a system to detect new input
                    devices.
                    When a new input device is detected, either a new player is added, or an existing player changes
                    input device.
                    When a input device is disconnected, the player associated to that player is either removed or
                    changed to a new input device.
                    With this system we are able to intuitively add, remove and change local players during gameplay.
                </p>
            </WorkItemWithCarousel>

        </ProjectPage>
    )
}