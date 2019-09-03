import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle} from "mdbreact";

export default class ProjectCard extends React.Component {

    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    openOverlay(event) {
        const rect = this.imageRef.current.getBoundingClientRect();
        this.props.onClick({x: rect.x, y: rect.y}, {width: rect.width, height: rect.height}, this.props.src);
    }

    render() {
        return (
            <MDBCard className="project-card mb-4">
                <div onClick={ () => this.openOverlay() }>
                    <MDBCardImage tag="div" waves src=" " overlay={false} >
                        <div className="project-image-container" ref={ this.imageRef }>
                        <img className="img-fluid project-image"
                                  src={ this.props.src } alt={ this.props.alt } />
                        </div>
                    </MDBCardImage>
                </div>
                <MDBCardBody>
                    <MDBCardTitle>
                        {this.props.title}
                    </MDBCardTitle>
                    <MDBCardText>
                        {this.props.children}
                    </MDBCardText>
                    <MDBBtn className="float-right" onClick={ (e) => this.openOverlay() }>
                        Learn More
                    </MDBBtn>
                </MDBCardBody>
            </MDBCard>
        )
    }
}