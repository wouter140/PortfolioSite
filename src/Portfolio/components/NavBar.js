import React, {Component} from "react";

import {
    MDBCollapse,
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem, MDBNavLink
} from "mdbreact";

import {Link, animateScroll} from "react-scroll"

import ProfilePicture from "../../images/profilepicture.png";

import "./NavBar.scss";

export default class PortfolioNavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collapse: false
        }
    }

    render() {
        return (
            <MDBNavbar color="bg-primary" fixed="top" light expand="md" scrolling transparent>
                <MDBContainer>
                    <MDBNavbarBrand className="d-flex clickable" onClick={ () => animateScroll.scrollToTop() }>
                        <div className="mr-3">
                            <img src={ ProfilePicture } alt="Wouter Grutter - Software Developer"
                                className="rounded-circle" style={{height: "2.5rem"}}/>
                        </div>
                        <strong className="align-self-center">Wouter Grutter</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler className="portfolio-page-nav-toggle"
                                      onClick={() => this.setState((state) => {return {collapse: !state.collapse}})}/>
                    <MDBCollapse isOpen={this.state.collapse} navbar>
                        <MDBNavbarNav left>
                            <Link activeClass="active" to="about-page" spy={true} smooth={true} offset={-80} duration={500}>
                                <MDBNavItem>
                                    <MDBNavLink>About</MDBNavLink>
                                </MDBNavItem>
                            </Link>
                            <Link activeClass="active" to="professional-projects-page" spy={true} smooth={true} offset={-40} duration={500}>
                                <MDBNavItem>
                                    <MDBNavLink>Professional Projects</MDBNavLink>
                                </MDBNavItem>
                            </Link>
                            <Link activeClass="active" to="personal-projects-page" spy={true} smooth={true} offset={-40} duration={500}>
                                <MDBNavItem>
                                    <MDBNavLink>Personal Projects</MDBNavLink>
                                </MDBNavItem>
                            </Link>
                            <Link activeClass="active" to="contact-page" spy={true} smooth={true} offset={-40} duration={500}>
                                <MDBNavItem>
                                    <MDBNavLink>Contact</MDBNavLink>
                                </MDBNavItem>
                            </Link>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        );
    }
}