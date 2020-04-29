import * as React from "react";

import {Carousel} from "./Carousel";

export function WorkItem(props) {
    return <div className="row py-3 work-item-row">
        <div className="col col-12">
            <h5 className="mt-4 font-weight-normal">{props.title}</h5>
            { props.children }
        </div>
    </div>;
}

export function WorkItemWithCarousel(props) {
    const carouselBefore = 'carouselBefore' in props && props.carouselBefore;

    return <div className="row py-3 work-item-row">
        { carouselBefore && <Carousel/> }
        <div className={"col col-6 col-lg-7 " + (carouselBefore ? "pl-2" : "pr-2")}>
            <h5 className="mt-4 font-weight-normal">{props.title}</h5>
            { props.children }
        </div>
        { !carouselBefore && <Carousel/> }
    </div>;
}