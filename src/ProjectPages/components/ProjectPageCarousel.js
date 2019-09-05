import React, { Component } from "react";

import Slider from "react-slick";
import Dots from 'material-ui-dots'

export default class ProjectPageCarousel extends Component {

    state = {
        slideIndex: 0
    };

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesPerRow: 5,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,

            autoplay: true,
            cssEase: "ease-in-out",
            easing: "ease-in-out",
            autoplaySpeed: 5000,
            pauseOnHover: true,
            pauseOnFocus: true,

            focusOnSelect: true,
            swipeToSlide: true,

            beforeChange: (current, next) => this.setState({ slideIndex: next }),

            appendDots: dots => (
                <Dots
                    index={ this.state.slideIndex }
                    count={ dots.size() }
                    onDotClick={(index) => this.slider.slickGoTo(index)}
                />
            ),
        };
        return (
            <div>
                <h2> Multiple items </h2>
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                    <div>
                        <h3>9</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}