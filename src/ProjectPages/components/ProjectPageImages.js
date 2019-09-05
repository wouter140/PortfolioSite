import React, { Component } from "react";
import Slider from "react-slick";

export default class ProjectPageImages extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            rows: 2,
            slidesToScroll: 1,
            variableWidth: true,

            autoplay: true,
            cssEase: "ease-in-out",
            easing: "ease-in-out",
            autoplaySpeed: 5000,
            pauseOnHover: true,
            pauseOnFocus: true,

            focusOnSelect: true,
            swipeToSlide: true,
        };
        return (
            <div>
                <h2> Multiple items </h2>
                <Slider {...settings}>
                    { this.props.images.map((image) => (
                        <img src={ image.src } alt={ image.alt } />
                    ))}
                </Slider>
            </div>
        );
    }
}