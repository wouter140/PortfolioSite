import React from 'react';
import {MDBBtn, MDBContainer, MDBFooter, MDBIcon} from "mdbreact";

import "./Footer.scss"

export default class Footer extends React.Component {
    render() {
        return (
            <MDBFooter className="font-small pt-4 mt-4">

                <div className="text-center mb-4 social-buttons-text-large">

                    <MDBBtn tag="a" social="li" href="https://www.linkedin.com/in/woutergrutter/" target="_blank"
                        title="LinkedIn">
                        <MDBIcon fab icon="linkedin-in" className="pr-1" /> LinkedIn
                    </MDBBtn>

                    <MDBBtn tag="a" social="git" href="https://github.com/wouter140" target="_blank"
                        title="Github">
                        <MDBIcon fab icon="github" className="pr-1" /> Github
                    </MDBBtn>

                    <MDBBtn tag="a" social="so" href="https://stackoverflow.com/users/5333948/wouter140" target="_blank"
                        title="Stack Overflow">
                        <MDBIcon fab icon="stack-overflow" className="pr-1" /> Stack Overflow
                    </MDBBtn>

                    <MDBBtn tag="a" social="steam" href="https://steamcommunity.com/id/wouter140/" target="_blank"
                        title="Steam">
                        <MDBIcon fab icon="steam" className="pr-1" /> Steam
                    </MDBBtn>

                    <MDBBtn social="email" onClick={ () => {const x = window.open("mailto:info@woutergrutter.com"); x.close(); }}
                        title="Email Me">
                        <MDBIcon icon="envelope" className="pr-1" /> Email
                    </MDBBtn>

                </div>

                <div className="text-center mb-4 social-buttons-small-round">

                    <MDBBtn tag="a" size="lg" social="li" floating href="https://www.linkedin.com/in/woutergrutter/" target="_blank"
                        title="LinkedIn">
                        <MDBIcon fab icon="linkedin-in" />
                    </MDBBtn>

                    <MDBBtn tag="a" size="lg" social="git" floating href="https://github.com/wouter140" target="_blank"
                        title="Github">
                        <MDBIcon fab icon="github" />
                    </MDBBtn>

                    <MDBBtn tag="a" size="lg" social="so" floating href="https://stackoverflow.com/users/5333948/wouter140" target="_blank"
                        title="Stack Overflow">
                        <MDBIcon fab icon="stack-overflow" />
                    </MDBBtn>

                    <MDBBtn tag="a" size="lg" social="steam" floating href="https://steamcommunity.com/id/wouter140/" target="_blank"
                                     title="Steam">
                        <MDBIcon fab icon="steam" />
                    </MDBBtn>

                    <MDBBtn size="lg" social="email" floating onClick={ () => {const x = window.open("mailto:info@woutergrutter.com"); x.close(); }}
                        title="Email Me">
                        <MDBIcon icon="envelope" />
                    </MDBBtn>

                </div>

                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        Copyright © 2015 - { (new Date()).getFullYear() } <a href="https://www.woutergrutter.com">Wouter Grutter</a>. All Rights Reserved
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}