import * as React from "react";

export function ContributionHighlights(props) {
    return (
        <React.Fragment>
            <h4 className="h4 text-white primary-color p-3 mt-5">Contribution Highlights</h4>
            <ul className="mt-3 contribution-highlights-list">
                {props.children}
            </ul>
        </React.Fragment>
    )
}