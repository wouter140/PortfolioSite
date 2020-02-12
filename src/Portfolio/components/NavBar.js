import React, {Component} from "react";

import {
    MDBBtn,
    MDBCollapse,
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem
} from "mdbreact";

import {Link, animateScroll} from "react-scroll"

import ProfilePicture from "../../images/profilepicture.jpg";

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
                        <div className="navbar-icon">
                            <img src={ ProfilePicture } alt="Wouter Grutter - Games Developer"
                                className="nav-profile-picture mr-3" style={{height: "2.5rem"}}/>
                        </div>
                        <strong className="align-self-center navbar-brand-title">Wouter Grutter</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler className="portfolio-page-nav-toggle"
                                      onClick={() => this.setState((state) => {return {collapse: !state.collapse}})}/>
                    <MDBCollapse isOpen={this.state.collapse} navbar>
                        <MDBNavbarNav right>
                            <Link activeClass="active" to="about-page" spy={true} smooth={true} offset={-80} duration={1000}>
                                <MDBNavItem>
                                    <MDBBtn color="link" className="m-0 p-2 nav-link-button nav-link">About</MDBBtn>
                                </MDBNavItem>
                            </Link>
                            <Link activeClass="active" to="professional-projects-page" className="mr-md-2" spy={true} smooth={true} offset={-40} duration={1000}>
                                <MDBNavItem>
                                    <MDBBtn color="link" className="m-0 p-2 nav-link-button nav-link">Professional Projects</MDBBtn>
                                </MDBNavItem>
                            </Link>
                            <Link activeClass="active" to="personal-projects-page" className="mr-md-2" spy={true} smooth={true} offset={-40} duration={1000}>
                                <MDBNavItem>
                                    <MDBBtn color="link" className="m-0 p-2 nav-link-button nav-link">Side Projects</MDBBtn>
                                </MDBNavItem>
                            </Link>
                            <Link activeClass="active" to="contact-page" className="mr-md-4" spy={true} smooth={true} offset={-40} duration={1000}>
                                <MDBNavItem>
                                    <MDBBtn color="link" className="m-0 p-2 nav-link-button nav-link">Contact</MDBBtn>
                                </MDBNavItem>
                            </Link>
                            <Link activeClass="active" to="contact-page">
                                <MDBNavItem>
                                    <MDBBtn color="link" className="m-0 p-2 nav-link-button nav-link">Resume</MDBBtn>
                                </MDBNavItem>
                            </Link>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        );
    }
}