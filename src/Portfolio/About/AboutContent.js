import React from 'react';
import ContentContainer from "../../components/ContentContainer";

import "./AboutPageContent.scss"

export default class AboutContent extends React.Component {
    render() {
        return (
            <ContentContainer id="about-page" className="responsive-text-size"
                        contentTitle={ <span>About <strong>Me</strong></span> }>
                Hey there! My name is Wouter Grutter and I am a software developer. I am currently studying GameDevelopment at Breda University of Applied Sciences aka BUAS, formerly known as NHTV.<br/>
                I previously graduated from ROCA12 with a Game Development degree. As most in this field do, I love video games and movies which take a significant amount of my free time.<br/>
                I am currently based in Breda, The Netherlands but am able to relocate.<br/>
                <br/>
                I'm a huge enthusiast when it comes to game development and enjoy solving all kinds of problems through code.<br/>


                <br/>
                I am currently employed at Learning Valley where I work on their online video platform, remove controlling video tools, apps and other applications and tools.
                Some of my work at Leaning Valley can be found in my projects below.
            </ContentContainer>
        );
    }
}