import * as React from "react";
import * as PropTypes from "prop-types";

import {Carousel} from "./Carousel";
import {MDBCol} from "mdbreact";

export function WorkItem(props) {
    return (
        <div className="row py-3 work-item-row">
            <div className="col col-12">
                {props.title.length > 0 && (
                    <h5 className="mt-4 font-weight-normal">{props.title}</h5>
                )}
                { props.children }
            </div>
        </div>
    );
}
WorkItem.propTypes = {
    title: PropTypes.string
};
WorkItem.defaultProps = {
    title: ""
}

export function WorkItemWithCarousel(props) {
    const carouselBefore = 'carouselBefore' in props && props.carouselBefore;

    return <div className="row py-3 work-item-row">
        { carouselBefore && (
            <MDBCol size="6" lg="5" className="px-0">
                <Carousel className="work-item-carousel"
                    contentSources={props.sources}
                />
            </MDBCol>
        ) }

        <div className={"col col-6 col-lg-7 flex-vertical-center " + (carouselBefore ? "pl-3" : "pr-3")}>
            <div>
                {props.title.length > 0 && (
                    <h5 className="mt-4 font-weight-normal">{props.title}</h5>
                )}
                { props.children }
            </div>
        </div>

        { !carouselBefore && (
            <MDBCol size="6" lg="5" className="px-0">
                <Carousel className="work-item-carousel"
                          contentSources={props.sources}
                />
            </MDBCol>
        ) }
    </div>;
}
WorkItemWithCarousel.propTypes = {
    sources: PropTypes.arrayOf(PropTypes.string),
    carouselBefore: PropTypes.bool,
    title: PropTypes.string
};
WorkItemWithCarousel.defaultProps = {
    sources: [],
    carouselBefore: false,
    title: ""
};