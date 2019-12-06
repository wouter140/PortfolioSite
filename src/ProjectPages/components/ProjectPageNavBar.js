import React from "react";

import {MDBNavbar, MDBNavbarBrand,} from "mdbreact";

import {Link} from "react-router-dom";

import "./ProjectPageNavBar.scss";

export default function PortfolioNavBar(props) {
    return (
        <MDBNavbar color="bg-primary" className="project-page-navbar" fixed="top" light expand="md">
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

                <h1 className={"font-weight-bold project-title-nav" + (!props.projectTitleVisible ? " show" : "")}>
                    <div className="d-inline-block">{ props.title }</div>
                </h1>
            </div>
        </MDBNavbar>
    );
}