import React from "react";

import {MDBBtn, MDBNavbar, MDBNavbarBrand, MDBTooltip,} from "mdbreact";

import {Link} from "react-router-dom";
import {animateScroll} from "react-scroll";

import "./ProjectPageNavBar.scss";

export default function PortfolioNavBar(props) {
    return (
        <React.Fragment>
            <MDBNavbar color="bg-primary" className={"project-page-navbar overflow-hidden" + (!props.projectTitleVisible ? " enlarge-padding" : "")} fixed="top" light expand="md">
                <div style={{
                    width: "90vw",
                    display: "flex",
                    flexWrap: "nowrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "0 auto",
                    padding: "0 1.5rem"
                }}>
                    <Link to="/">
                        <MDBNavbarBrand className="d-flex clickable">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path opacity=".87" fill="none" d="M0 0h24v24H0V0z"/>
                                <path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"/>
                            </svg>
                            <span>
                                Back to Portfolio
                            </span>
                        </MDBNavbarBrand>
                    </Link>

                    <h1 className={"font-weight-bold project-title-nav" + (!props.projectTitleVisible ? " show enlarge-padding" : "")}>
                        <div className="d-inline-block">{ props.title }</div>
                    </h1>
                </div>
            </MDBNavbar>

            <MDBTooltip placement="top">
                <MDBBtn size="lg"
                        className={"btn-floating floating-fixed-br" + (props.projectTitleVisible ? " hidden" : "")}
                        onClick={ () => animateScroll.scrollToTop({duration: 500}) }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0V0z"/>
                        <path d="M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41l-6.59-6.59c-.39-.39-1.02-.39-1.41 0l-6.6 6.58c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z"/>
                    </svg>
                </MDBBtn>
                <div>Scroll to top</div>
            </MDBTooltip>
        </React.Fragment>
    );
}