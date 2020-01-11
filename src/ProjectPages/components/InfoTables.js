import React from "react";

import {MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";

export function InfoTable(props) {
    const { title, infoValues, ...other} = props;
    return (
        <MDBTable {...other}>
            <MDBTableHead color="primary-color" textWhite>
                <tr>
                    <th className="h4 p-3">{title}</th>
                    <th/>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                { infoValues && infoValues.map(value => value.value !== "" && value.value !== undefined && (
                    <tr key={value.name}>
                        <td className="font-weight-normal">{value.name}</td>
                        <td>{value.value}</td>
                    </tr>
                )) }
            </MDBTableBody>
        </MDBTable>
    );
}

export function ProjectInfoTable(props) {
    return (
        <InfoTable hover borderless className={(props.className || "") + " my-5"}
               title="Project Information"
               infoValues={[
                   {name: "Engine", value: props.engine},
                   {name: "Development Time", value: props.developmentTime},
                   {name: "Team Size", value: props.teamSize},
                   {name: "My Roles", value: props.roles},
                   {name: "Languages Used", value: props.languages},
                   {name: "Target Platforms", value: props.targetPlatforms},
                   {name: "Release", value: props.release}
               ]}
        />
    )
}