import React from "react";

import {MDBCol, MDBRow} from "mdbreact";

export default function ProjectStartLayout(props) {
    if(props.children.length < 1)
        return null;

    return (
        <MDBRow>
            <MDBCol size="12" lg="6">
                {props.children[0]}
            </MDBCol>

            { props.children.length > 1 && (
                <MDBCol size="12" lg="6">
                    {props.children[1]}
                </MDBCol>
            )}
        </MDBRow>
    );
}