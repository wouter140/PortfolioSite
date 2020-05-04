import Bugsnag from "@bugsnag/js";
import bugsnagReact from "@bugsnag/plugin-react";
import React from "react";

const bugsnagClient = Bugsnag.start({
    apiKey: '7fbf5842c9745d2d694ffc5287fb5145',
    plugins: [new bugsnagReact(React)]
})

const ErrorBoundary = bugsnagClient.getPlugin('react');

export {ErrorBoundary, bugsnagClient};