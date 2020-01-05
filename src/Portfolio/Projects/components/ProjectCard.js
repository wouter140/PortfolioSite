import React from 'react';
import {
    MDBBadge,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle
} from "mdbreact";
import {Link} from "react-router-dom";

export default class ProjectCard extends React.Component {

    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    render() {
        let className = "project-card mb-4";
        if(this.props.className)
            className += " " + this.props.className;

        return (
            <MDBCard className={className}>
                <div>
                    <Link to={ this.props.location }>
                        <MDBCardImage tag='div' waves src=" " overlay={false}>
                            <div className="project-image-container" ref={ this.imageRef }>
                            <img className="img-fluid project-image"
                                  src={ this.props.src } alt={ this.props.alt } />
                            </div>
                        </MDBCardImage>
                    </Link>
                </div>
                <MDBCardBody>
                    { this.props.badges && this.props.badges.length > 0 && (
                        <div className="mb-3">
                            { this.props.badges.map((badge, index) => (
                                <MDBBadge key={index} color={ badge.type || '' } className="mr-2">{ badge.content }</MDBBadge>
                            ))}
                        </div>
                    ) }
                    <MDBCardTitle>
                        { this.props.title.toUpperCase() }
                    </MDBCardTitle>
                    <MDBCardText>
                        { this.props.children }
                    </MDBCardText>
                    <Link to={ this.props.location }>
                        <MDBBtn color="primary" className="float-right">
                            More info
                        </MDBBtn>
                    </Link>
                </MDBCardBody>
            </MDBCard>
        )
    }
}