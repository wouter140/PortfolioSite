import React from "react";

import ProjectPage from "../components/ProjectPage";
import {ProjectInfoTable} from "../components/InfoTables";
import {ContributionHighlights} from "../components/ContributionHighlights";
import {WorkItemWithCarousel} from "../components/WorkItem";

import image from "../../content/p2go-player/images/main-face.png";
import ProjectStartLayout from "../components/ProjectStartLayout";

export default function P2GOPlayerProject() {
    return (
        <ProjectPage
            title="Web Video Player"
            imageURL={image}
        >
            For the company Learning Valley and Presentations 2Go, I have worked on their Web video platform.<br/>
            The video player supports rich media, commenting, multiple video types like dash and hls, playlists, and
            360 videos with support for VR.

            <ProjectStartLayout>
                <ContributionHighlights>
                    <li>Full Redesign of the player in React</li>
                    <li>Improving performance aspects.</li>
                    <li>Adding 360 video support with option to view in VR.</li>
                    <li>Playlists</li>
                    <li>Dash, HLS and Progressive video support with fallback's</li>
                    {/*<li>Playlists</li>*/}
                </ContributionHighlights>

                <ProjectInfoTable
                    languages="Javascript ES6, React, CSS3, HTML5"
                    targetPlatforms="Web"
                    // release={(
                    //     <a href="https://igad.itch.io/bitbuster" target="_blank" rel="noopener noreferrer"
                    //        style={{color: "#007bff"}}>
                    //         Released on Itch.io
                    //     </a>
                    // )}
                />
            </ProjectStartLayout>

            <h4 className="text-white primary-color mt-5 p-3">My Work</h4>
            <WorkItemWithCarousel
                title="React Redesign"
                sources={[]}
                // sources={[
                //     uiOptionsExampleVideo,
                //     mainMenuVideo,
                // ]}
            >
                <p>
                    in progress
                </p>
            </WorkItemWithCarousel>

        </ProjectPage>
    )
}