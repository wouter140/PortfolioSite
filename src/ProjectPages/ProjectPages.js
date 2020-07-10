import React from "react";

// const TestProject = React.lazy(() => import("./ProjectPageComponents/TestProject"));
// const BitBusterProject = React.lazy(() => import("./ProjectPageComponents/BitBusterProject"));
// const PaintProject = React.lazy(() => import("./ProjectPageComponents/PaintProject"));
// const BurstingBarrelProject = React.lazy(() => import("./ProjectPageComponents/BurstingBarrelProject"));
// const PinballBashProject = React.lazy(() => import("./ProjectPageComponents/PinballBashProject"));
// const CookDontLookProject = React.lazy(() => import("./ProjectPageComponents/CookDontLookProject"));
// const RocketRampageProject = React.lazy(() => import("./ProjectPageComponents/RocketRampageProject"));
// const P2GOPlayerProject = React.lazy(() => import("./ProjectPageComponents/P2GOPlayerProject"));
// const DiscordPresencePlugin = React.lazy(() => import("./ProjectPageComponents/DiscordPresencePlugin"));

import TestProject from "./ProjectPageComponents/TestProject";
import BitBusterProject from "./ProjectPageComponents/BitBusterProject";
import PaintProject from "./ProjectPageComponents/PaintProject";
import BurstingBarrelProject from "./ProjectPageComponents/BurstingBarrelProject";
import PinballBashProject from "./ProjectPageComponents/PinballBashProject";
import CookDontLookProject from "./ProjectPageComponents/CookDontLookProject";
import RocketRampageProject from "./ProjectPageComponents/RocketRampageProject";
import P2GOPlayerProject from "./ProjectPageComponents/P2GOPlayerProject";
import DiscordPresencePlugin from "./ProjectPageComponents/DiscordPresencePlugin";

export const projects = [
    {path: "/TestProject", component: TestProject},

    {path: "/Paint", component: PaintProject},
    {path: "/Bit-Buster", component: BitBusterProject},
    {path: "/BurstingBarrel", component: BurstingBarrelProject},
    {path: "/PinballBash", component: PinballBashProject},
    {path: "/CookDontLook", component: CookDontLookProject},
    {path: "/RocketRampage", component: RocketRampageProject},
    {path: "/P2GOPlayer", component: P2GOPlayerProject},
    {path: "/DiscordPresencePlugin", component: DiscordPresencePlugin},
];