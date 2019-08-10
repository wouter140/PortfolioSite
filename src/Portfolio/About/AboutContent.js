import React from 'react';
import ContentContainer from "../../components/ContentContainer";

import "./AboutPageContent.scss"

export default class AboutContent extends React.Component {
    render() {
        return (
            <ContentContainer id="about-page" className="responsive-text-size"
                        contentTitle="About" >
                Hey there! My name is Wouter Grutter and I am a Dutch programmer. I am currently studying game development at the school ROCA12.
                I'm 21 years old and I am currently based in the small city of Elst, The Netherlands.
                I like coffee, creating games, working on my computer and when I am not staying up all night to work on some project, I love to play some games with friends

                I am currently employed at Learning Valley where I work on their online video platform. I created features like the 360 video compatibility.
            </ContentContainer>
        );
    }
}