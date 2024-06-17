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
import Tooltip from "@material-ui/core/Tooltip";

const badgeConverter = [
    {type: 'secondary', name: 'Engine', title: "Engine"},
    {type: 'primary', name: 'Languages', title: "Used Languages"},
    {type: 'danger', name: 'Platforms', title: "Target Platforms"},
    {type: 'warning', name: 'Team Size', title: "Project Team Size"},
    {type: 'default', name: 'Duration', title: "Project Duration"},
    {type: 'default', name: 'Company', title: "Company"}
];

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
                <div className="hoverable">
                    { this.props.noPage || this.props.inProgress ? (
                        <MDBCardImage tag='div' waves src=" " hover>
                            <div className="project-image-container" ref={ this.imageRef }>
                                <img className="img-fluid project-image"
                                     src={ this.props.src } alt={ this.props.alt } />
                            </div>
                        </MDBCardImage>
                    ) : (
                        <Link to={ this.props.location }>
                            <MDBCardImage tag='div' waves src=" " hover>
                                <div className="project-image-container" ref={ this.imageRef }>
                                    <img className="img-fluid project-image"
                                         src={ this.props.src } alt={ this.props.alt } />
                                </div>
                            </MDBCardImage>
                        </Link>
                    )}
                </div>
                <MDBCardBody className="">
                    { this.props.badges && this.props.badges.length > 0 && (
                        <div className="mb-2">
                            { this.props.badges.map((badge) => {
                                const badgeInfo = badgeConverter.filter((badgeInfo) => (badgeInfo.name === badge.name))[0];
                                if(!badgeInfo)
                                    return null;
                                return (
                                    <Tooltip key={badgeInfo.title} title={badgeInfo.title} aria-label={badgeInfo.title} placement="top" arrow>
                                        <span>
                                            <MDBBadge key={badgeInfo.type} color={badgeInfo.type || 'default'} className="mr-2 mb-2">
                                                {badge.content}
                                            </MDBBadge>
                                        </span>
                                    </Tooltip>
                                )
                            }) }
                        </div>
                    ) }
                    <MDBCardTitle>
                        { this.props.title.toUpperCase() }
                    </MDBCardTitle>
                    <MDBCardText>
                        { this.props.children }
                    </MDBCardText>
                    { this.props.noPage ? (
                        <></>
                    ) : this.props.inProgress ? (
                        <MDBBtn color="primary" className="float-right" disabled>
                            Coming Soon
                        </MDBBtn>
                    ) : (
                        <Link to={ this.props.location }>
                            <MDBBtn color="primary" className="float-right">
                                More info
                            </MDBBtn>
                        </Link>
                    )}
                </MDBCardBody>
            </MDBCard>
        )
    }
}