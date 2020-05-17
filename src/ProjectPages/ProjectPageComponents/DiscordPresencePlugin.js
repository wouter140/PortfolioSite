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
            I am currently developing an Unreal Engine 4 plugin that helps developers connect with Discord to easily
            update the players' presence from within the game.<br/>
            Internally I use the Discord GameSDK. This also allows the plugin to implement the request to join, join
            and spectate events that get called from the Discord client.

            <ProjectStartLayout>
                <ContributionHighlights>
                    <li>Integrated Discord GameSDK API.</li>
                    <li>Added Project Settings.</li>
                    <li>Implemented Discord Rich Presence</li>
                    <li>Implemented Discord Game Session Functionality</li>
                    <li>Implemented Discord Friends</li>
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
            <p>
                This project is currently in-progress. I will share more details when they become available.
            </p>
            {/*<WorkItemWithCarousel*/}
            {/*    title="Discord GameSDK API"*/}
            {/*    sources={[]}*/}
            {/*    // sources={[*/}
            {/*    //     uiOptionsExampleVideo,*/}
            {/*    //     mainMenuVideo,*/}
            {/*    // ]}*/}
            {/*>*/}
            {/*    <p>*/}
            {/*        This project is currently in-progress. I will share more details when they become available. */}
            {/*    </p>*/}
            {/*</WorkItemWithCarousel>*/}

        </ProjectPage>
    )
}