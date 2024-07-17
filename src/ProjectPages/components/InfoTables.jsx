import React from "react";

import {MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";

export function InfoTable(props) {
    const { title, infoValues, ...other} = props;
    return (
        <MDBTable {...other}>
            <MDBTableHead color="primary-color" textWhite>
                <tr>
                    <th className="h4 p-3" colSpan={2}>{title}</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                { infoValues && infoValues.map((value, index) => value.value !== "" && value.value !== undefined && (
                    <tr key={value.name} className={index === 0 ? "first-info-table-row" : ""}>
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
        <InfoTable hover borderless className={(props.className || "") + " info-table my-5"}
               title="Project Information"
               infoValues={[
                   {name: "Trailer", value: props.trailer},
                   {name: "Engine", value: props.engine},
                   {name: "Development Time", value: props.developmentTime},
                   {name: "Team Size", value: props.teamSize},
                   {name: "My Roles", value: props.roles},
                   {name: "Languages Used", value: props.languages},
                   {name: "Target Platforms", value: props.targetPlatforms},
                   {name: "Release Status", value: props.release},
               ]}
        />
    )
}