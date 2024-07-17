import React from "react";
import * as PropTypes from "prop-types";

import {MDBCarousel, MDBCarouselInner, MDBCarouselItem} from "mdbreact";

import "./Carousel.scss";

function CarouselImageItem({source, index}) {
    return (
        <img className="d-block w-100"
             src={source}
             alt={"Carousel Slide " + (index + 1)}
        />
    )
}

function CarouselVideoItem({source}) {
    return (
        <video className="video-fluid d-block" autoPlay loop muted playsInline>
            <source src={source} type="video/mp4" />
        </video>
    )
}

export function Carousel({contentSources, className, interval}) {
    return (
        <div className="w-100 flex-center">
            <MDBCarousel activeItem={1} length={contentSources.length}
                         showControls={contentSources.length > 1} showIndicators={contentSources.length > 1} slide={false}
                         className={"flex-center " + className}
                         interval={interval}
            >
                <MDBCarouselInner className="carousel-inner-container flex-vertical-center">
                    {contentSources.map((source, index) => {
                        let ContentType = CarouselImageItem;
                        if(source.endsWith(".mp4"))
                            ContentType = CarouselVideoItem;

                        return (
                            <MDBCarouselItem key={source} itemId={index + 1}>
                                <ContentType source={source} index={index} />
                            </MDBCarouselItem>
                        )
                    } )}
                </MDBCarouselInner>
            </MDBCarousel>
        </div>
    );
}

Carousel.propTypes = {
    contentSources: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string,
    interval: PropTypes.number
};
Carousel.defaultProps = {
    className: "",
    interval: 12000
}