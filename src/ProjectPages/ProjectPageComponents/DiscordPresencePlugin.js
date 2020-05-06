import React from "react";

import ProjectPage from "../components/ProjectPage";
import {ProjectInfoTable} from "../components/InfoTables";
import {ContributionHighlights} from "../components/ContributionHighlights";
import {WorkItemWithCarousel} from "../components/WorkItem";

import image from "../../content/discord-presence-plugin/images/main-face.png";
import ProjectStartLayout from "../components/ProjectStartLayout";

export default function DiscordPresencePlugin() {
    return (
        <ProjectPage
            title="Discord Rich Presence Plugin"
            imageURL={image}
        >
            I developed an Unreal Engine 4 plugin that helps developers connect with Discord to easily update the
            players' presence from the game.<br/>
            Internally I used the Discord GameSDK. This also allows the plugin to implement the request to join, join
            and spectate events.

            <ProjectStartLayout>
                <ContributionHighlights>
                    <li>Integrated Discord GameSDK API.</li>
                    <li>Added Project Settings.</li>
                    <li>Implemented Scripts to update Discord presence and handle API limitations.</li>
                    <li>Implemented blueprint that can be used in the level to update presence anywhere.</li>
                </ContributionHighlights>

                <ProjectInfoTable
                    engine="Unreal Engine 4"
                    languages="C++ & Blueprints"
                    targetPlatforms="PC with Discord"
                    // release={(
                    //     <a href="https://igad.itch.io/bitbuster" target="_blank" rel="noopener noreferrer"
                    //        style={{color: "#007bff"}}>
                    //         Released on Unreal Marketplace
                    //     </a>
                    // )}
                />
            </ProjectStartLayout>

            <h4 className="text-white primary-color mt-5 p-3">My Work</h4>
            <WorkItemWithCarousel
                title="Discord GameSDK API"
                sources={[]}
                // sources={[
                //     uiOptionsExampleVideo,
                //     mainMenuVideo,
                // ]}
            >
                <p>
                    In progress
                </p>
            </WorkItemWithCarousel>

        </ProjectPage>
    )
}