import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle} from "mdbreact";

const RefImage = React.forwardRef((props, ref) => (
    <img ref={ref} {...props} />
));


export default class ProjectCard extends React.Component {

    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    openOverlay(event) {
        const rect = this.imageRef.current.getBoundingClientRect();
        this.props.onClick({x: rect.x, y: rect.y}, {width: rect.width, height: rect.height}, "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg");
    }

    render() {
        return (
            <MDBCard className="project-card mb-4">
                <div onClick={ () => this.openOverlay() }>
                    <MDBCardImage tag="div" waves src=" " >
                        <div className="project-image-container" ref={ this.imageRef }>
                        <RefImage className="img-fluid project-image"
                                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(118).jpg" />
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
                        More...
                    </MDBBtn>
                </MDBCardBody>
            </MDBCard>
        )
    }
}