import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle} from "mdbreact";

export default function ProjectCard(props) {
    return (
        <MDBCard className="project-card mb-4">
            <MDBCardImage
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                waves
            />
            <MDBCardBody>
                <MDBCardTitle>
                    { props.title }
                </MDBCardTitle>
                <MDBCardText>
                    { props.children }
                </MDBCardText>
                <MDBBtn className="float-right">More...</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}